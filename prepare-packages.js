const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFileAsync = promisify(fs.copyFile);
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const rewritePackageJSON = async (dir, transformer) => {
  const packageJsonPath = path.join(dir, 'package.json');
  const rootPackage = await readFileAsync(packageJsonPath, 'utf8');

  const packageJson = JSON.parse(rootPackage);

  const transformedJSON = transformer(packageJson);

  await writeFileAsync(
    packageJsonPath,
    JSON.stringify(transformedJSON, undefined, 2)
  );
};

const transformNativePackageJSON = package => {
  package.name = '@lifeomic/chromicons-native';
  package.peerDependencies['react-native-svg'] = '>=12.x';

  return package;
};

const prepareLib = async name => {
  const libDir = path.resolve(__dirname, 'build', name);

  const filesToCopy = ['package.json', 'README.md', 'LICENSE'];

  await Promise.all(
    filesToCopy.map(fileName =>
      copyFileAsync(
        path.resolve(__dirname, fileName),
        path.join(libDir, fileName)
      )
    )
  );

  if (name === 'native') {
    await rewritePackageJSON(libDir, transformNativePackageJSON);
  }
};

Promise.all([prepareLib('react'), prepareLib('native')]).catch(err => {
  console.error(err);
  process.exitCode = 1;
});

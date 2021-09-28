const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const isSVG = filePath => {
  const fileStats = fs.lstatSync(filePath);
  return fileStats.isFile() && path.parse(filePath).ext === '.svg';
};

const extractSVGPaths = fileOrFolder => {
  const isDir = fs.lstatSync(fileOrFolder).isDirectory();

  if (isDir) {
    return fs
      .readdirSync(fileOrFolder)
      .map(fileName => path.join(fileOrFolder, fileName))
      .filter(isSVG);
  }

  if (isSVG(fileOrFolder)) {
    return [fileOrFolder];
  }

  throw new Error('input path is neither an SVG file nor a directory');
};

const generate = async (inputPath, outputPath, sizes, cmd) => {
  if (!inputPath) {
    throw new Error(
      `input path not provided. Provide an input path as the first argument to the script. Try running: ${cmd} [file|folder]`
    );
  }

  const srcPath = path.resolve(__dirname, inputPath);
  const outPath = outputPath ? path.resolve(__dirname, outputPath) : undefined;
  const svgPaths = extractSVGPaths(srcPath);

  await Promise.all(
    svgPaths.map(svgPath => {
      const imageName = path.parse(svgPath).name;
      const outDir = path.join(outPath ?? path.dirname(svgPath), imageName);
      const image = sharp(svgPath);

      return image
        .metadata()
        .then(({ width }) => {
          fs.mkdirSync(outDir, { recursive: true });

          return Promise.all(
            sizes.map(size => {
              const outName = size !== 1 ? `${imageName}@${size}x` : imageName;
              const fileOutPath = path.join(outDir, `${outName}.png`);

              console.log(`${svgPath} -> ${fileOutPath}`);

              return image
                .resize(Math.round(width * size))
                .png()
                .toFile(fileOutPath);
            })
          );
        })
        .catch(e => {
          console.error(`Unable to process image ${path.basename(svgPath)}`);
          throw e;
        });
    })
  );
};

const args = yargs(hideBin(process.argv))
  .option('out-dir', {
    alias: 'o',
    type: 'string',
    description: 'Specify where the generated PNGs should be written',
  })
  .option('sizes', {
    alias: 's',
    type: 'array',
    default: [1, 1.5, 2, 2.5, 3, 3.5, 4],
    description: 'Image density sizes to generate',
    choices: [1, 1.5, 2, 2.5, 3, 3.5, 4],
  })
  .command(
    '[path]',
    'generate PNG(s). If [path] is a folder it generates a PNG for every SVG in the folder'
  )
  .help().argv;

generate(args._[0], args['out-dir'], args.sizes, `${process.argv0} ${args.$0}`)
  .then(() => {
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

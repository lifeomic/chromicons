module.exports = {
  branches: ['master'],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'build/react',
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'build/native',
      },
    ],
    [
      '@semantic-release/github',
      {
        failComment: false,
      },
    ],
  ],
};

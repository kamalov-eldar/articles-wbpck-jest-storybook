module.exports = {
  printWidth: 80,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 4,

  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
        // Don't reformat code examples in README
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["./"
  ],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testRegex: "((\\.|/*.)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"
  ],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage"
};
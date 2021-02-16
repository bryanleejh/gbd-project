module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src"
  ],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testRegex: "((\\.|/*.)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "js", "json", "node", "tsx"
  ],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage"
};
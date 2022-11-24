import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;

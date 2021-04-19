const helper = require("../src/helperFunctions");

describe("path param correctness", () => {
  it("should return a correct path", () => {
    expect(helper.isDir("/home/")).toBe("/home/");
  });
  it("should throw an error", () => {
    expect(() => helper.isDir("home")).toThrowError(
      "Incorrect path to dirrectory"
    );
  });
});

describe("version param correctness", () => {
  it("should pass as correct", () => {
    expect(helper.isVersion("v27.0.0")).toBe("v27.0.0");
  });
  it("should not pass as correct", () => {
    expect(() => helper.isVersion("version27.0.0")).toThrowError(
      "Please provide a correct version number"
    );
  });
});

describe("file name param correctness", () => {
  it("should pass as correct", () => {
    expect(helper.isMarkdown("changelog.md")).toBe("changelog.md");
  });
  it("should not pass as correct", () => {
    expect(() => helper.isMarkdown("changelog")).toThrowError(
      "Please provide a correct file name ending with .md"
    );
  });
});

describe("compare two commit bodies", () => {
  it("should return -1 since a < b", () => {
    expect(helper.compare("A message one", "B message two")).toEqual(-1);
  });
  it("should return 0 since a == b", () => {
    expect(helper.compare("A message one", "A message one")).toEqual(0);
  });
  it("should return 1 since a > b", () => {
    expect(helper.compare("B message two", "A message one")).toEqual(1);
  });
});

const expect = require("chai").expect;
const meta = require("../../../src/extract/transpile/meta");
const jsWrap = require("../../../src/extract/transpile/javascript-wrap");
const lsWrap = require("../../../src/extract/transpile/livescript-wrap");

describe("transpiler meta", () => {
  it("tells which extensions can be scanned", () => {
    expect(meta.scannableExtensions).to.deep.equal([
      ".js",
      ".mjs",
      ".jsx",
      ".vue",
      ".ts",
      ".tsx",
      ".d.ts",
      ".coffee",
      ".litcoffee",
      ".coffee.md",
      ".csx",
      ".cjsx"
    ]);
  });

  it("returns the 'js' wrapper for unknown extensions", () => {
    expect(meta.getWrapper("")).to.deep.equal(jsWrap);
  });

  it("returns the 'ls' wrapper for livescript", () => {
    expect(meta.getWrapper(".ls")).to.deep.equal(lsWrap);
  });

  it("returns me the available transpilers", () => {
    expect(meta.getAvailableTranspilers()).to.deep.equal([
      {
        name: "coffee-script",
        version: ">=1.0.0 <2.0.0",
        available: true
      },
      {
        name: "coffeescript",
        version: ">=1.0.0 <3.0.0",
        available: true
      },
      {
        name: "livescript",
        version: ">=1.0.0 <2.0.0",
        available: false
      },
      {
        name: "typescript",
        version: ">=2.0.0 <4.0.0",
        available: true
      },
      {
        name: "vue-template-compiler",
        version: ">=2.0.0 <3.0.0",
        available: true
      }
    ]);
  });
});

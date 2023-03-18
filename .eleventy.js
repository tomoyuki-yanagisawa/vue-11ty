module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets")

  return {
    dir: {
      input: "pages",
      output: "dist"
    }
  }
};

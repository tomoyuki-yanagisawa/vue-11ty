module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.addPassthroughCopy("data")

  return {
    dir: {
      input: "pages",
      output: "_site"
    }
  }
};

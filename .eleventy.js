module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./css/');
  eleventyConfig.addWatchTarget('./css/');
  eleventyConfig.addLayoutAlias('courses.html', 'layouts/courses.html');
  return {
  }
};

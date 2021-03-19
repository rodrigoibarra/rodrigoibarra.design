const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Here we hecking go
module.exports = function(eleventyConfig){
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("fonts");
     eleventyConfig.addPassthroughCopy("admin/config.yml");  
    return{
        addPassthroughfileCopy: true,
        dir: {
            includes: "_includes",
            layouts: "_layouts",
            posts: "_posts"
        }
    }

};
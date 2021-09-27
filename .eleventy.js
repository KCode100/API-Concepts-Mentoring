module.exports = function (eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: './public/assets/css/*.css',
	});

	return {
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'views',
			includes: '_includes',
			layouts: '_layouts',
			data: '_global',
			output: 'public',
		},
	};
};

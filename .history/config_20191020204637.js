const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://developers.blockmatic.io",
		"gaTrackingId": null
	},
	"header": {
		"title": "Blockmatic Developers",
		"githubUrl": "https://github.com/blockmatic/developers.blockmatic.io",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
      '/general-philosophy',
      '/contributing-guidelines',
      '/code-style'
    ],
		"links": [
      { "text": "Website", "link": "https://blockmatic.io"},
      { "text": "Github Organization", "link": "https://github.com/Blockmatic"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Blockmatic Developers",
		"description": "",
		"ogImage": null,
		"docsLocation": "https://github.com/blockmatic/developers.blockmatic.io/tree/master/content",
		"favicon": "https://blockmatic.io/favicon.png"
	},
};

module.exports = config;

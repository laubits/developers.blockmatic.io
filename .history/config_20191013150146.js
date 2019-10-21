const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "",
		"gaTrackingId": null
	},
	"header": {
		"title": "Emanate Developers",
		"githubUrl": "https://github.com/Emanate-official/mn8-wiki",
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
      "/",
      "/system-overview"
    ],
		"links": [
			{ "text": "Github", "link": "https://github.com/Emanate-Official"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Emanate Developers",
		"description": "",
		"ogImage": null,
		"docsLocation": "https://github.com/Emanate-official/mn8-wiki/tree/master/content",
		"favicon": "http://emanate.live/favicon.ico"
	},
};

module.exports = config;

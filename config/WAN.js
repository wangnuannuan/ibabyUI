var WANConfig = {
	"version": 1,
	"allow_edit": true,
	"plugins": [],
	"panes": [
		{
			"title": "",
			"width": 1,
			"row": {
				"1": 1,
				"2": 1,
				"3": 1
			},
			"col": {
				"1": 1,
				"2": 1,
				"3": 1
			},
			"col_width": "3",
			"widgets": [
				{
					"type": "picture",
					"settings": {
                               "src":"img/title.jpg"
					}
				}
			]
		},
		{
			"title": "CONNECTION STATUS",
			"width": 1,
			"row": {
				"1": 5,
				"2": 5,
				"3": 5
			},
			"col": {
				"1": 1,
				"2": 1,
				"3": 1
			},
			"col_width": 1,
			"widgets": [
				{
					"type": "interactive_indicator",
					"settings": {
						"title": "AWS IOT CONNECTION STATUS",
						"value": "datasources[\"aws\"][\"connected\"]",
						"callback": "datasources[\"aws\"][\"connected\"]",
						"on_text": "CONNECTED",
						"off_text": "DISCONNECTED"
					}
				}
			]
		}
	],

	"datasources": [
		{
			"name": "aws",
			"type": "aws_iot",
			"settings": {
				"endpoint": "a337ix15phd3li.iot.ap-southeast-1.amazonaws.com",
				"region": "ap-southeast-1",
				"clientId": "",
				"accessKey": "AKIAJ7SOVP3U6BH4UF2Q",
				"secretKey": "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",
				"things": [
					{
						"thing": "iBaby"
					}
				]
			}
		}
	],
	"columns": 3
};
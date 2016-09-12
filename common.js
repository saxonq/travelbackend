var common = {
	env: 'LOCAL',
	// env: 'PROD',
	dburl: {
		'LOCAL' : 'mongodb://127.0.0.1:27017',
		'PROD' : 'mongodb://127.0.0.1:27017'
	},
	port: {
		'LOCAL' : 5000,
		'PROD' : 5000
	}
}
module.exports.dburl = common.dburl[common.env];
module.exports.port = common.port[common.env];

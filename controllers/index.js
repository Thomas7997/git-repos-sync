// Libs
const axios = require("axios");

function hanldeError(err, res) {
	console.log(`error : ${err}`);
	res.status(500).json({ success : false, data : err });
}

function listing () {
	return new Promise((resolve, reject) => {
			return new Promise((resolve, reject) => {
			axios.get(`${host}/user`).then(r1 => {
				axios.get(`/users/${r1.login}/repos`).then(r2 => resolve(r2))
				.catch(err => reject(err));
			}).catch (err => reject(err));
		});

		// GET /user
		// GET /users/{username}/repos
	});
}

exports.get_list = (req, res, next) => {
	listing.then(rs => res.json({ success : true, data : rs }))
	.catch(err => handleError(err, res));
}

function download (name) {

}

exports.download_repo = (req, res, next) => {

}

function synchronize () {
	return new Promise((resolve, reject) => {

	});
}

exports.refresh_sync = (req, res, next)  => {
	synchronize().then(s => res.json({ success : true, data : s }))
	.catch(err => handleError(err, res));
}
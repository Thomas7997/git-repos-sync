// Libs
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const keys = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    proxy_url: process.env.REACT_APP_PROXY_URL
};

const host = "";

exports.getUrl = (req, res, next) => {
	const { client_id, redirect_uri, proxy_url } = keys;

	res.json({
		url : `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`,
		proxy_url
	});
}

function handleError(err, res) {
	console.log(`error : ${err}`);
	res.status(500).json({ success : false, data : err });
}

const listing = () => {
	return new Promise((resolve, reject) => {
		return axios.get(`${host}/user`).then(r1 => {
			return axios.get(`/users/${r1.data.login}/repos`).then(r2 => resolve(r2.data)).catch(err => reject(err));
		}).catch (err => reject(err));
	});

	// GET /user
	// GET /users/{username}/repos
}

exports.get_list = (req, res, next) => {
	listing().then(rs => res.json({ success : true, data : rs }))
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
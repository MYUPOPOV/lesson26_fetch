/*jshint esversion: 6 */

/* Обязательное задание */
/* Promise. Fetch. */

const getData = () => {
	return fetch('db.json')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			// sendData(data);
		})
		.catch((error) => {
			console.log(error);
		});
};

const sendData = (data) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		});
};

sendData(getData());

/* Усложненное задание */
/* XMLHttpRequest */

const xhrGet = new XMLHttpRequest();
xhrGet.open('GET', 'db.json', [false]);
xhrGet.send();
xhrGet.onload = function () {
	let response = JSON.parse(xhrGet.response);
	console.log(response);
	xhrSend(response);
};

const xhrSend = function (response) {
	let xhrSend = new XMLHttpRequest();
	xhrSend.open('POST', 'https://jsonplaceholder.typicode.com/posts', [false]);
	xhrSend.send(response);
	xhrSend.onload = function () {
		let response = JSON.parse(xhrSend.response);
		console.log(response);
	};
};

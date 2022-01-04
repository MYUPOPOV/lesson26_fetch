/*jshint esversion: 6 */

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
			console.log(error);
		})
		.catch((error) => {
			console.log(error);
		});
};

sendData(getData());

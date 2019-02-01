const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const firebase = require("firebase");

const app = express();
const port = process.env.PORT || 5000;

//firebase config
const config = {
	apiKey: "AIzaSyDLk-VpYA8hEbR8RpkP4yGIm6FEdJSjxHA",
	authDomain: "novatics-quotes.firebaseapp.com",
	databaseURL: "https://novatics-quotes.firebaseio.com",
	projectId: "novatics-quotes",
	storageBucket: "novatics-quotes.appspot.com",
	messagingSenderId: "43394834730"
};

//firebase initializer
firebase.initializeApp(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/posts", (req, res) => {
	var newStateOut = [];
	const oldPosts = firebase.database().ref("post");
	oldPosts.on("value", snapshot => {
		var newState = [];
		var oldPosts = snapshot.val();
		for (let i in oldPosts) {
			newState.push({
				id: i,
				message: oldPosts[i].message,
				user: oldPosts[i].user
			});
		}
		// console.log({ newState: newState });
		newStateOut = newState;
	});
	// console.log({ newStateOut: newStateOut });
	res.send(newStateOut);
});

app.post("/api/namapost", (req, res) => {
	res.send(`/namapost ${req.body.text}`);
	const itemsRef = firebase.database().ref("post");
	const post = {
		id: req.body.token,
		channel: req.body.channel_name,
		user: req.body.user_name,
		message: req.body.text
	};
	itemsRef.push(post);

	// console.log({ posts: posts });
	// console.log({ req: req.body });
});

if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "client/build")));

	// Handle React routing, return all requests to React app
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [];
// API calls
app.get("/api/hello", (req, res) => {
	res.send(posts);
});

app.post("/api/world", (req, res) => {
	res.send(`/namastop ${req.body.text}`);
	posts.push({
		id: req.body.token,
		channel: req.body.channel_name,
		user: req.body.user_name,
		message: req.body.text
	});
	console.log({ posts: posts });
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

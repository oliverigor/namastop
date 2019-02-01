# Namastop

> Awesome web app using NODE and create-react-app

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn install
cd client
yarn install
```

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:5000

```
NODE_ENV=production yarn dev:server
```

## Future Work

Help us improve this amazing system! Some features that could be implemented in future work:

##### Real time update

Use a firebase function for update news namastops in real time

##### Filter system

Filter the messages by author and by channel

##### Interaction with bot

Create an interaction with the namastop bot

##### Improve tests

Tests are never enough.

##### Get users information

Get the photo and other informations for dispay on screen

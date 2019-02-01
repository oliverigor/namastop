import React, { Component } from "react";
import logoNovatics from "./Marca_Novatics_negativo.png";
import { Container, Row, Button } from "react-materialize";
import "./App.css";
import jsonData from "./quotes";
import firebase from "./firebase";

import CardQuotes from "./CardQuotes";

class App extends Component {
  state = {
    response: "",
    posts: "",
    responseToPost: "",
    data: jsonData,
    dataAPI: null
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

    const oldPosts = firebase.database().ref("post");
    oldPosts.on(
      "value",
      snapshot => {
        let newState = [];
        var oldPosts = snapshot.val();
        for (let i in oldPosts) {
          oldPosts[i].map(aqui => {
            newState.push({
              id: aqui.id,
              message: aqui.message,
              user: aqui.user
            });
            return this.setState({
              posts: newState,
              dataAPI: newState
            });
          });
        }
      },
      function(error) {
        console.log("Error: " + error.code);
      }
    );
    // console.log({ oldPosts: oldPosts });
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleNewQuotes = async () => {
    console.log("entrei aqui");
    const response = await fetch("/api/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
      // body: JSON.stringify({ posts: this.state.posts })
    });
    const body = await response.text();

    this.setState({ dataAPI: JSON.parse(body) });
    const post = this.state.dataAPI;
    const itemsRef = firebase.database().ref("post");
    itemsRef.push(post);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logoNovatics} alt="logo" height={30} />
          </div>
        </header>
        {/*<p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>*/}
        <div className="container-main">
          <Container>
            <Row>
              {this.state.dataAPI ? (
                this.state.dataAPI.map(quotes => (
                  <CardQuotes key={quotes.id} quotes={quotes} />
                ))
              ) : (
                <p>loading...</p>
              )}
            </Row>
            <Button
              floating
              large
              className="blue"
              waves="light"
              icon="add"
              onClick={() => this.handleNewQuotes()}
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

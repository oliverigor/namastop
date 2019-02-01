import React, { Component } from "react";
import logoNovatics from "../images/Marca_Novatics_negativo.png";
import { Container, Row, Button } from "react-materialize";
import "./App.css";

import CardQuotes from "./CardQuotes";

class App extends Component {
  state = {
    response: "",
    posts: "",
    responseToPost: "",
    dataA: null
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/posts");

    const body = await response.json();
    this.setState({ data: body });
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleNewQuotes = async () => {
    const response = await fetch("/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const body = await response.json();

    this.setState({ data: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logoNovatics} alt="logo" height={30} />
          </div>
        </header>
        <div className="container-main">
          <Container>
            <Row>
              {this.state.data ? (
                this.state.data.map(quotes => (
                  <CardQuotes key={quotes.id} quotes={quotes} />
                ))
              ) : (
                <p>loading...</p>
              )}
            </Row>
            <Button
              large
              className="blue"
              waves="light"
              onClick={() => this.handleNewQuotes()}
            >
              {" "}
              + menções?
            </Button>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

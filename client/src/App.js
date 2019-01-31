import React, { Component } from "react";
import logoNovatics from "./Marca_Novatics_negativo.png";
import { Container, Row } from "react-materialize";
import "./App.css";
import jsonData from "./quotes";

import CardQuotes from "./CardQuotes";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
    data: jsonData
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
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
              {this.state.data ? (
                this.state.data.map(quotes => (
                  <CardQuotes key={quotes._id} quotes={quotes} />
                ))
              ) : (
                <p>loading...</p>
              )}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

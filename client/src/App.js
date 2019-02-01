import React, { Component } from "react";
import logoNovatics from "./Marca_Novatics_negativo.png";
import { Container, Row, Button } from "react-materialize";
import "./App.css";
import jsonData from "./quotes";
import "./bubbleloading.css";

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
  }

  callApi = async () => {
    const response = await fetch("/api/posts");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleNewQuotes = async () => {
    console.log("entrei aqui");
    const response = await fetch("/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const body = await response.text();
    console.log({ body: body });

    this.setState({ dataAPI: JSON.parse(body) });

    // const post = this.state.dataAPI;
  };

  render() {
    console.log(this.state.dataAPI);
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
              {this.state.dataAPI ? (
                this.state.dataAPI.map(quotes => (
                  <CardQuotes key={quotes.id} quotes={quotes} />
                ))
              ) : (
                // <div class="container-bubble">
                //   <div class="circle circle1" />
                //   <div class="circle circle2" />
                //   <div class="circle circle3" />
                //   <div class="circle big" />
                //   <div class="circle circle4" />
                //   <div class="circle circle5" />
                //   <div class="circle circle6" />
                //   <div class="circle circle7" />
                // </div>
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

import React, { Component } from "react";
import { Card, Col } from "react-materialize";
import "./App.css";
import logoNovatics from "./Marca_Novatics_negativo.png";

class CardQuotes extends Component {
	render() {
		return (
			<Col m={4} s={12}>
				<Card className="small" textClassName="black-text align-left">
					<div className="card-title">
						{this.props.quotes.name.first}
					</div>
					<div className="card-image">
						<img src={logoNovatics} alt="foto-bonita" />
						<div className="card-stacked">
							<div className="card-content">
								<p>{this.props.quotes.greeting}</p>
							</div>
						</div>
					</div>
				</Card>
			</Col>
		);
	}
}

export default CardQuotes;

import React, { Component } from "react";
import { Card, Col } from "react-materialize";
import "./App.css";
import logoNovatics from "../images/Marca_Novatics_negativo.png";

class CardQuotes extends Component {
	render() {
		return (
			<Col m={4} s={12}>
				<Card className="small" textClassName="black-text align-left">
					<div className="card-image-override">
						<img
							src={logoNovatics}
							alt="foto-bonita"
							className="image-override"
						/>
					</div>
					<div className="card-title">{this.props.quotes.user}</div>

					<div className="card-stacked">
						<div className="card-content">
							<p>{this.props.quotes.message}</p>
						</div>
					</div>
				</Card>
			</Col>
		);
	}
}

export default CardQuotes;

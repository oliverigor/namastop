import React, { Component } from "react";
import { Card } from "react-materialize";
import "./App.css";
import logoNovatics from "./Marca_Novatics_negativo.png";

class CardQuotes extends Component {
	render() {
		return (
			<Card
				className="small"
				textClassName="black-text align-left"
				title="Primeiro Card"
			>
				<div className="card-image">
					<img src={logoNovatics} alt="foto-bonita" />
					<div className="card-stacked">
						<div className="card-content">
							<p>
								I am a very simple card. I am good at containing
								small bits of information.
							</p>
						</div>
					</div>
				</div>
			</Card>
		);
	}
}

export default CardQuotes;

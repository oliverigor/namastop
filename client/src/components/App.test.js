import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import CardQuotes from "./CardQuotes";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
});

test("Should render correctly", () => {
	const renderer = new ShallowRenderer();
	const quotes = { id: "HheuashaHh($*QR", user: "igor", message: "falavei" };
	const component = renderer.render(
		<CardQuotes key={quotes.id} quotes={quotes} />
	);

	expect(component).toMatchSnapshot();
});

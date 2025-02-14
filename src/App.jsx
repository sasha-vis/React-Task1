import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
	// декларативный стиль
	const [count, setCount] = useState(0);

	// декларативный стиль
	const currentYear = new Date().getFullYear();

	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			null,
			React.createElement(
				"a",
				{ href: "https://vite.dev", target: "_blank" },
				React.createElement("img", {
					src: viteLogo,
					className: "logo",
					alt: "Vite logo",
				}),
			),
			React.createElement(
				"a",
				{ href: "https://react.dev", target: "_blank" },
				React.createElement("img", {
					src: reactLogo,
					className: "logo react",
					alt: "React logo",
				}),
			),
		),
		React.createElement("h1", null, "Vite + React"),
		React.createElement(
			"div",
			{ className: "card" },
			React.createElement(
				"button",
				{ onClick: () => setCount((count) => count + 1) },
				`count is ${count}`,
			),
			React.createElement(
				"p",
				null,
				"Edit ",
				React.createElement("code", null, "src/App.jsx"),
				" and save to test HMR",
			),
		),
		React.createElement(
			"p",
			{ className: "read-the-docs" },
			"Click on the Vite and React logos to learn more",
		),
		React.createElement("p", null, currentYear),
	);
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/color.css";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";

// Import components from the "pages" folder
import BubbleChart from "./pages/Bubblechart";
import WorldHexagonMapOne from "./pages/WorldhexagonmapOne";
import WorldHexagonMap from "./pages/Worldhexagonmap";

ReactDOM.render(
  <React.StrictMode>
    {/* Render your components here */}
    <App /> 
    <BubbleChart />
    <WorldHexagonMapOne />
    <WorldHexagonMap />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Wrapper } from "ui";
import AppRouter from "./AppRouter";
import { routes } from "./constants";
import { BaseRoute } from "./enums";

const App = () => {
  return (
    <Wrapper
      title={"Student"}
      customBaseRoute={`/${BaseRoute.STUDENT}`}
      customRoutes={[...Object.values(routes[BaseRoute.STUDENT])]}
      standardRoutes={[...Object.values(routes[BaseRoute.STANDARD])]}
    >
      <AppRouter />
    </Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

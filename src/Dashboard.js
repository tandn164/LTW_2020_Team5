import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Game from "./components/game/Game"

function DashboardRoute() {
  return (
      <div>
          <Route path="/game" component={Game} />
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })
        }
      </div>
  )
}
export default DashboardRoute;

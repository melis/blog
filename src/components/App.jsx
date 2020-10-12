import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Link to="1">dsdsdsdsd</Link>
        <Route path="/:id" component={T1} />
        <Route
          path="/"
          render={(a) => {
            console.log(a);
            return <T1 a={a} />;
          }}
        />
        <div>2</div>
        <div>3</div>
      </Router>
    </div>
  );
};
const T1 = (props) => {
  console.log(props);
  return <div>AAS</div>;
};

export default App;

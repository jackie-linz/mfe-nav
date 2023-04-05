import { Link } from "react-router-dom";
import React from "react";

// const Button = React.lazy(() => import('app1/Button'));

const App: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page1">Page 1</Link>
        </li>
        <li>
          <Link to="/app1">App 1</Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;

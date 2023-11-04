import {
    Home,
    Service
} from "./Components";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Fragment } from "react";

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App
//        />,
//       children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "service",
//         element: <Service />
//       },
//     ]
//     }
//   ])

const SydekRouter = () => {
    return (
      <Fragment>
        <Router>
        <div className="container">
                <Link to="./home">Home</Link>
                <Link to="./service">Service</Link>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
        </Routes>
        </Router>
      </Fragment>
    )
};

export default SydekRouter;
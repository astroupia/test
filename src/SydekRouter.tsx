import {
    Home,
    Service
} from "./Components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const SydekRouter = () => {
    return (
        <Router>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Service />} />
        </Router>
    )
};

export default SydekRouter;
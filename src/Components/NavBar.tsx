import { BrowserRouter as Router} from "react-router-dom";
import { Link }from "react-router-dom";

const Service = () => {
    return (
        <Router>
            <div className="container">
                <Link to="./home">Home</Link>
                <Link to="./service">Service</Link>
            </div>
        </Router>
    )
};

export default Service;
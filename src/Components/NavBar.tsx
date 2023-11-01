import { Fragment } from "react";
import { ReloadLink } from "./";
// import { Link } from "react-router-dom";

const Service = () => {
    return (
        <Fragment>
            <div className="container">
                <ReloadLink to="./home">Home</ReloadLink>
                <ReloadLink to="./service">Service</ReloadLink>

            </div>
        </Fragment>
    )
};

export default Service;
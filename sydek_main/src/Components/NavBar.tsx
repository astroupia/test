import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Service = () => {
    return (
        <Fragment>
            <div className="container">
                <ul>
                <NavLink
                    to="/home"
                    >
                        Home
                </NavLink>;
                <NavLink
                    to="/service"
                    >
                        service
                </NavLink>;

                </ul>
            </div>
        </Fragment>
    )
};

export default Service;
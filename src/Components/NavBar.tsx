import { Fragment } from "react";
import { Link } from "react-router-dom";

const Service = () => {
    return (
        <Fragment>
            <div className="container">
                <ul>
                <Link
                    to="/home"
                    >
                        Home
                </Link>;
                <Link
                    to="/service"
                    >
                        service
                </Link>;

                </ul>
            </div>
        </Fragment>
    )
};

export default Service;
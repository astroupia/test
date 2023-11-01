import { Fragment } from "react";
// import { Link } from "react-router-dom";

const Service = () => {
    return (
        <Fragment>
            <div className="container">
                <ul>
                <a
                    href="/home"
                    >
                        Home
                </a>;
                <a
                    href="/service"
                    >
                        service
                </a>;

                </ul>
            </div>
        </Fragment>
    )
};

export default Service;
import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
    render() {
        return (
            <div id="home" className="intro route bg-image background">
                <div id="stars"/>
                <div id="stars2"/>
                <div id="stars3"/>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="intro-title mb-4">Hallo, Ik ben Joris Nijkamp</h1>
                            <p className="intro-subtitle">
                                <span className="text-slider-items"></span>
                                <strong className="text-slider">
                                    <Typed
                                        strings={[
                                            "Junior Developer",
                                            "Front End Developer",
                                            "Back End Developer",
                                            "Web Developer"
                                        ]}
                                        typeSpeed={50}
                                        backDelay={250}
                                        backSpeed={30}
                                        loop/>
                                </strong>
                            </p>
                            <p className="pt-3">
                                <a className="btn btn-primary btn js-scroll px-4" href="#work" role="button">
                                    Bekijk hier mijn werk!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;

import React from "react";
import myImage from "../../img/myImage.png";
import Skills from "./skill";
import AboutMeInfo from "./aboutMeInfo";

class About extends React.Component {
    render() {
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div
                                                className="col-sm-6 col-md-5"
                                                style={{margin: "0 auto"}}>
                                                <div className="about-img"
                                                     style={{textAlign: "center"}}>
                                                    <img className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        {<Skills/>}
                                    </div>
                                    {<AboutMeInfo/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;

import React from "react";

import logo1 from "../img/male1.png";
import {anchorLinksAnimation} from "../libs/functions";
import logo2 from "../img/male.png";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            logo: logo1
        };
    }

    componentDidMount() {
        anchorLinksAnimation();
        this.changeLogo();
    }

    changeLogo = () =>{
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                document
                    .querySelector(".navbar-expand-md")
                    .classList.add("navbar-reduce");
                document
                    .querySelector(".navbar-expand-md")
                    .classList.remove("navbar-trans");
                this.setState({logo: logo2});
            } else {
                document
                    .querySelector(".navbar-expand-md")
                    .classList.add("navbar-trans");
                document
                    .querySelector(".navbar-expand-md")
                    .classList.remove("navbar-reduce");
                this.setState({logo: logo1});
            }
        });
    }

    render() {
        return (
            <nav
                className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
                id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll" href="#page-top">
                        <img
                            src={this.state.logo}
                            alt="logo"
                            style={{maxWidth: "100px"}}
                        />
                    </a>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll active" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#about">
                                    Over mij
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#work">
                                    Mijn werk
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;

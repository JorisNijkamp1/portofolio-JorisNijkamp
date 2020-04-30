import React from 'react';
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import BackToTop from "./components/back-top";
import Preloader from "./components/preloader";
import {Switch, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <Intro />
                        <About />
                        <Portfolio />
                        <Contact />
                        <BackToTop />
                        <Preloader />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App

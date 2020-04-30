import React from "react";

class AboutMeInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            about_me: [
                {
                    id: "first-p-about", content: "Hoi ik ben joris"
                },
                {
                    id: "second-p-about", content: "Ik ben een webdeveloper"
                }
            ]
        };
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                        <h5 className="title-left">Over mij</h5>
                    </div>
                    {this.state.about_me.map(content => {
                        return (
                            <p className="lead" key={content.id}>
                                {content.content}
                            </p>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default AboutMeInfo

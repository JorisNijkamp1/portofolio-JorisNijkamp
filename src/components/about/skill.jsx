import React from "react";

class Skills extends React.Component {

    constructor() {
        super();
        this.state = {
            skills: [
                {id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80"},
                {id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75"},
                {id: "MongoDB_skill", content: "MongoDb", porcentage: "75%", value: "75"},
                {id: "MySQL_skill", content: "MySQL", porcentage: "70%", value: "70"},
                {id: "JavaScript_skill", content: "JavaScript", porcentage: "70%", value: "70"},
                {id: "ReactJS_skill", content: "ReactJS", porcentage: "65%", value: "65"},
                {id: "Java_skill", content: "Java", porcentage: "60%", value: "60"},
                {id: "PHP_skill", content: "PHP", porcentage: "60%", value: "60"},
                {id: "JavaEE_skill", content: "JavaEE", porcentage: "45%", value: "45"},
                {id: "Express_skill", content: "Express", porcentage: "40%", value: "40"},
            ]
        };
    }

    render() {
        return (
            <div className="skill-mf">
                {this.state.skills.map(skill => {
                    return (
                        <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                                                            {skill.porcentage}
                                                        </span>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{width: skill.porcentage}}
                                    aria-valuenow={skill.value}
                                    aria-valuemin="0"
                                    aria-valuemax="100"/>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        )
    }
}

export default Skills

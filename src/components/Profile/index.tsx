import * as React from "react";
class Profile extends React.Component {
  render() {
    const frontEndSkills = ["html", "javascript","React", "Jquery" ];
    const backEndSkills = ["node","java", "golang","python" ];
    return (
      <div className="myprofile">
        <h3>
          <a href="https://drive.google.com/file/d/1cP8QcU_QVOxJCemO2XXWXQi8Uja-VgK2/view?usp=sharing">Click Here</a> to get my profile
        </h3>
        <div className="skillset">
          <div className="skillSubHeader">
            <p>Front-end Proficiecies: </p>
          </div>
          <ul>
            {frontEndSkills.map(skill =>  <li>{skill}</li> )}
          </ul>
        </div>
        <div className="skillset">
          <div className="skillSubHeader">
            <p>Back-end Proficiecies: </p>
          </div>
          <ul>
            {backEndSkills.map(skill =>  <li>{skill}</li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;

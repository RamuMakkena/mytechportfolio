import * as React from "react";
import Project from "../Project";

interface ProjectProps {
  name: string;
  repo: string;
  liveURL: string;
  imageURL: string;
  majorSkill: string;
}

class Portfolio extends React.Component {


// BUilding repo link dynamically based on repo name
    getRepo(reponame:string){
        return "https://github.com/RamuMakkena/"+reponame;
    }
  render() {
    // List of projects we would like to render
    let projects: ProjectProps[] = [
      {
        name: "Run Buddy",
        repo: "run-buddy",
        liveURL: "https://ramumakkena.github.io/run-buddy/",
        imageURL: "runbuddy.png",
        majorSkill: "HTML, CSS",
      },
      {
        name: "Trip Planner",
        repo: "TripPlanner",
        liveURL: "https://ramumakkena.github.io/TripPlanner/",
        imageURL: "tripplanner.png",
        majorSkill: "HTML CSS JS",
      },
      {
        name: "CodEZ",
        repo: "group-project2-codEZ",
        liveURL: "https://cod-ez-community.herokuapp.com/api/tips/",
        imageURL: "codez.png",
        majorSkill: "Node JS, Bootstrap, MySql",
      },
      {
        name: "budget tracker",
        repo: "budgettracker",
        liveURL: "https://ramu-makkena-budget-tracker.herokuapp.com/",
        imageURL: "budgettracker.png",
        majorSkill: "nodejs, mysql,pwa",
      },
      {
        name: "myportfolio",
        repo: "mytechportfolio",
        liveURL: "https://ramumakkena.github.io/mytechportfolio/",
        imageURL: "myprofile.png",
        majorSkill: "React",
      },
      {
        name: "taskinator",
        repo: "taskinator",
        liveURL: "https://ramumakkena.github.io/taskinator/",
        imageURL: "taskinator.png",
        majorSkill: "nodejs",
      },
    ];

    return (
      //Rendering actual portfolio section, we are calling each project details to a separate Project component 
<div className="d-flex flex-row  flex-wrap justify-content-center">
        {projects.map((project) => (
          <div className="d-flex col-sm-12 col-md-6 col-lg-5 m-2  project">
            <Project name={project.name} repo={project.repo} liveURL={project.liveURL} imageURL={project.imageURL} majorSkill={project.majorSkill}/>
          </div>
        ))}
      </div>
    );
  }
}
export default Portfolio;

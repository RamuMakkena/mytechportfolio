import * as React from "react";
import Project from "../Project";
// import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  name: string;
  repo: string;
  liveURL: string;
  imageURL: string;
  majorSkill: string;
}

class Portfolio extends React.Component {



    getRepo(reponame:string){
        return "https://github.com/RamuMakkena/"+reponame;
    }
  render() {
    let projects: ProjectProps[] = [
      {
        name: "Run Buddy",
        repo: "run-buddy",
        liveURL: "https://ramumakkena.github.io/run-buddy/",
        imageURL: "runbuddy.png",
        majorSkill: "React",
      },
      {
        name: "Trip Planner",
        repo: "TripPlanner",
        liveURL: "https://ramumakkena.github.io/TripPlanner/",
        imageURL: "tripplanner.png",
        majorSkill: "React",
      },
      {
        name: "CodEZ",
        repo: "group-project2-codEZ",
        liveURL: "https://cod-ez-community.herokuapp.com/api/tips/",
        imageURL: "codez.png",
        majorSkill: "React",
      },
      {
        name: "budget tracker",
        repo: "budgettracker",
        liveURL: "https://ramu-makkena-budget-tracker.herokuapp.com/",
        imageURL: "budgettracker.png",
        majorSkill: "React",
      },
      {
        name: "myportfolio",
        repo: "mytechportfolio",
        liveURL: "",
        imageURL: "RamuMakkena.jpg",
        majorSkill: "React",
      },
      {
        name: "taskinator",
        repo: "taskinator",
        liveURL: "https://ramumakkena.github.io/taskinator/",
        imageURL: "taskinator.png",
        majorSkill: "React",
      },
    ];

    return (
      // <div className='d-flex flex-row  flex-wrap justify-content-center mb-3 p-3'>
      //         {projects.map(project =><div className='p-2 mb-5 col-sm-5 col-md-5 project'> <Project name={project.name} repo={project.repo} liveURL={project.liveURL} imageURL={project.imageURL} majorSkill={project.majorSkill}/> </div>) }
      // </div>
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

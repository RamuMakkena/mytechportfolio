import React from 'react';
import { FaGithub} from "react-icons/fa";
interface ProjectProps{
    name: string,
    repo: string,
    liveURL: string,
    imageURL: string,
    majorSkill: string
}
class Project extends React.PureComponent<ProjectProps>{
// Actual project component
    getRepo(reponame:string){
        return "https://github.com/RamuMakkena/"+reponame;
    }
    render(){
        const {name, repo, liveURL,imageURL, majorSkill} = this.props;
        return(
            <>
            
            <a href={liveURL} target="_blank" rel="noreferrer">
            <img
              className="img-fluid"
              src={require(`../../assets/images/${imageURL}`)}
              alt={name}
            />
          </a>
          <div className='projectHeader'>
            <h3>
              {name}
              <a href={this.getRepo(repo)} target="_blank" rel="noreferrer">
                <FaGithub className="mr-2 ml-2" />
              </a>
            </h3>
            <h4>Technologies: <span>{majorSkill}</span></h4>
          </div>
          </>
        );
    }

}

export default Project;
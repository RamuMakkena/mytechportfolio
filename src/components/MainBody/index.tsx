import React from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Profile from '../Profile';
import ReachMe from '../ReachMe';
interface MainBodyProps{
    currentTab: string
    
}
class MainBody extends React.PureComponent<MainBodyProps>{

    getComponent(currentTab: string){
        if(currentTab === "About Me"){
            return <AboutMe/>
        } else if(currentTab === "Portfolio"){
            return <Portfolio/>
        } else if(currentTab === "Reach Me"){
            return <ReachMe/>
        } else{
            return <Profile/>
        }
    }
    render(){
        const {currentTab } = this.props;
        
        return(
            <div>
            <h2>{currentTab}</h2>
            {this.getComponent(currentTab)}
            </div>
        );
    }
}
export default MainBody;
import React from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Profile from '../Profile';
import ReachMe from '../ReachMe';
interface MainBodyProps{
    currentTab: string
    
}
class MainBody extends React.PureComponent<MainBodyProps>{
    constructor(props: MainBodyProps){
        super(props);
    }
    getComponent(currentTab: string){
        if(currentTab === "About Me"){
            return <AboutMe/>
        } else if(currentTab === "Portfolio"){
            return <Portfolio/>
        } else if(currentTab === "Rerch Me"){
            return <ReachMe/>
        } else{
            return <Profile/>
        }
    }
    render(){
        const {currentTab } = this.props;
        
        return(
            this.getComponent(currentTab)
        );
    }
}
export default MainBody;
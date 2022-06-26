import * as React from 'react';
class Profile extends React.Component{
    render(){
        return(
            <div className="myprofile">
                <h3 ><a href="http://google.com">Click Here</a> to get my profile</h3>
                <br/>
                <h3 >Have a section about your frontend skills</h3>
                <br/>
                <h3 >Add a section about your backend skills</h3>
            </div>
        );
    }
}

export default Profile;
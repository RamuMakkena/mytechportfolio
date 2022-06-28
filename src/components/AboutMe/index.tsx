import * as React from 'react';
import mypic from '../../assets/images/RamuMakkena.jpg';

class AboutMe extends React.Component{
    render() {
        return(
            // A simple about me section with a picture. This needs to improve.
            //Created two simple css classes for the same
            <div className='m-3'>
                <div className="mypic">
                    <img src={mypic} alt="Ramu Makkena"></img>
                </div>
                <div className="myintro m-3">
                   <h4>
                   Working as a software development engineer in a reputed firm. Having experience in wider range of technologies from software development to configuring applications like Kronos time and attendance. Over the span of a decade, I worked across multiple domains like time and attendance, retail, e-commerce and Human resources.
                   </h4>
                </div>
            </div>
        );
    }
}

export default AboutMe;
import * as React from 'react';
import mypic from '../../assets/images/RamuMakkena.jpg';

class AboutMe extends React.Component{
    render() {
        return(
            <div className='d-flex'>
                <div className="mypic">
                    <img src={mypic} alt="Ramu Makkena"></img>
                </div>
                <div className="myintro">
                   <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eligendi dolores, excepturi quasi officia rem voluptatem tenetur accusamus reiciendis eum, adipisci vero illo maxime, nemo odit natus deleniti repellendus quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eligendi dolores, excepturi quasi officia rem voluptatem tenetur accusamus reiciendis eum, adipisci vero illo maxime, nemo odit natus deleniti repellendus quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eligendi dolores, excepturi quasi officia rem voluptatem tenetur accusamus reiciendis eum, adipisci vero illo maxime, nemo odit natus deleniti repellendus quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eligendi dolores, excepturi quasi officia rem voluptatem tenetur accusamus reiciendis eum, adipisci vero illo maxime, nemo odit natus deleniti repellendus quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eligendi dolores, excepturi quasi officia rem voluptatem tenetur accusamus reiciendis eum, adipisci vero illo maxime, nemo odit natus deleniti repellendus quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eligendi dolores, excepturi quasi officia rem voluptatem tenetur accusamus reiciendis eum, adipisci vero illo maxime, nemo odit natus deleniti repellendus quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eligendi dolores, excepturi quasi officia rem voluptatem tenetur accusamus reiciendis eum, adipisci vero illo maxime, nemo odit natus deleniti repellendus quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eligendi dolores, excepturi quasi officia rem voluptatem tenetur accusamus reiciendis eum, adipisci vero illo maxime, nemo odit natus deleniti repellendus quam.
                   </h4>
                </div>
            </div>
        );
    }
}

export default AboutMe;
import * as React from 'react';
import {FaFacebookF, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

class Footer extends React.Component{
    handleFooterClick(target:string){
        switch(target){
            case "FB":
                console.log("FB");
                window.open("https://facebook.com/RamuMakkena");
                break;
            case "IN":
                console.log("INsta");
                window.open("https://www.instagram.com/rammakkena/");
                break;
            case "LI":
                console.log("Linked IN");
                window.open("https://www.linkedin.com/in/ramanjaneyulu-makkena-27b75569/");
                break;
            case "GH":
                console.log("Github");
                window.open("https://www.github.com/ramumakkena/");
                break;
        }
        
    }
    render() {
        return(
            <div className='d-flex justify-content-between align-items-center bg-dark text-white pr-2'>
                <h3 className='d-inline '>Ramu makkena</h3>
                <FaFacebookF className="mr-2 ml-2" onClick={() => this.handleFooterClick("FB")}/>
                <FaInstagram className="mr-2 ml-2"  onClick={() => this.handleFooterClick("IN")}/>
                <FaLinkedin  className="mr-2 ml-2"  onClick={() => this.handleFooterClick("LI")}/>
                <FaGithub className="mr-2 ml-2"  onClick={() => this.handleFooterClick("GH")}/>
            </div>
        );
    }
}

export default Footer;
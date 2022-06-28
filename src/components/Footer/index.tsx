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

                < >
                    <h3 className="ps-3 bg-dark">Ramu makkena</h3>
                    <FaFacebookF  onClick={() => this.handleFooterClick("FB")}/>
                    <FaInstagram   onClick={() => this.handleFooterClick("IN")}/>
                    <FaLinkedin    onClick={() => this.handleFooterClick("LI")}/>
                    <FaGithub  onClick={() => this.handleFooterClick("GH")}/>
                </>
            
            // <div className="footerSection"></div>
        );
    }
}

export default Footer;
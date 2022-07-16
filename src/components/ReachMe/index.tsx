import * as React from "react";
import { validateEmail } from "../../utils/helpers/helpers";

type ReachMeState = {
  email: string;
  name: string;
  message: string;
  errorMessage: string;
  successMessage: string;
};

class ReachMe extends React.Component<{}, ReachMeState> {
  state: ReachMeState = {
    email: "",
    name: "",
    message: "",
    errorMessage: "",
    successMessage: "",
  };
  sendCommunication(email:string, name: string, message: string){
    //write code to send an email
  }
  handleInputChange(e: any) {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      this.setState({ email: inputValue });
    } else if (inputType === "name") {
      this.setState({ name: inputValue });
    } else {
      this.setState({ message: inputValue });
    }
  }

  handleFormSubmit(e: any) {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    const { email, name, message } = this.state;
    console.log("we are here");
    console.log(email, name, message);
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    
    this.setState({ successMessage: "" });
    if (!validateEmail(email)) {
      this.setState({ errorMessage: "Email is invalid" });
      return;
    }
    if (!name) {
      this.setState({ errorMessage: "Name is required" });
      return;
    }

    if (!message) {
      this.setState({ errorMessage: "Message is required" });
      return;
    }

    this.sendCommunication(name, email, message);
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    this.setState({ name: "" });
    this.setState({ email: "" });
    this.setState({ message: "" });
    this.setState({ errorMessage: "" });
    this.setState({ successMessage: "Communitcation sent" });
  }
  

  render() {
    return (

      //reach me form need to implement 
      <form className="border border-info col-sm-12, col-md-12, col-lg-4 text-center m-5 p-3">
        
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange.bind(this)}
            type="email"
            placeholder="email"
            className="col-12 bg-light m-2 border-0 form-control-lg"
            data-toggle="tooltip" data-placement="top" title="Email is required"
          />
        
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange.bind(this)}
            type="text"
            placeholder="Name"
            className="col-12 bg-light m-2 form-control-lg"
            data-toggle="tooltip" data-placement="top" title="Name is required"
          />

          <textarea
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange.bind(this)}
            placeholder="message"
            className="col-12 bg-light m-2 form-control-lg"
            data-toggle="tooltip" data-placement="top" title="Message please"
          />

          <button className="btn btn-primary col-3 m-2 form-control-lg" type="button" onClick={this.handleFormSubmit.bind(this)}>
            Submit
          </button>

        {this.state.errorMessage && (
          <div >
            <h4 className="error-text m-2">{this.state.errorMessage}</h4>
            <h4 className="error-text m-2">{this.state.successMessage}</h4>
          </div>
        )}
      </form>
    );
  }
}
export default ReachMe;

import * as React from 'react';
import { validateEmail } from '../../utils/helpers/helpers';

type ReachMeState = {email: string, name: string, message: string, errorMessage: string}

class ReachMe extends React.Component<{},ReachMeState>{
    state : ReachMeState = {
        email: "", 
        name: "", 
        message: "", 
        errorMessage: ""}
    handleInputChange (e: any) {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          this.setState( {email: inputValue});
        } else if (inputType === 'name') {
            this.setState( {name: inputValue});
        } else {
            this.setState( {message: inputValue});
        }
      };

    handleFormSubmit (e: any) {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        const {email, name, message } = this.state;
        console.log("we are here");
        console.log(email, name, message);
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        
        if (!validateEmail(email) ) {
          this.setState({errorMessage: 'Email is invalid'});
          return;
        }
        if(!name){
            this.setState({errorMessage: 'Name is required'});
            return;
        }
    
        if(!message){
            this.setState({errorMessage: 'Message is required'});
            return;
        }

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({message: ''});
        this.setState({errorMessage: ''});
      };


    render() {

        return(<div>

      <p>Hello </p>
      <form className="form">
        <input
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange.bind(this)}
          type="email"  
          placeholder="email"
        />
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange.bind(this)}
          type="text"
          placeholder="Name"
        />
        <input
          value={this.state.message}
          name="message"
          onChange={this.handleInputChange.bind(this)}
          type="textArea"
          placeholder="message"
        />
        <button type="button" onClick={this.handleFormSubmit.bind(this)}>Submit</button>
      </form>
      {this.state.errorMessage && (
        <div>
          <p className="error-text">{this.state.errorMessage}</p>
        </div>
      )}

        </div>);
    }
}
export default ReachMe;
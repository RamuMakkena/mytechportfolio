import * as React from 'react';
import { validateEmail } from '../../utils/helpers/helpers';


class ReachMe extends React.Component<{},{email: string, name: string, message: string, errorMessage: string}>{
    constructor(props: any){
        super(props);
        this.state = {
            email : "",
            name: "",
            message : "",
            errorMessage : ""
        }
    }
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
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (validateEmail(!this.state.email) ) {
          this.setState({errorMessage: 'Email is invalid'});
          return;
        }
        if(!this.state.name){
            this.setState({errorMessage: 'Name is required'});
            return;
        }
    
        if(!this.state.message){
            this.setState({errorMessage: 'Message is required'});
            return;
        }

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({message: ''});
      };


    render() {

        return(<div>

      <p>Hello </p>
      <form className="form">
        <input
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="email"  
          placeholder="email"
        />
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={this.state.message}
          name="message"
          onChange={this.handleInputChange}
          type="textArea"
          placeholder="message"
        />
        <button type="button" onClick={this.handleFormSubmit}>Submit</button>
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
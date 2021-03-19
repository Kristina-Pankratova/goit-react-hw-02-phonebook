import { Component } from "react";



class AddForm extends Component {

    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);
        this.props.onSubmit(this.state);
        this.props.onSubmits(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {

      return (
          <form onSubmit={this.handleSubmit }>
              <label >
                  Name <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange }/>
              </label>
              <br/>
            <label>
                  Number <input
                      type="text"
                      name="number"
                      value={this.state.number}
                      onChange={this.handleChange }/>
            </label>
        <br/>
            <button type="submit" >Add contact</button>
    </form>
    )  
    }    
}
export default AddForm;


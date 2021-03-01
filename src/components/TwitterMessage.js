import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {char: 280};
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })

    this.setState(prevState => {
      return {char: prevState.char - 1}
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        value={this.state.message}
        onChange={this.handleChange} />
        {this.state.char}
      </div>
    );
  }
}

export default TwitterMessage;

import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twertText:"",
      remainChar: 0
    };
  }

  componentDidMount() {
    this.setState({remainChar:this.props.maxChars})
  }

  updateChar = (e)=>{
    console.log(e.target.value.length)

    this.setState({twertText:e.target.value})
    this.setState({remainChar: this.props.maxChars-e.target.value.length})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={this.updateChar}
        value = {this.state.twertText}/>
        {this.state.remainChar}
      </div>

    );
  }
}

export default TwitterMessage;

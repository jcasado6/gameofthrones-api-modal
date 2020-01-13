import React, { Component } from "react";
import Modal from "./Modal";

class Characters extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <div>
          <div onClick={() => this.setState({ show: !show })}>
            <h1 className='character-name'>{this.props.name}</h1>
            <img
              className="images"
              src={this.props.img}
              alt="Character Cover"
            ></img>
          </div>
        </div>
        {show ? (
          <div onClick={() => this.setState({ show: !show })}>
            <Modal
              name={this.props.name}
              birthday={this.props.birthday}
              occupation={this.props.status}
              img={this.props.img}
              status={this.props.status}
              nickname={this.props.nickname}
              portrayed={this.props.portrayed}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Characters;

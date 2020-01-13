import React, { Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
          };
          this.closeModal  = this.closeModal.bind(this);
    }
    closeModal(e) {
        e.stopPropagation();
        this.setState({ show: false });
      }

  render() {
    return (
      <div className="modal">
        <div className="modal-main"> 
        <span className="close" >
          &times;
        </span>
          <h1 >{this.props.name}</h1>
          <div>
            <img
              className="modal-image"
              src={this.props.img}
              alt="Character Cover"
            ></img>
          </div>
          <p>
            <span>Status:</span> {this.props.status}
          </p>
          <p>
            <span>Nickname:</span> {this.props.nickname}
          </p>
          <p>
            <span>Actor:</span> {this.props.portrayed}
          </p>
        </div>
      </div>
    );
  }
}


export default Modal;

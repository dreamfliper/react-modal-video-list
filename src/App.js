import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './db.json';
import Videocard from './videocard';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    backgroundColor   : 'rgba(30, 30, 30, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      db: db,
      videourl:'',
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(url) {
    this.setState({modalIsOpen: true, videourl: url});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Video Modal"
        >
          <video controls>
            <source src={this.state.videourl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal>
      </div>
        <div className="container">
        {
          this.state.db.videos.map( 
          (video,i) =>  <Videocard key={i} onClick={this.openModal} {...video} /> 
          )
        }
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Videocard extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.onClick(this.props.url);
  }
  render(){
    return (
      <div>
        <img alt="preview" src={this.props.poster} onClick={this.handleClick}/>
        <div className="video-info">
          <h4><a href="#" onClick={this.handleClick}>{this.props.title}</a></h4>
          <p>{this.props.author}</p>
          <p>{this.props.views} views • {this.props.uploadAt} hours ago</p>
        </div>
      </div>
    );
  }
};

export default Videocard;

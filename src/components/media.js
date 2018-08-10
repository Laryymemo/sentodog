import React, { Component} from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
  constructor(props){
    super(props)
    this.state = {
       author: props.author
    }
  }
  imprimirtitle = (event) => {
  //  console.log(this.props.title);
  this.setState({
    author: "The best app for pets"
  })
  }
   render(){
     return(
       <div className="Media" onClick={this.imprimirtitle}>
        <div>
          <img
           src={this.props.cover}
           alt=""
           width="240"
           height="160"
          />
          <h3>{this.props.title}</h3>
          <p>{this.props.author}</p>
        </div>
       </div>
     )
   }
}
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;

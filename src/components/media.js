import React, { Component} from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
  imprimirtitle = (event) => {
    console.log(this.props.title);
  }
   render(){
     return(
       <div className="Media" onClick={this.imprimirtitle}>
        <div>
          <img
           src={this.props.image}
           alt=""
           width="260"
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;

import React, { Component} from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
   render(){
     const styles = {
       container: {
         fontSize: 14,
         backgroundColor: 'black',
         color: 'white',
         cursor: 'pointer',
         width: 260,
         border: 'solid grey 2px'
       }
     }
     return(
       <div className="Media">
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
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;

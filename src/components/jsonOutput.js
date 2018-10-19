// Component
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {jsonFormActions} from '../actions/jsonFormActions';

class JsonOutput extends React.Component {
  constructor(props) {
    super(props);

    
  };

  state = {
  };

  render() {
      return (
        <div><p>{this.props.text || this.props.textKey || "Please enter a value"}</p></div>
      )
  }
}

/* 
 * This is where we map state to props.
 * We take the redux state store and add that to the text field
 * This will now appear in this.props.text 
 */
export default connect((state, props) => {
    return {
        text: state.jsonFormReducer.text,
        textKey: state.jsonFormReducer.textKey
    }

})(JsonOutput);
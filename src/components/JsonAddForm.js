// Component
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

// Import redux action:
//import { jsonFormActions } from '../actions/jsonFormActions';
import * as actions from '../actions/jsonFormActions';
class JsonAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyAdded = this.onKeyAdded.bind(this);
    this.onValueAdded = this.onValueAdded.bind(this);
    this.onKeySubmit = this.onKeySubmit.bind(this);
    this.onValueSubmit = this.onValueSubmit.bind(this);
  };

  state = {
    keyInput: '',
    valInput: '',
    error: ''
  };

  componentDidMount() {
  };

  onKeyAdded = (e, clear) => {
    e.preventDefault();
    const keyInput = e.target.value;
    this.setState(() => ({ keyInput }));

    if (clear) {
      this.setState(() => ({ keyInput: "" }));
    }
  };

  onValueAdded = (e, clear) => {
    const valInput = e.target.value;
    this.setState(() => ({ valInput }));
    if (clear) {
      this.setState(() => ({ valInput: "" }));
    }

  };

  onKeySubmit = (e) => {
    e.preventDefault();
    if (!this.state.keyInput) {
      this.setState(() => ({error: "Please enter a key."}));
    } else {
      this.setState(() => ({error: '', keyInput: this.state.keyInput}));
      this.onKeyAdded(e, true);
      this.refs.valueInputRef.focus();
      this.props.dispatch(actions.jsonFormActions(this.state.keyInput));
    }
  };

  onValueSubmit = (e) => {
    e.preventDefault();

    if (!this.state.valInput) {
      this.setState(() => ({error: "Please enter a value."}));
    } else {
      this.setState(() => ({error: '', valueInput: this.state.valInput}));
      this.onValueAdded(e, true);
      this.refs.keyInputRef.focus();
      this.props.dispatch(actions.jsonFormActions(this.state.valInput));
    }
  };

  focusEmpty = (e) => {
    this.refs.keyInputRef.focus();
  };

  render() {
      return (
          <div>
              {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.onKeySubmit}>
                  <input
                      ref="keyInputRef"
                      type="text"
                      placeholder="Key"
                      autoFocus
                      value={this.state.keyInput}
                      onChange={this.onKeyAdded}
                  />
              </form>
              <form onSubmit={this.onValueSubmit}>
                  <input
                      ref="valueInputRef"
                      type="text"
                      placeholder="Value"
                      value={this.state.valInput}
                      onChange={this.onValueAdded}
                  />
              </form>

              <form >
                  <input
                      style={{opacity: 0.0}}
                      ref="emptyField"
                      onFocus={this.focusEmpty}
                  />
              </form>
          </div>

      )
  }
}

export default connect((state, props) => {
    return {
        text: state.jsonFormReducer.text,
        textKey: state.jsonFormReducer.textKey
    }

})(JsonAddForm);












/* Setup default state so never comes back null */
var defaultState = {
    text: '',
    textKey: ''
};

/* Return the action.text from the store and tack it on to current stat on the text key */
export default function jsonFormReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FORM_INPUT_ACTION':
      return {
        ...state,
        text: action.text
      }
    case 'FORM_INPUT_ACTION_ADD_KEY':
      return {
        ...state,
        textKey: action.textKey
      }
    default:
      return state;
  }
}


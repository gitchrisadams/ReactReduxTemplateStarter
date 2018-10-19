/* newAmount passed in becomes the value to the text key */
export function jsonFormActions(newAmount) {
  return {
    type: 'FORM_INPUT_ACTION',
    text: newAmount
  }
}

export function jsonFormActionsAddKey(newAmount) {
  return {
    type: 'FORM_INPUT_ACTION_ADD_KEY',
    textKey: newAmount
  }
}
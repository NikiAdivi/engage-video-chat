/**
 * For the chat, adds a new message 
 * and returns the complete list
 * 
 * @param {input} listCurrentState 
 * @param {action} newInputMessage 
 * @returns NewState
 * 
 */
const MessageListReducer = (listCurrentState = [], newInputMessage) => {
  let tempState = [...listCurrentState];
  switch (newInputMessage.type) {
    case "addMessageToList":
      return [...tempState, newInputMessage.payload];
    default:
      return listCurrentState;
  }
};

export default MessageListReducer;

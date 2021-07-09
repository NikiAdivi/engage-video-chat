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
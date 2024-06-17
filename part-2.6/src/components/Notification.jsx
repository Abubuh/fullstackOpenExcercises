const Notification = ({ message, messageColor }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={`${messageColor} action-message`}>
        {message}
      </div>
    )
  }

  export default Notification
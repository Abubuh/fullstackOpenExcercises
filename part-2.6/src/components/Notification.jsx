const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="action-message">
        {message}
      </div>
    )
  }

  export default Notification
import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Message from "./Message";
import styles from "./message.css";

function Messages({ msgs }) {
  const msgContainer = React.createRef();
  return (
    <div
      className={styles.msgs}
      ref={msgContainer}
      onLoad={() =>
        msgContainer.current.scrollTo(0, msgContainer.current.scrollHeight)
      }
    >
      {msgs.map(msg => (
        <Message
          key={msg.id}
          src="https://via.placeholder.com/75"
          text={msg.msg}
          time={format(msg.timestamp, "MMM D, YYYY HH:mm A")}
          sender={msg.sender}
          alt=""
        />
      ))}
    </div>
  );
}

Messages.propTypes = {
  msgs: PropTypes.instanceOf(Array)
};

Messages.defaultProps = {
  msgs: []
};

export default Messages;

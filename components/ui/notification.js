import ReactDOM from 'react-dom';

import classes from './notification.module.css';

function Notification(props) {
  const { title, message, status } = props;

  console.log(message);

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <div>{message.toString()}</div>
    </div>
  );
}

export default Notification;

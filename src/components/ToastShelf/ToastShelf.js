import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
function ToastShelf() {
  const {toastList, setToastList} = React.useContext(ToastContext);

  
  return (
    <ol className={styles.wrapper} role="region"
     aria-live="polite"
     aria-label="Notification">
      {
        toastList.map(({ variant, message, id }) => {
          return (
            <li key={id} className={styles.toastWrapper}>
              <Toast
                variant={variant}
                message={message}
                id={id}
              />
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;

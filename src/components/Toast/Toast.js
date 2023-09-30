import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, message }) {
  const { handleDelete } = React.useContext(ToastContext);

  const Tag = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <div className={styles.content}>
        <div className={styles.VisuallyHidden}>{variant.toUpperCase()}</div>
        {message}
    </div>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => handleDelete(id)}
      >
        <X size={24} />
        
      </button>
    </div>
  );
}

export default Toast;

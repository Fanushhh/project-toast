import React from "react";
export const ToastContext = React.createContext();
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
import useEscapeKey from "../UseEscapeKey/UseEscapeKey";
function ToastProvider({ children }) {
  const [currentVariant, setCurrentVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [message, setMessage] = React.useState("");
  const [toastList, setToastList] = React.useState([
    {
      id: crypto.randomUUID(),
      variant: "notice",
      message: "This is a notice toast!",
    },
    {
      id: crypto.randomUUID(),
      variant: "warning",
      message: "This is a warning toast!",
    },
  ]);
  const handleEscape = React.useCallback(() => {
    setToastList([]);
  }, []);
  
  useEscapeKey(handleEscape);

  function handleSubmit(e) {
    e.preventDefault();
    if (!currentVariant || !message) {
      return;
    }
    const nextToasts = [
      ...toastList,
      { variant: currentVariant, message, id: crypto.randomUUID() },
    ];
    setToastList(nextToasts);

    setMessage("");
    setCurrentVariant("");
  }
  function handleDelete(id) {
    setToastList(() => {
      const newToasts = toastList.filter((toast) => toast.id !== id);
      return newToasts;
    });
  }
  
  return (
    <ToastContext.Provider
      value={{
        toastList,
        message,
        currentVariant,
        setToastList,
        handleDelete,
        setMessage,
        setCurrentVariant,
        handleSubmit,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

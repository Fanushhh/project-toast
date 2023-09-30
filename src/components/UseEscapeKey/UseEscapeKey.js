import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {

    function handleCloseToast(e) {
     if(e.code === 'Escape'){
      callback(e)
     } 
    }

    window.addEventListener('keydown', handleCloseToast);
    return () => {
      window.removeEventListener('keydown', handleCloseToast);
    }
  },[callback])
}

export default useEscapeKey;

import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [show, setShow] = useState(false);
  
  const state = {
    itemsPerPage,
    changePageNumber: setItemsPerPage,
    show,
    setShow,
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
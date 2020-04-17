import React, { useState, createContext } from 'react';

const ToggleContext = createContext();
const ButtonContext = createContext();

const NavToggleProvider = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  return <ToggleContext.Provider value={[navOpen, setNavOpen]}>{props.children}</ToggleContext.Provider>;
};

const ToggleButtonProvider = (props) => {
  const [isOpen, setOpen] = useState(false);
  return <ButtonContext.Provider value={[isOpen, setOpen]}>{props.children}</ButtonContext.Provider>;
};

export { ToggleContext, ButtonContext, NavToggleProvider, ToggleButtonProvider };

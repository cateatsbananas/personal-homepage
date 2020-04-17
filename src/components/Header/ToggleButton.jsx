import React, { useContext, useState } from 'react';
import { ToggleContext, ButtonContext } from '../ToggleStateContext';
import { makeStyles } from '@material-ui/core/styles';
import { Fade as Hamburger } from 'hamburger-react';

const useStyles = makeStyles((theme) => ({
  typography: {
    fontSize: 60,
  },
}));

const ToggleButton = () => {
  const [navOpen, setNavOpen] = useContext(ToggleContext);
  const [isOpen, setOpen] = useContext(ButtonContext);

  const classes = useStyles();

  return (
    <div className="toggle">
      <Hamburger
        color="#317ba7"
        direction="left"
        duration={0.6}
        size={36}
        toggled={isOpen}
        toggle={setOpen}
        onToggle={(toggled) => setNavOpen(!navOpen)}
      />
    </div>
  );
};

export default ToggleButton;

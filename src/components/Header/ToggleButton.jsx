import React, { useContext, useState } from 'react';
import { ToggleContext, ButtonContext } from '../ToggleStateContext';
import MenuOpenTwoToneIcon from '@material-ui/icons/MenuOpenTwoTone';
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
    /* <MenuOpenTwoToneIcon fontSize="large" className={classes.typography} onClick={() => setNavOpen(!navOpen)} /> */
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

    /* <button className="toggle-button" onClick={() => setNavOpen(!navOpen)}>
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
    </button> */
  );
};

export default ToggleButton;

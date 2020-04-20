import React, { useContext } from 'react';
import { ToggleContext, ButtonContext } from '../ToggleStateContext';
import { Fade as Hamburger } from 'hamburger-react';

const ToggleButton = () => {
  const [navOpen, setNavOpen] = useContext(ToggleContext);
  const [isOpen, setOpen] = useContext(ButtonContext);

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

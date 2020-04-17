import React, { useState, useContext } from 'react';
import { makeStyles, Card, CardHeader, CardMedia } from '@material-ui/core';
import { ToggleContext } from './ToggleStateContext';
import Chips from './Chips';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 80,
    paddingTop: '56.25%', // 16:9
  },
}));

function ProjComp({ src, projName, projText, linkToProj, chipLink }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [gridHover, setGridHover] = useContext(ToggleContext);

  function changeOpacityBackground(e) {
    e.target.style.background = classes.media.color;
  }

  /*   const handleExpandClick = () => {
    setExpanded(!expanded);
  }; */

  return (
    <div onMouseOver={changeOpacityBackground}>
      <Card className={classes.root}>
        <CardHeader title={projName} subheader={projText} />
        <Chips label="Source" link={chipLink} />
        <a href={linkToProj}>
          <CardMedia className={classes.media} image={src} title="Projects"></CardMedia>
        </a>
      </Card>
    </div>
  );
}

export default ProjComp;

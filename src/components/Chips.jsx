import React from 'react';
import { makeStyles, Chip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function Chips({ label, link }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        icon={<FontAwesomeIcon icon={faGithub} />}
        label={label}
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        clickable
        color="primary"
      />
    </div>
  );
}

export default Chips;

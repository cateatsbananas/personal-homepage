import React, { useContext } from 'react';
import { Context } from './Wrapper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const LanguageSelect = () => {
  const context = useContext(Context);
  const classes = useStyles();

  return (
    <div className="language">
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="language-select-filled-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={context.locale}
          onChange={context.selectLang}
        >
          <MenuItem value={'de'}>Deutsch</MenuItem>
          <MenuItem value={'en-US'}>English</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelect;

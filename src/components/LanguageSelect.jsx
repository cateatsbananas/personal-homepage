import React, { useContext } from 'react';
import { Context } from './Wrapper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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
      {/* <button value={'de'} id="languageGer" onClick={context.selectLang}>
        Deutsch
      </button>
      <button value={'en-US'} id="languageEn" onClick={context.selectLang}>
        English
      </button> */}
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

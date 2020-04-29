import React, { useContext } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ProjComp from './ProjectComp';
import my_homepage from '../assets/images/cards/my_homepage.png';
import media2 from '../assets/images/cards/media2.jpg';
import media3 from '../assets/images/cards/media3.jpg';
import media4 from '../assets/images/cards/media4.jpg';
import { ToggleContext } from './ToggleStateContext';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import NextSection from './NextSection';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  control: {
    padding: 10,
  },
  container: {
    maxWidth: '100vw',
  },
}));

function SimpleCollapse() {
  let projectsArr = [
    <ProjComp
      src={my_homepage}
      projName={<FormattedMessage id="projects.projects.homepage" defaultMessage="Homepage" />}
      projText="React / SCSS "
      linkToProj="/"
      chipLink="https://github.com/cateatsbananas/personal-homepage"
    />,
    <ProjComp src={media2} projName="Project 2" projText="Placeholder as example" linkToProj="/" chipLink="/" />,
    <ProjComp src={media3} projName="Project 3" projText="Placeholder as example" linkToProj="/" chipLink="/" />,
    <ProjComp src={media4} projName="Project 4" projText="Placeholder as example" linkToProj="/" chipLink="/" />,
  ];

  let projectsExtraArr = [
    <ProjComp src={media2} projName="Project 6" projText="Placeholder as example" linkToProj="/" chipLink="/" />,
    <ProjComp src={media3} projName="Project 7" projText="Placeholder as example" linkToProj="/" chipLink="/" />,
    <ProjComp src={media4} projName="Project 8" projText="Placeholder fas example" linkToProj="/" chipLink="/" />,
    <ProjComp src={media2} projName="Project 10" projText="Placeholder as example" linkToProj="/" chipLink="/" />,
  ];

  const [navOpen, setNavOpen] = useContext(ToggleContext);
  /* const [spacing, setSpacing] = useState(2); */
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div id="projects">
      <div className="wrapper" onClick={() => (navOpen ? setNavOpen(false) : navOpen === false)}>
        <div className="title-projects">
          <a href="/projects">
            <h3>
              <FormattedMessage id="projects.title" defaultMessage="Projects" />
            </h3>
          </a>
        </div>
        <div className={classes.root}>
          <div className="grid">
            <Grid container spacing={1} direction="row" alignItems="center" justify="center">
              {projectsArr.map((project, index) => (
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <div key={index} className="grid-item">
                    {project}
                  </div>
                </Grid>
              ))}
              {/*            <div className="collapse">
              <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} color="primary" />}
                label="More"
              />
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Collapse in={checked} collapsedHeight={0}>
                  <ExpansionPanelDetails>
                    <div className="grid-2 ">
                      <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        {projectsExtraArr.map((projectExtra, index) => (
                          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <div key={index} className="grid-item">
                              {projectExtra}
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </ExpansionPanelDetails>
                </Collapse>
              </Grid>
            </div> */}
            </Grid>
          </div>
        </div>
        <Link to="/about">
          <NextSection name="About Me" />
        </Link>
      </div>
    </div>
  );
}

export default SimpleCollapse;

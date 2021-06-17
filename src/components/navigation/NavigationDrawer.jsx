/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home'; 
import PersonIcon from '@material-ui/icons/Person';
import BuildIcon from '@material-ui/icons/Build';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SubjectIcon from '@material-ui/icons/Subject';
import Tooltip from '@material-ui/core/Tooltip';
import Logout from '../authentication/Logout';



const useStyles = makeStyles({
  list: {
    width: 250,
    height: 1000,
    color:'white',
    backgroundColor: 'black',
    

  },
  fullList: {
    width: 'auto',
    backgroundColor: 'black'
  },

});

function NavigationDrawer(props) {
  const classes = useStyles();
  
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >,
      <List>
        {[{
          name: 'Home',
          utility: props['redirectHome']
        },
        {
          name: 'Films',
          utility: props['redirectFilms']
        },
        {
          name: 'Resources',
          utility: props['redirectResources']
        },
        {
          name: 'My Dashboard',
          utility: props['redirectMyDashboard']
        },
        {
          name: 'About Us',
          utility: props['redirectAboutUs']
        },
        {
          name: 'Logout',
          utility: props['redirectLogOut']
        },
        ].map((text, index) => (
          <ListItem onClick={text.utility} button key={text.name} style={{ marginTop: '25px' }}>
            <ListItemIcon>
              {(() => { 
                if(index === 0) { 
                  return <HomeIcon style={{ color: '#3d5afe' }}/>;
                } else if(index === 1) { 
                  return <MovieFilterIcon style={{ color: '#2196f3' }}/>;
                } else if(index === 2) { 
                  return <BuildIcon style={{ color: '#304ffe' }}/>;
                } else if(index === 3) {
                  return <DashboardIcon style={{ color: '#82b1ff' }}/>;
                } else if(index === 4) {
                  return <PersonIcon style={{ color: '#3f51b5' }}/>;
                } else { 
                  return <PersonIcon style={{ color: 'rgba(255,211,25)' }}/>;

                }}) ()}
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'black' }}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title="Menu">
            <Button onClick={toggleDrawer(anchor, true)} style={{ color: 'white' }}><SubjectIcon fontSize="large"/></Button>
          </Tooltip>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

NavigationDrawer.propTypes = { 
  redirectHome: PropTypes.func.isRequired,
  redirectFilms: PropTypes.func.isRequired,
  redirectResources: PropTypes.func.isRequired,
  redirectAboutUs: PropTypes.func.isRequired,
  redirectMyDashboard: PropTypes.func.isRequired

};

export default NavigationDrawer;

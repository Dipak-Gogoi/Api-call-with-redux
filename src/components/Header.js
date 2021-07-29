import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide } from '@material-ui/core';




function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar mb={10}>
          <Toolbar>
            <Typography variant="h6">Sauda Tech</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Header;

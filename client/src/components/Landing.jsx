import React from 'react';
import { Typography, Box } from '@material-ui/core';
import SelectGenre from './Preference.jsx';

function Landing({ user }) {
  return (
    <Box m={1} mx="auto">
      <Typography variant="body1" align="center">
        To get started, click the Explore Books link and we&apos;ll do the rest!
      </Typography>
      <SelectGenre user={user} />
    </Box>
  );
}

export default Landing;

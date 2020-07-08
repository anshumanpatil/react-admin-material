import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright(props) {
    const {url, text} = props;
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href={url}>
          {text}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
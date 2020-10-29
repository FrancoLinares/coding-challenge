import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// PropType
import PropTypes from 'prop-types';
// Custom Components
import Image from '../../../UI/image/Image';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '1vw',
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ imagePath, title, year }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {imagePath && <Image imagePath={imagePath} alt={'Movie ' + title} />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Release date: {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  url: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string,
};
MediaCard.defaultProps = {
  url: null,
  title: 'None Title',
  desc: 'None Desc',
};

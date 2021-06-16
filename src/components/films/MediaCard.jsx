import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ModalParent from '../modal/ModalParent';
import SocialButtons from '../socialbuttons/SocialButtons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "50px",
    zIndex:"-1",
    height: "500px",
    width: "500px",   
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
    backgroundColor: "#f9f9f9", 
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  },
  media: {
    height: 140,
    display: "flex",
    flexDirection: "column",
    margin: 20, 
  },
  image: {
    height: 200,
  },
  text: {
    margin:10,
  }
});

export default function MediaCard({ films_name, films_image, films_description, films_budget, films_url, films_genre, director_name }) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.image}>
        <CardMedia
          className={classes.media}
          image={films_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {films_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {films_description.substring(0, 60)}..
          </Typography>
          <Typography gutterBottom variant="body" component="h5"
          className={classes.text}>
            Created By:{director_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.media}>
        <ModalParent
        films_name={films_name}
        films_image={films_image}
        films_description={films_description}
        films_budget={films_budget}
        films_url={films_url}
        films_genre={films_genre}
        director_name={director_name}
      />
      <SocialButtons></SocialButtons>
      </CardActions>
    </Card>
  );
}
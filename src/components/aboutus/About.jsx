/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AboutContainer, AboutH1 } from './AboutUsElements';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import shelby from '../../assets/shelby.jpeg';
import josie from '../../assets/josie.jpeg';
import claudia from '../../assets/claudia.jpeg';
import katie from '../../assets/katie.jpeg';
import zina from '../../assets/zina.jpeg';
import cierra from '../../assets/cierra.jpeg';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles({
  root: {
    width: 440,
    height: 730,
  
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '15px',
    marginRight: '30px',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  media: {
    height: 400,
    margin: '0',
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: 'black' }}>
      <AboutContainer>
        <AboutH1>Angle On Team</AboutH1>
        <Card className={classes.root} sx={{ boxShadow: 3 }}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={zina}
              title="Zina | Software Engineer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
            Zina <br/>
            Mohamed
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Zina is a Software Engineer with a keen eye for 
                design and a passion for creating a seamless
                user experience.  When not coding, you can
                find her off listening to Andre 3000.  
                Her favoritre short film
                is Mother.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton size="small" color="primary" href="https://www.linkedin.com/in/zina-mohamed/">
              <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton size="small" color="primary" href="https://twitter.com/zinastheory">
              <TwitterIcon fontSize="large"/>
            </IconButton>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={katie}
              title="Katilyn | Software Engineer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
            Katilyn <br/>
            Wiggins
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate
            reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate
            reptiles efjwipfjewf
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton size="small" color="primary" href="https://www.linkedin.com/in/katilynwiggins/">
              <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton size="small" color="primary" href="https://twitter.com/pinkishcreature">
              <TwitterIcon fontSize="large"/>
            </IconButton>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cierra}
              title="Cierra | Software Engineer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
            Cierra <br/> 
             McDonald
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Cierra is a Software Engineer with a passion to solve
              human-centered problems with creativity and compassion.
              When she is not coding, you'll
              find her exploring a new hiking trail.
              Her favorite animated short film is Hair Love.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton size="small" color="primary" href="https://www.linkedin.com/in/cierra-mcdonald">
              <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton size="small" color="primary" href="https://twitter.com/cierralaurenn">
              <TwitterIcon fontSize="large"/>
            </IconButton>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={claudia}
              title="Claudia | Software Engineer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
            Claudia Mazariegos
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
             Claudia Mazariegos is a Full-Stack Software Engineer
             in Los Angeles, CA. When she’s not coding she enjoys 
             spending time at the beach. The latest movie she truly 
             enjoyed watching was Sound of Metal on Amazon Prime.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton size="small" color="primary" href="https://www.linkedin.com/in/claudia-mazariegos/">
              <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton size="small" color="primary" href="https://twitter.com/cmazariegos44">
              <TwitterIcon fontSize="large"/>
            </IconButton>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={josie}
              title="Josie | Software Engineer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
            Josie <br/>
            Cantu
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
            Josie Cantu is a Software Engineer who is driven by her 
            curiosity and desire to develop her skills.
            She thrives in a team setting and loves mob programming.
            She is a dog lover and dog mom to Noey.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton size="small" color="primary" href="https://www.linkedin.com/in/josiemcantu/">
              <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton size="small" color="primary" href="https://twitter.com/josiemcantu">
              <TwitterIcon fontSize="large"/>
            </IconButton>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={shelby}
              title="Shelby | Software Engineer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
            Shelby <br/>
            Strouse
                <br/>
              </Typography>
              
              <Typography variant="body2" color="textSecondary" component="p">
                <br/>
              Shelby Strouse is a Full Stack Software Engineer who is 
             passionate about building for
             the end-user and seamless payment processing. 
             Her favorite short is Disney's Purl.
                <br/>
                <br/>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton size="small" color="primary" href="https://www.linkedin.com/in/shelby-strouse-full-stack-eng/">
              <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton size="small" color="primary" href="https://twitter.com/shelbyCodes">
              <TwitterIcon fontSize="large"/>
            </IconButton>
          </CardActions>
        </Card>
      </AboutContainer>
    </div>
  
  );
};


export default About;




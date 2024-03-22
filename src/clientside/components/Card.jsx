import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardItem = () => {
  
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mern stack web development of Rakib Hossen
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facere veritatis laborum corporis dicta minima cumque tenetur provident culpa dolorem nesciunt necessitatibus, quia, praesentium magni labore illum repudiandae in saepe aut incidunt. Corrupti sed fugit laudantium. Eum officia unde blanditiis aut, quo non eos provident magni atque? Aliquam, doloribus quam et iusto enim ab laborum dolor, perspiciatis nesciunt nemo perferendis!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Enroll Now
          </Button>
        </CardActions>
      </Card>
    );
  };

export default CardItem;
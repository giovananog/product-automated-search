import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function GenericCard(props) {
  return (
    <Card sx={{ width: 345, margin: '50px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>

          {props.isProduct && 
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          }

        </CardContent>
      </CardActionArea>

      {props.isProduct && 
      <CardActions>
        <Button size="small" color="primary">
          Link
        </Button>
      </CardActions>
      }
    </Card>
  );
}
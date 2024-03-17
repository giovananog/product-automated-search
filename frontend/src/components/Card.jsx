import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';

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
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>

          {props.price && 
            <Typography variant="h6" color="text.secondary">
              <IconButton>
                <MonetizationOnIcon sx={{ fontSize: 30, color: 'green' }} />
              </IconButton>
              {props.price}
              <br/>
              <IconButton>
                <ReceiptIcon sx={{ fontSize: 30, color: 'yellow' }} />
              </IconButton>
              {props.sales}
            </Typography>
          }

        </CardContent>
      </CardActionArea>

      {props.sales && 
      <CardActions>
        <Button size="small" color="primary">
          Product
        </Button>
      </CardActions>
      }
    </Card>
  );
}
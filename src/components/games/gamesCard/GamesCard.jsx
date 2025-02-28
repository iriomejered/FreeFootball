import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './GamesCard.css';

function Game(props) {
  return (
    <>
      <div>
        <div className="games-container">
          <Card sx={{ width: 750, borderRadius: 0 }}>
            <CardActionArea>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  height="60"
                  image={props.image}
                  alt="image"
                  sx={{ width: 60, marginRight: 2, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography variant="body2" fontFamily={'Poppins'} component="div">{props.name}</Typography>
                  <Typography variant="body1" fontFamily={'Poppins'} sx={{ color: 'text.secondary' }}>{props.date}</Typography>
                </CardContent>
              </div>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Game;
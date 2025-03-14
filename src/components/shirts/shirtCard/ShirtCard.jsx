import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './ShirtCard.css';
import { useCart } from '../../../services/cartService';

function Shirt(props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const shirt = {
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
    };
    addToCart(shirt);
  };

  return (
    <div className="shirts-container">
      <Card sx={{ width: 260 }} onClick={handleAddToCart}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={props.image}
            alt="image"
          />
          <CardContent>
            <Typography variant="body2" fontFamily={'Poppins'} component="div">{props.name}</Typography>
            <Typography variant="body1" fontFamily={'Poppins'} sx={{ color: 'text.secondary' }}>{props.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Shirt;
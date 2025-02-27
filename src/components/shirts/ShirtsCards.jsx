import { shirts } from '../../services/ShirtsService';
import Shirt from './shirtCard/ShirtCard';
import './ShirtsCards.css';

function Shirts() {
  return (
    <>
      <div className="shirts-background">
        <div className="shirts-title">
          <a>Compra tus camisetas favoritas</a>
        </div>
        <div className="shirts-array">
          {
            shirts.map((shirt) => (
              <Shirt image={shirt.image} name={shirt.name} price={shirt.price} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Shirts;
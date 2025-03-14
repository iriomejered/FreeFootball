import { shirts } from '../../services/shirtsService';
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
              <Shirt key={shirt.id} id={shirt.id} image={shirt.image} name={shirt.name} price={shirt.price} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Shirts;
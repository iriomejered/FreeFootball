import 'bootstrap/dist/css/bootstrap.min.css';
import { shirts } from '../../services/ShirtsService';
import Shirt from './shirtCard/ShirtCard';

function Shirts() {
  return (
    <>
    <div>
        {
            shirts.map((shirt) => (
                <Shirt image={shirt.image} name={shirt.name} price={shirt.price}/>
            ))
        }
    </div>
    </>
  );
}

export default Shirts;
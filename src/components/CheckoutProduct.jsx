import { useStateValue } from '../StateProvider';
import '../styles/checkoutProduct.css'

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue()

  console.log(id, title, image, price, rating)
  const removeFromBasket = () =>{
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
    <div key={id} className="checkoutProduct">
      <img src={image} alt="" className='checkoutProduct__image' />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};
export default CheckoutProduct;

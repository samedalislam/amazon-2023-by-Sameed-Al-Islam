import CheckoutProduct from '../components/CheckoutProduct'
import SubTotal from '../components/SubTotal'
import { useStateValue } from '../StateProvider'
import '../styles/checkout.css'

function Checkout() {
  const [{basket}] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
      <img src="https://www.bankbazaar.com/images/cc-offers/amazon-credit-card-offers.png" alt="Amazon Ad" className="checkout__ad" />
      {
        basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket Is Empty</h2>
            <p>You have no items in your basket. To buy one or more, click "Add to Basket" next to the item.</p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            
            {/* --------- Checkout product */}
            {
              basket.map(item =>(
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            }
          </div>
        )
      }
      </div>
      {
        basket.length > 0 && (
          <div className="checkout__right">
            <SubTotal />
          </div>
        )
      }
    </div>
  )
}
export default Checkout
import "../styles/subTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

const SubTotal = () => {
    const [{basket}] = useStateValue()
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) =>(
            <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                <small className="subTotal__gift">
                    <input type="checkbox" />This order cotains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix="$"
      />
      <button>Procced to Checkout</button>
    </div>
  );
};
export default SubTotal;

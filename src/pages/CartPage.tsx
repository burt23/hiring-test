// Components
import Navbar from '../components/Navbar';

const CartPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Your Cart</h1>
        <div className="row p-4 mx-5">
          <div className="col-md-8 col-sm-12">
            <div className="cart-item">
              <img src="https://via.placeholder.com/125" />
              <div>
                <h4>Saatva Classic Mattress</h4>
                <span>$999</span>
                <span>x2</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div>Total: </div>
            <button className="btn btn-block text-white p-3 mt-3 add-to-cart" onClick={() => {}}>Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage;

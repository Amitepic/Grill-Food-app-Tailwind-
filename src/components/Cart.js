import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSliece";

const Cart = ()=>{
     
    
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = ()=> {
        dispatch(clearCart());
    }

    return (
        <div class="h-96 m-3 p-4 text-center">

           <h1 className="text-2xl font-bold">cart</h1>
           <button className="absolute right-[20.9rem] top-[6.2rem] px-2 mx-2 bg-black p-2 rounded-lg font-bold text-white  transition-all ease-out duration-200 hover:scale-110 " onClick={handleClearCart}>
            Clear Cart</button>
           <div className="m-auto w-6/12">

            <ItemList  items={cartItems}/>
           </div>
           {cartItems.length ===0 && <h1>Cart is empty right now start shopping....</h1> }
        </div>
    )
}


export default Cart;
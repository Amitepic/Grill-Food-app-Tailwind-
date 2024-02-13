
import { useDispatch } from "react-redux";
import {CARD_LOGO_URL} from "../utils/CDN"
import { addCart } from "../utils/cartSliece";

const ItemList = ({items}) => {
    
  const dispatch = useDispatch();

   const handleAddItem =(item) =>{
    // dispatch action
    dispatch(addCart(item))
    
   };

    
    return (
        <div>
          {items.map((item) => 
          <div key={item.card.info.id }
          className="p-2 m-2 text-left border-b-2"
          > 
                
               <div className="py-2">
                  <button className="absolute   bg-black  rounded-lg font-bold text-white  right-[20.9rem] h-8 w-auto px-1  transition-all ease-out duration-200 hover:scale-110 "
                   onClick={() => handleAddItem(item)}>Add+</button>
                  <div className="flex justify-between ">
                  <div>
                  <span className="font-bold">{item.card.info.name}</span>
                  <span className="font-bold"> - ₹{item.card.info.price/100} </span>
                  </div>
                  
                  <div>
                    <img src={CARD_LOGO_URL + item.card.info.imageId} alt ="Image" className="w-24" /></div>
                    
                  </div>
                  
               </div>

               <p className="text-xs"> {item.card.info.description}</p>
          </div> 
          )}
        </div>
    )
}


export default ItemList;
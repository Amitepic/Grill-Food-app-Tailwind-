import { useState } from "react";
import ItemList from "./ItemList";

const RestCategoryMenu = ({data , showIndexData, setShowIndexData}) => {
   

    

   const clickHandler = () => {
        setShowIndexData();
    };

      return (
        <div>
            <div className="bg-gray-100 shawdow-lg mx-auto p-2 m-4 w-6/12  rounded-xl">
           
           <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
             <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
             <span>⬇️</span>
             
           </div>
           {showIndexData && < ItemList items ={ data.itemCards} />}
           
                   
 
         </div>
        </div>
      )
}


export default RestCategoryMenu;
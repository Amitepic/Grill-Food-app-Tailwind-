
import { useState } from "react";
import useRestMenuInfo from "../utils/useRestMenuInfo";
import RestCategoryMenu from "./RestCategoryMenu";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";

const restMenu = () =>{
    
    
    const { resId } = useParams();
    console.log(resId);

    const restinfo = useRestMenuInfo(resId)

    const [showIndexData, setShowIndexData] = useState(null);

    if(restinfo === null) return  < ShimmerMenu />;
    

    
    const {itemCards} = restinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || restinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
   
     const {name} = restinfo?.data?.cards[0]?.card?.card?.info;
     const{text} = restinfo?.data?.cards[0]?.card?.card;
     const{city,cuisines,costForTwoMessage} = restinfo?.data?.cards[2]?.card?.card?.info || restinfo?.data?.cards[0]?.card?.card?.info;
      console.log(restinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    //   console.log(restinfo?.data?.cards[5]?.groupedCard?.cardGroupMap);

    const catagory = restinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => c.card?.card?.['@type']  === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    console.log(catagory);


    return(
        <div className="text-center m-2 p-2 ">
            <h1 className="font-bold text-2xl">               
               {name ||text}
            </h1>
            <p className="font-bold">{city || text}</p>
            <span className="font-bold">{cuisines.join(",")||cuisines.join(",") ||text}</span>
            <span className="font-bold">{costForTwoMessage || costForTwoMessage ||text}</span>
            
           
           
           
             
           {catagory.map((catagory, index) => 
            
            < RestCategoryMenu 
            key={catagory?.card?.card?.title}
            data ={catagory?.card?.card}
            showIndexData={index === showIndexData? true: false}
            setShowIndexData={() => setShowIndexData(index)}
            
            />
            
            )}
           


        </div>
    )
}


export default restMenu;
import {CARD_LOGO_URL} from "../utils/CDN";

const Card = (props) => {
    const{resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData?.data;


    return (
        <div className='flex  flex-col m-2 p-2  w-60  h-[300px] rounded-2xl  transition-all ease-out duration-200 shadow-lg hover:bg-slate-100 hover:scale-110  '>
            <div className="w-56 transition-all ease-out duration-200  hover:scale-95">
                <img src = {
                      CARD_LOGO_URL +
                       cloudinaryImageId
                            } className="rounded-2xl" />
            </div>
            <div >
                <h1 className="font-bold ">{name}</h1>
                <h4 className="font-light">{cuisines.join(", ")}</h4>
                <h4 className="font-medium">{deliveryTime} mintues</h4>                
                <h4 className="font-medium">{avgRating} ⭐</h4>
                                
            </div>
        </div>
    );
};


// Higher order function
// input - card -> cardPromoted

export const CardPromoted = (Card) =>{


    return (props) => {
         return (
            <div class ='relative'>
                <label class='absolute left-3 top-2 bg-slate-800 z-10 text-zinc-50 rounded-r-lg rounded-t-lg h-8 w-20 p-1 text-bold font-md' >Promoted</label> 
                <Card {...props}/>
            </div>
         )
    }
}

export default Card;
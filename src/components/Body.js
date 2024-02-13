import Card ,{ CardPromoted } from "./Card";
import { useState, useEffect } from "react";
import resList from "../utils/restdata";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // creating local state varible and passing the list of resList
  // creating setFIlter to modify state varible data

  const [filterData, setFilterData] = useState(resList);

  const [newSearchData, setnewSearchData] = useState(resList);
  // const [btnupdate ,setbtnupdate]  = useState("Top-rating");
  const [searchText, setSearchText] = useState("");

  const CardwithPromoted = CardPromoted(Card);
  // useEffect(() => {
  //     callingLiveApi();
  //  }, [])
  // const callingLiveApi = async () => {
  //     const dataFromLive = await fetch(
  //         'www.google.com'
  //     );

  //      const json = dataFromLive;
  //     console.log("done");

  //     filterData(json);
  // }
 
  const onlineStatus = UseOnlineStatus();

  if (onlineStatus == false) {
    return (
      <div class="h-96">
        <h1>
          Please check your internet connection, it's seems like you are offline
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-amber-100">
      {/* <p className="error">No match found! try something else</p> */}
      <div className="flex justify-center gap-1 p-2 sm:flex justify-center gap-2 p-3 ">
        <input
          type="text"
          placeholder="Search what you want to eat"
          value={searchText}
          className=" shadow-lg transition-all ease-out duration-200  hover:scale-95 rounded-lg w-[35rem] hover:box-border p-1 border-2"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" bg-blue-400 px-4 rounded-lg font-bold text-yellow-50 transition-all ease-out duration-200 shadow-lg hover:scale-105"
          onClick={() => {
            console.log("searchbtn");
            const filterSearchData = filterData.filter((restaurant) =>
              restaurant.data.name
                .toUpperCase()
                .includes(searchText.toUpperCase())
            );
            // const filterSearchData = filterData.filter((restaurant) => {
            //     if (restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())) {
            //       return restaurant.data.name;
            //     } else {
            //     //   alert("NO match found")

            //     console.log("no match foud")
            //     return restaurant.data.name;
            //     }
            //   });
            setnewSearchData(filterSearchData);
            console.log(searchText);
          }}
        >
          Seach
        </button>

        <button
          className=" bg-blue-400 p-2 rounded-lg font-bold text-yellow-50  shadow-lg transition-all ease-out duration-200 hover:scale-105"
          onClick={() => {
            console.log("fitterbtn");
            let filterNewdata = filterData.filter(
              (restaurant) => restaurant.data.avgRating > 4.1
            );
            setnewSearchData(filterNewdata);
          }}
        >
          Top-rating
        </button>

        <button
          className=" bg-blue-400 p-2 rounded-lg font-bold text-yellow-50 shadow-lg transition-all ease-out duration-200  hover:scale-105"
          onClick={() => {
            console.log("fitterbtn");
            let filterNewdata = filterData.filter(
              (restaurant) => restaurant.data.avgRating < 4.1
            );
            setnewSearchData(filterNewdata);
          }}
        >
          Down-rating
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {newSearchData.map((restaurant) => (
          <Link 
          key={restaurant.data.id} 
          to= {"/rest/" + restaurant.data.id}
          >
            
            {restaurant.data.promoted ? (
                <CardwithPromoted resData={restaurant} />
             ) : (
                <Card resData={restaurant} />
            )}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

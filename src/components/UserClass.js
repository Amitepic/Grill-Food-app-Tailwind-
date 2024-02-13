import React from "react";

class UserClass extends React.Component{


    constructor(props){

       super(props);
       this.state = {
        count:0,
        userInfo : {
            name:"dummyName",
            location: "dummyLocation",
            avatar_url :"https://www.shutterstock.com/image-vector/bearded-man-colorful-icon-design-1314451643",
        }
       }

       console.log(props);
    } 
    async componentDidMount() {
        const gitData = await fetch('https://api.github.com/users/amitepic');
        const json = await gitData.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);

    } 

    render(){

        const {login, avatar_url,location,public_repos} = this.state.userInfo;
        return(
            <div className='flex  flex-col m-2 p-2  w-80  h-[370px] gap-4 rounded-2xl  transition-all ease-out duration-200 shadow-lg  '>
            <div className="flex justify-center ">
                <img src = {avatar_url} className="rounded-2xl h-[165px] w-80 p-2" />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className="px-2 mx-2  text-white hover:text-gray-700  font-medium text-md font-sans transition-all ease-out duration-200 hover:scale-125"> Name : {login} </h1>
                <h3 className="px-2 mx-2  text-white hover:text-gray-700  font-medium text-md font-sans transition-all ease-out duration-200 hover:scale-125">Software Engineer</h3>
                <h3 className="px-2 mx-2  text-white hover:text-gray-700  font-medium text-md font-sans transition-all ease-out duration-200 hover:scale-125">{location}</h3>
                <h3 className="px-2 mx-2  text-white hover:text-gray-700  font-medium text-md font-sans transition-all ease-out duration-200 hover:scale-125">Repos: {public_repos}</h3>
                <span className="px-2 mx-2  text-white hover:text-gray-700  font-medium text-md font-sans transition-all ease-out duration-200 hover:scale-125">Follower:{this.state.count}</span>
            </div>
            <div className="flex m-4 justify-center">
                
                 <button className='transition-all ease-out duration-200 hover:scale-125 px-2 mx-2 bg-blue-400 p-2 rounded-lg font-bold text-white w-24 h-auto'  onClick={() =>{
                    console.log("click")
                        this.setState({
                        count: this.state.count + 1,
                        
                    });
                }}
                >Follow me</button>

                <button className='transition-all ease-out duration-200 hover:scale-125 px-2 mx-2 bg-blue-400 p-2 rounded-lg font-bold text-white' onClick={() => {
                    console.log("click2")
                    if(this.state.count >= 1){
                        this.setState({
                            count: this.state.count - 1,
                        })
                    }
                }}>
                    Unfollow
                </button>
                </div>
        </div>
        )
    }
}

export default UserClass;
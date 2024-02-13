import { Link } from "react-router-dom";
import { PLAY_STORE_LOGO } from "../utils/CDN";



const Footer = () => {
    return (
        <div >
            <div class=' flex gap-10 p-6   bg-gray-200 justify-around  shadow-lg'>
            <div>
                <p className="text-blue-400  w-80 text-xl font-bold">For better experience,download the GrillFood app now</p>
            </div>
            <div class='transition-all ease-out duration-200 hover:scale-125'>
                
            
            
                <img src={PLAY_STORE_LOGO} alt="play store" class="h-20 w-46 "/>
            </div>
            </div>
            <div class='flex justify-around  bg-black p-8 text-start'>
                 <div>
                   
                   <Link to = "/">
                    <div class='flex'>
                        <div><img className=' rounded-full h-16 p-3 transition-all ease-out duration-200 hover:scale-110' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZWZRJHkUahwE-ZJsGwmXtOT6pqCEDuIDRA&usqp=CAU"/></div>
                        <div class=' flex items-center'><p className=" tracking-widest text-zinc-300 hover:text-blue-400  text-3xl  transition-all ease-out duration-200 hover:scale-125">GrillFood</p></div>
                    </div>
                    </Link>
                   
                    <p  className="tracking-widest m-4  text-zinc-300 hover:text-blue-400 text-lg transition-all ease-out duration-200 hover:scale-125">© 2023 Bundl </p>
                    <p  className=" tracking-widest m-4 text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">Technologies Pvt. Ltd</p>
                 </div>
                 <div >
                    <p  className="tracking-widest m-3 text-zinc-300 hover:text-blue-400 text-3xl   transition-all ease-out duration-200 hover:scale-125">Company</p>
                    <Link to ="about"><p  className="tracking-widest m-3 text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">about</p></Link>
                    <Link to = "contact"><p  className="tracking-widest  m-3 text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">contact</p></Link>
                    <p  className="tracking-widest  m-3 text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">careers</p>
                 </div>
                 <div >
                    <p  className=" tracking-widest m-4 text-zinc-300 hover:text-blue-400  text-3xl  transition-all ease-out duration-200 hover:scale-125">Legal</p>
                    <p  className=" tracking-widest m-4 text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">Terms & Conditions</p>
                    <p  className=" tracking-widest m-4 text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">Cookie Policy</p>
                    <p  className=" tracking-widest m-4 text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">Company Legal</p>
                    <p  className=" tracking-widest m-4 text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">Policy Doc</p>
                    
                    
                    < p  className=" tracking-widest m-4  text-zinc-300 hover:text-blue-400  text-lg  transition-all ease-out duration-200 hover:scale-125">Privacy Policy</p>
                 </div>
                 
            </div>
        </div>
    )
}


export default Footer;
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
   
    return (
       <div>
        <div className="err">
        <h1>{err.error.message}</h1>
        <h1>     
        Oops......!!!!!!!!!! </h1>
        <h3>
        {err.status}{  err.statusText} 
        </h3>
        </div>
        
       </div>
       
    );
}

export default Error;

// give an access of one important error hook = useRouteError
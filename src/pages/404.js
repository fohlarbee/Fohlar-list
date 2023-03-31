import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    
    
    return (  
        <div className="not-found">
            <h2>Ooopps page not found...</h2>
            <Link href='/'>Go to home</Link>
        </div>
    );
}
 
export default NotFound;
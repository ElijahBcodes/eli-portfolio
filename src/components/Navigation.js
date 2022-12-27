import { Link, useLocation ,} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { FcMenu } from "react-icons/fc";

const Navigation = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    //if location changes will set navbar loc to false, will close navbar
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])


    return (
        <div className='m:h-9 shadow-md w-full top-0 left-0'  id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    {/* <FcMenu /> */}
                </button>
            </div>
            <div className=''>
                <Link to="/"> Home </Link>
                <br></br>
                <Link to="/About"> About </Link>
            </div>
        </div>
    )
}


export default Navigation
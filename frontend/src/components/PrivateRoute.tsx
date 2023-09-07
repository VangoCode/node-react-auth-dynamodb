import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children } : any) => {
    const [verified, setVerified] = useState(false);
    const [calledApi, setCalledApi] = useState(false);

    useEffect(() => {
        const verifyLoggedIn = async () => {
            try {
                const res = await fetch(
                    'http://localhost:8000/login/verify',
                    {
                        method: "POST",
                        credentials: "include"
                    }
                );
                const data = await res.json();
                setVerified(data.verified);
            } catch(err) {
                console.log(err);
                setVerified(false);
            } finally {
                setCalledApi(true);
            }
        }

        verifyLoggedIn();
    }, []);
    // initially don't render anything, however if you've called the api, then either
    // render the children, or redirect to login page
    return calledApi ? (verified ? children : <Navigate to="/login" />) : <></>
}

export default PrivateRoute;
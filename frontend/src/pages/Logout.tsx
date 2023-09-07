import React, { useEffect } from 'react';



const Logout = () => {
    useEffect(() => {
        const logout = async () => {
            await fetch(
                'http://localhost:8000/login/logout',
                {
                    method: "POST",
                    credentials: "include"
                }
            )
            window.location.href = "/login"
        }

        logout();
    }, []);

    return (
        <div>
            Logged out
        </div>
    )
}

export default Logout
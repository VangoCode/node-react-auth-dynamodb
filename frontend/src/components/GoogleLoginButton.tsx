import { GoogleLogin } from "@react-oauth/google";

// uses Google OAuth for React
const GoogleLoginButton = () => {
    const onSuccess = async (res : any) => {
        const idToken = res.credential;

        // if you are successful, pass it to login and redirect to dashboard
        try {
            await fetch(
                'http://localhost:8000/login',
                {
                    method: "POST",
                    headers: { Authorization: `Bearer ${idToken}` },
                    credentials: "include"
                }
            );
            window.location.href = "/dashboard"
        } catch (err) {
            console.log(err);
        }

    }

    const onFailure = () => {
        // display a helpful message to your user here
        console.log("Authentication failed");
    }

    return (
        <div>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onFailure}
                theme="filled_black"
                shape="circle"
                useOneTap
            />
        </div>
    )

}

export default GoogleLoginButton;
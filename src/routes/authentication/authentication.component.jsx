// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication = () => {
    //save auth info after remounting 
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     };

    //     fetchData();
    // }, []);
    return (
        <div className="authentication-container">
            <SignInForm />
            {/* <button onClick={logGoogleUser()}>Sign In With Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default Authentication;
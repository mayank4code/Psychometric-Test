import React, { useState } from 'react';
import "../testingcss/register.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { faUser, faEnvelope, faLock, faMars, faCalendarAlt, faMapMarkerAlt, faCity, faMapPin, faPhone, faCheckCircle  } from '@fortawesome/free-solid-svg-icons';


const RegistrationPage = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", gender: "", age: "", address: "", city: "", pincode: "", country: "", mobile: "" });

    const [isVerified, setIsVerified] = useState(false);

    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit the registration form
        // You can access the form data from the state variables
        if(!user){
            toast.error("Please verify your mobile number first");
            return;
        }
        console.log('Form submitted!', credentials);

        toast.success("YOOO")

    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    //These 3 functions are for OTP sending and verification


    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => {console.log("YOYOYOOYOO"); },
                },
                auth
            );
        }
    }

    function onSignup() {
        const mobLength = credentials.mobile.length;
        if((mobLength<10 || (mobLength>10 && credentials.mobile[0]!=='+'))){
            toast.error("Please enter valid mobile number");
            return;
        }
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = mobLength==10? "+91" + credentials.mobile : credentials.mobile;
        console.log(formatPh);

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                // console.log("here1: ", confirmationResult);
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOTP(true);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                // toast.error("Invalid mobile number format")
                console.log(error);
                setLoading(false);
            });
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setUser(res.user);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    // "user" state is true when the user has verified the OTP successfully

    return (
        <>
        {/* {user?toast.success("Verified"):""} */}

        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>


        <div className="registration-page">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="name">
                        <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input
                        type="text"
                        id="name"
                        name='name'
                        placeholder="Name"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        placeholder="Email"
                        onChange={handleChange}
                        // required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="password">
                        <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="gender">
                        <FontAwesomeIcon icon={faMars} />
                    </label>
                    <select
                        id="gender"
                        name='gender'
                        value={credentials.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                        <option value={3}>Other</option>
                    </select>
                </div>

                <div className="input-field">
                    <label htmlFor="age">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </label>
                    <input
                        type="number"
                        id="age"
                        name='age'
                        value={credentials.age}
                        onChange={handleChange}
                        placeholder="Age"
                        required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="address">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </label>
                    <input
                        type="text"
                        id="address"
                        name='address'
                        placeholder="Address"
                        value={credentials.address}
                        onChange={handleChange}
                        // required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="city">
                        <FontAwesomeIcon icon={faCity} />
                    </label>
                    <input
                        type="text"
                        id="city"
                        name='city'
                        placeholder="City"
                        value={credentials.city}
                        onChange={handleChange}
                        // required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="pincode">
                        <FontAwesomeIcon icon={faMapPin} />
                    </label>
                    <input
                        type="text"
                        id="pincode"
                        name='pincode'
                        placeholder="Pincode"
                        value={credentials.pincode}
                        onChange={handleChange}
                        // required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="country">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </label>
                    <input
                        type="text"
                        id="country"
                        name='country'
                        value={credentials.country}
                        onChange={handleChange}
                        placeholder="Country"
                        // required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="mobile">
                        <FontAwesomeIcon icon={faPhone} />
                    </label>
                    <div className="mobile-number-field">

                        <input
                            type="text"
                            id="mobile"
                            name='mobile'
                            placeholder="Mobile in format +9189.."
                            value={!user ? credentials.mobile : user.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        {user && <span className="verification-status">Verified <FontAwesomeIcon icon={faCheckCircle} className="verified-icon" /></span>}
                        

                        {/* Send OTP button */}
                        {!showOTP ? (
                            <button type="button" onClick={onSignup}>
                                <span>{!loading ? "Send Code via SMS" : "Please wait..."}</span>
                            </button>
                        ) : (
                            <>{ 
                                !user?(<>
                                <input
                                    type="number"
                                    id="otp"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter OTP"
                                    required
                                />
                                <button type="button" onClick={onOTPVerify}>

                                    <span>{!loading ? "Verify Code" : "Please wait..."}</span>
                                </button></>)
                                :<></>
                            }
                            </>
                        )}
                    </div>
                </div>

                <button type="submit"  className={user ? '' : 'disabled'} >Register</button>
            </form>
        </div>
        </>
    );
};

export default RegistrationPage;

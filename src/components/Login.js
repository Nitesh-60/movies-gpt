import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSigninPage, setIsSigninPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInContoller = () => {
    setIsSigninPage(!isSigninPage);
  };

  const handleButtonClick = () => {
    // validate email and password
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    // SignIn / SignUp
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>

      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSigninPage ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninPage && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name "
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address "
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold p-2">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSigninPage ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInContoller}>
          {isSigninPage
            ? "New to Movies GPT? Sign Up Now"
            : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

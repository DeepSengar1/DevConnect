import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

const AuthPage = () => (
  <div className="text-white">
    <h2>Sign In</h2>
    <SignIn />
  </div>
);

export default AuthPage;

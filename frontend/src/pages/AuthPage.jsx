import React from "react";
import { SignIn } from "@clerk/clerk-react";

const AuthPage = () => (
  <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-dark">
    <div
      className="card bg-transparent text-white"
    >
      <div className="card-body p-4">
        <h2 className="card-title text-center mb-4">Sign In</h2>
        <SignIn path="/auth" routing="path" signUpUrl="/auth/signup" />
      </div>
    </div>
  </div>
);

export default AuthPage;

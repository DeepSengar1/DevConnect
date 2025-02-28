import React from "react";
import { useUser } from "@clerk/clerk-react";

const Profile = () => {
  const { user } = useUser();

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
};

export default Profile;

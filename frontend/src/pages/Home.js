import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both the field is requried");
      return;
    }
    // redirect
    navigate(`/editor/${roomId}`, { state: { username } });
    toast.success("room is created");
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <>
      <style>
        {`
          /* Container for the entire layout */
          .container {
            display: flex;
            width: 100%;
            height: 90vh;
            align-items: center;
            justify-content: center;
            color: white;
            background: transparent;
            box-sizing: border-box;
            padding: 2rem;
          }

          /* Left & Right columns */
          .leftSide, .rightSide {
            width: 50%;
            margin: auto;
          }

          /* Heading text */
          .heading {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }

          /* Paragraph styling (optional) */
          .paragraph {
            margin-bottom: 0.5rem;
          }

          /* Shared input styling */
          .inputField {
            margin-bottom: 1rem;
            width: 100%;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            border: 1px solid #4B5563; /* Gray border */
            background-color: #374151; /* Dark gray background */
            color: white;
          }
          .inputField::placeholder {
            color: #9CA3AF; /* Lighter gray placeholder */
          }
          .inputField:focus {
            outline: none;
            box-shadow: 0 0 0 2px #3B82F6; /* Blue ring on focus */
          }

          /* JOIN button styling */
          .joinButton {
            margin-bottom: 1rem;
            width: 100%;
            background-color: #10B981; /* Green-500 */
            color: white;
            font-weight: bold;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .joinButton:hover {
            background-color:rgb(204, 57, 57);
          }

          /* Create New Room button styling */
          .createRoomButton {
            width: 100%;
            background-color: transparent;
            border: 1px solid #e63e3e;
            color: #e63e3e;
            font-weight: bold;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
          }
          .createRoomButton:hover {
            background-color:rgb(206, 55, 55);
            color: white;
          }

          /* Logo styling */
          .logo {
            max-width: 180px;
            display: block;
            margin: 0 auto;
          }
        `}
      </style>

      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side: Form & Buttons */}
        <motion.div
          className="leftSide"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="heading">Enter the ROOM ID</h4>

          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
            placeholder="ROOM ID"
            className="inputField"
          />

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleInputEnter}
            placeholder="USERNAME"
            className="inputField"
          />

          <button onClick={joinRoom} className="joinButton">
            JOIN
          </button>

          <p className="paragraph">Don’t have a room ID?</p>

          <motion.button
            onClick={generateRoomId}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="createRoomButton"
          >
            Create New Room
          </motion.button>
        </motion.div>

        {/* Right Side: Logo */}
        <motion.div
          className="rightSide"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="/images/room_img.svg"
            alt="CODECAST"
            style={{ width: "100%", margin: "10%" }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;

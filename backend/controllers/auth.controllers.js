import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    // Check if username already exists
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); 
    // Prepare profile picture URL based on gender
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create a new user object
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
  if(newUser){
        generateToken(newUser._id, res);
        await newUser.save();

        
        return res.status(201).json({
          _id: newUser._id,
          fullName: newUser.fullName,
          username: newUser.username,
          profilePic: newUser.profilePic,
        });
  } else {
    return res.status(400).json({ error: "Internal server error" });
  }

  } catch (error) {
    console.log("Error in signup controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async  (req, res) => {
  try{
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isMatch = await bcrypt.compare(password, user?.password || "");
    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid user name or password" });
    }

    generateToken(user._id, res);
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }

};
export const logout = (req, res) => {
  try{
  res.cookie("jwt", " " , { maxAge : 0} );
  res.status(200).json({ error: "User logged out" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

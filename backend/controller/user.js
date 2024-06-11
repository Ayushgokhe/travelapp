// const user = require("../module/user");
// // import {bcrypt} from "bcrypt";
// const bcrypt = require('bcrypt')
// const saltRounds = 10;
// // import { createJwtToken } from "../utils/createJwtToken";
// const createJwtToken = require('../utils/createJwtToken')

// // register user

// const register = async (req, res) => {
//   // const { name, email, password, cfmPassword, phone } = req.body;

//   // if(!name || !email || !password || !cfmPassword || !phone){
//   //   res.send(err)
//   // }
//   // if(password !== cfmPassword){
//   //   re.send(err)
//   // }

//   // const emailExist = await user.findOne({ email });

//   // if (emailExist) {
//   //   res.send(err)
//   // }

//   // const user1 = await user.create({
//   //   name,
//   //   email,
//   //   password,
//   //   phone,
//   // });
//   // return res.status(201).json(user1);


//   // bcrypt
//   //   .hash(password, 10)
//   //   .then((hash) => {
//   //     StudentModel.create({ name, email, password:hash })
//   //       .then((student) => res.json(student))
//   //       .catch((err) => res.json(err));
//   //   })


//   try {
//     const { fullName, email, password, confirmPassword, phoneNumber } = req.body;

//     if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
//       throw new Error("Fields must not be empty");
//     }

//     if (password !== confirmPassword) {
//       throw new Error("Confirm password must match password");
//     }

//     const emailExist = await user.findOne({ email });

//     if (emailExist) {
//       throw new Error("Email already in use");
//     }

//     //encrypting password
//     const salt = await bcrypt.genSalt(Number(saltRounds));
//     const hash = await bcrypt.hash(password, salt);

//     const newUser = new user({
//       fullName,
//       email,
//       password: hash,
//       phoneNumber
//     });

//     await newUser.save();

//     res.status(201).json({
//       fullName,
//       email,
//       token: createJwtToken(newUser._id),
//     });
//     console.log('token', token)
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }

// };

// // login user

// const login = async (req, res) => {
//     // const {email, password} = req.body

//     // if(!email || !password){
//     //     res.send(err)
//     // }

//     // await user.findOne({email:email})
//     // .then((user)=>{
//     //     if(user){
//     //         if(password === user.password){
//     //             res.status(200).send('success')
//     //         }else{
//     //             res.status(400).send('wrong password')
//     //         }
//     //     }else{
//     //         res.status(400).send('user not found')
//     //     }
//     // })


//     try {
//       const { email, password } = req.body;
      
//       if (!email || !password) {
//         throw new Error("Fields must not be empty");
//       }

//       const user1 = await user.findOne({email});

//       if (!user1) {
//         throw new Error("User not found");
//       }

//       const pass = await bcrypt.compare(password, user1.password);

//       if (!pass) {
//         throw new Error("User not found");
//       }

//       res.status(200).json({
//         fullName: user1.fullName,
//         email: user1.email,
//         token: createJwtToken(user1._id),
//       });
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
// }


// module.exports = { register, login };


const user = require("../module/user");
const bcrypt = require('bcrypt');
const createJwtToken = require('../utils/createJwtToken');

const saltRounds = 10;

// Register user
const register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, phoneNumber } = req.body;

    if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
      throw new Error("All fields are required");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const emailExist = await user.findOne({ email });

    if (emailExist) {
      throw new Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(Number(saltRounds));
    const hash = await bcrypt.hash(password, salt);

    const newUser = new user({
      fullName,
      email,
      password: hash,
      phoneNumber
    });

    await newUser.save();

    const token = createJwtToken(newUser._id);

    res.status(201).json({
      fullName,
      email,
      token,
    });

    // console.log('New user registered:', { fullName, email });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(400).json({ error: err.message });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const user1 = await user.findOne({ email });

    if (!user1) {
      throw new Error("User not found");
    }

    const pass = await bcrypt.compare(password, user1.password);

    if (!pass) {
      throw new Error("Incorrect password");
    }

    const token = createJwtToken(user1._id);

    res.status(200).json({
      fullName: user1.fullName,
      email: user1.email,
      token,
    });

    // console.log('User logged in:', { email }); n
  } catch (err) {
    console.error('Login error:', err);
    res.status(400).json({ error: err.message });
  }
}

module.exports = { register, login };

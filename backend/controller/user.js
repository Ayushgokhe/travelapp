// const user = require("../module/user");
// const bcrypt = require('bcrypt');
// const createJwtToken = require('../utils/createJwtToken');
// const nodemailer = require('nodemailer')
// const jwt = require('jsonwebtoken');

// const saltRounds = 10;

// // Register user
// const register = async (req, res) => {
//   try {
//     const { fullName, email, password, confirmPassword, phoneNumber } = req.body;

//     if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
//       throw new Error("All fields are required");
//     }

//     if (password !== confirmPassword) {
//       throw new Error("Passwords do not match");
//     }

//     const emailExist = await user.findOne({ email });

//     if (emailExist) {
//       throw new Error("Email already in use");
//     }

//     const salt = await bcrypt.genSalt(Number(saltRounds));
//     const hash = await bcrypt.hash(password, salt);

//     const newUser = new user({
//       fullName,
//       email,
//       password: hash,
//       phoneNumber
//     });

//     await newUser.save();

//     // const token = createJwtToken(newUser._id);
//     const token = jwt.sign({ id: newUser._id }, 'jwt-secret-key', {
//       expiresIn: '1h',
//     });


//     res.status(201).json({
//       fullName,
//       email,
//       token,
//     });

//     // console.log('New user registered:', { fullName, email });
//   } catch (err) {
//     console.error('Registration error:', err);
//     res.status(400).json({ error: err.message });
//   }
// };

// // Login user

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       throw new Error("All fields are required");
//     }

//     const user1 = await user.findOne({ email });

//     if (!user1) {
//       throw new Error("User not found");
//     }

//     const pass = await bcrypt.compare(password, user1.password);

//     if (!pass) {
//       throw new Error("Incorrect password");
//     }

//     const token = jwt.sign({ id: user1._id }, 'jwt-secret-key', {
//       expiresIn: '1h',
//     });

//     res.status(200).json({
//       fullName: user1.fullName,
//       email: user1.email,
//       token,
//     });

//     // console.log('User logged in:', { email }); 
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(400).json({ error: err.message });
//   }
// }

// const forgetPassword = async (req, res) => {
//   const {email} = req.body;
//   user.findOne({email:email})
//   .then(user => {
//     if(!user){
//       return res.send({Status:'User Not Existed'})
//     }
//     const token = jwt.sign({id:user._id},'jwt-secret-key')
//     // const token = createJwtToken(user._id);

//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'ayushgokhe2001@gmail.com',
//         pass: 'masg tknr dxgq pqtk'
//       }
//     });
    
//     var mailOptions = {
//       from: 'ayushgokhe2001@gmail.com',
//       // from: 'selapo1053@noefa.com',
//       to: `${user.email}`,
//       subject: 'Reset your password',
//       text: `http://localhost:5173/resetPassword/${user._id}/${token}`
//     };
    
//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//       } else {
//         return res.send({Status:'Success'})
//       }
//     });
//   })
// }

// const resetPassword = async (req, res) => {
//   const { id, token } = req.params;
//   const { password } = req.body;

//   let decoded;
//   try {
//     decoded = jwt.verify(token, 'jwt-secret-key');
//   } catch (err) {
//     return res.status(400).json({ Status: 'Error resetting password', error: err.message });
//   }

//   if (!decoded || decoded.id !== id) {
//     return res.status(400).json({ Status: 'Invalid token' });
//   }

//   const salt = await bcrypt.genSalt(Number(saltRounds));
//   const hash = await bcrypt.hash(password, salt);

//   await user.findByIdAndUpdate(id, { password: hash });

//   res.json({ Status: 'Success' });
// };


// module.exports = { register, login, forgetPassword, resetPassword }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const user = require("../module/user");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
// const createJwtToken = require('../utils/createJwtToken'); // Assuming you have this utility function

// const saltRounds = 10;
// const jwtSecret = process.env.JWT_SECRET;
// const emailUser = process.env.EMAIL_USER;
// const emailPass = process.env.EMAIL_PASS;

// // Register user
// const register = async (req, res) => {
//   try {
//     const { fullName, email, password, confirmPassword, phoneNumber } = req.body;

//     if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "Passwords do not match" });
//     }

//     const emailExist = await user.findOne({ email });

//     if (emailExist) {
//       return res.status(400).json({ error: "Email already in use" });
//     }

//     const salt = await bcrypt.genSalt(saltRounds);
//     const hash = await bcrypt.hash(password, salt);

//     const newUser = new user({
//       fullName,
//       email,
//       password: hash,
//       phoneNumber
//     });

//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id }, jwtSecret, { expiresIn: '1h' });

//     res.status(201).json({
//       fullName,
//       email,
//       token,
//     });

//   } catch (err) {
//     console.error('Registration error:', err);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Login user
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const user1 = await user.findOne({ email });

//     if (!user1) {
//       return res.status(400).json({ error: "User not found" });
//     }

//     const pass = await bcrypt.compare(password, user1.password);

//     if (!pass) {
//       return res.status(400).json({ error: "Incorrect password" });
//     }

//     const token = jwt.sign({ id: user1._id }, jwtSecret, { expiresIn: '1h' });

//     res.status(200).json({
//       fullName: user1.fullName,
//       email: user1.email,
//       token,
//     });

//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Forget Password
// const forgetPassword = async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user1 = await user.findOne({ email });

//     if (!user1) {
//       return res.status(400).json({ error: 'User Not Existed' });
//     }

//     const token = jwt.sign({ id: user1._id }, jwtSecret, { expiresIn: '1h' });

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: emailUser,
//         pass: emailPass
//       }
//     });

//     const mailOptions = {
//       from: emailUser,
//       to: user1.email,
//       subject: 'Reset your password',
//       text: `http://localhost:5173/resetPassword/${user1._id}/${token}`
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ error: 'Error sending email' });
//       } else {
//         return res.status(200).json({ status: 'Success' });
//       }
//     });
//   } catch (err) {
//     console.error('Forget password error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// }

// // Reset Password
// const resetPassword = async (req, res) => {
//   const { id, token } = req.params;
//   const { password } = req.body;

//   try {
//     const decoded = jwt.verify(token, jwtSecret);

//     if (!decoded || decoded.id !== id) {
//       return res.status(400).json({ status: 'Invalid token' });
//     }

//     const salt = await bcrypt.genSalt(saltRounds);
//     const hash = await bcrypt.hash(password, salt);

//     await user.findByIdAndUpdate(id, { password: hash });

//     res.json({ status: 'Success' });
//   } catch (err) {
//     console.error('Reset password error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// module.exports = { register, login, forgetPassword, resetPassword };


const User = require("../module/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

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

    const emailExist = await User.findOne({ email });

    if (emailExist) {
      throw new Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(Number(saltRounds));
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hash,
      phoneNumber
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, 'jwt-secret-key', {
      expiresIn: '1h',
    });

    res.status(201).json({
      fullName,
      email,
      token,
    });

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

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign({ id: user._id }, 'jwt-secret-key', {
      expiresIn: '1h',
    });

    res.status(200).json({
      fullName: user.fullName,
      email: user.email,
      token,
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(400).json({ error: err.message });
  }
}

const forgetPassword = async (req, res) => {
  const {email} = req.body;
  User.findOne({email:email})
  .then(user => {
    if(!user){
      return res.send({Status:'User Not Existed'})
    }
    const token = jwt.sign({id:user._id},'jwt-secret-key')
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ayushgokhe2001@gmail.com',
        pass: 'masg tknr dxgq pqtk'
      }
    });
    
    var mailOptions = {
      from: 'ayushgokhe2001@gmail.com',
      to: `${user.email}`,
      subject: 'Reset your password',
      text: `http://localhost:5173/resetPassword/${user._id}/${token}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        return res.send({Status:'Success'})
      }
    });
  })
}

const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  let decoded;
  try {
    decoded = jwt.verify(token, 'jwt-secret-key');
  } catch (err) {
    return res.status(400).json({ Status: 'Error resetting password', error: err.message });
  }

  if (!decoded || decoded.id !== id) {
    return res.status(400).json({ Status: 'Invalid token' });
  }

  const salt = await bcrypt.genSalt(Number(saltRounds));
  const hash = await bcrypt.hash(password, salt);

  await User.findByIdAndUpdate(id, { password: hash });

  res.json({ Status: 'Success' });
};


module.exports = { register, login, forgetPassword, resetPassword }

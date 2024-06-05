const user = require("../module/user");


// register user

const register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const user1 = await user.create({
    name,
    email,
    password,
    phone,
  });
  return res.status(201).json(user1);
};

// login user

const login = async (req, res) => {
    const {email, password} = req.body

    await user.findOne({email:email})
    .then((user)=>{
        if(user){
            if(password === user.password){
                res.status(200).send('success')
            }else{
                res.status(400).send('wrong password')
            }
        }else{
            res.status(400).send('user not found')
        }
    })
}


module.exports = { register, login };

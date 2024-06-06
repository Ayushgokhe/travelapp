const user = require("../module/user");


// register user

const register = async (req, res) => {
  const { name, email, password, cfmPassword, phone } = req.body;

  if(!name || !email || !password || !cfmPassword || !phone){
    res.send(err)
  }
  if(password !== cfmPassword){
    re.send(err)
  }

  const emailExist = await user.findOne({ email });

  if (emailExist) {
    res.send(err)
  }

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

    if(!email || !password){
        res.send(err)
    }

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

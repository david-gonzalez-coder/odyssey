//dependencies
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//assets
import loginimg from "../assets/loginimg.png"
//components
import {
  Box as Wrapper, 
  Box as Header, 
  Box as Inputs, 
  Box as Actions,
  Box as Form,
  Box,
  MyBtn
} from 'my-library-core'

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    navigate('/')
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  }
  return (
    <Wrapper h="85vh" w="100%" flex center>
        
    <Wrapper 
    className="stylePrimary"
    flex
    myStyle={{
      w: '80%', h: '80vh',
      br: '10px', mxW: '1000px', mxH: '500px',
      '@media (max-width: 700px)':{w: '90%'}
    }}

  >
    <Form 
      form
      p="2rem"
      w="50%" 
      x="space-between"
      action="" 
      flex
      wrap
      flexColulmn
      myStyle={{'@media (max-width: 700px)':{w: '100%'}}}
      onSubmit={handleSubmit}
    >
        <Header header>
            <h2>Sign Up to Odyssey</h2>
        </Header >
        <Inputs flex wrap m="2rem 0">
            <input 
              type="text" 
              className="input stylePrimary" 
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password"  
              className="input stylePrimary"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            
            />
        </Inputs>
        <Actions flex center>
            <MyBtn 
              
              primary 
              type="success" 
              fullRounded 
              onClick={signUp}
              w="100%"
              m="auto"
            >Sign Up</MyBtn>
        </Actions>
      
    </Form>
    <Box w="50%" h="100%" myStyle={{'@media (max-width: 700px)':{d: 'none'}}} >
      <img className="full-img img-contain" src={loginimg} alt="" />
    </Box>
  </Wrapper>

</Wrapper>

  );
};
export default SignUp;

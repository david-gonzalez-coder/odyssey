import {Box, MyBtn} from 'my-library-core'
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";

const searcSectionStyle = {
  w: '100%', 
  jc: 'space-between', 
  ai: 'center',
  h: '80px', 
  br: '0 0 20px 20px', 
  marginTop: '50px', 
  display: 'flex',
  '@media (max-width: 450px)': { 
    fxDit: 'column' 
  }
}
const SearchStyle = {
  ai: 'center', 
  mxW: '400px', 
  p: '5px', 
  m: '20px 0', 
  d: 'flex', 
  br: '50px',
  h: '50px',

  '@media (max-width: 450px)': { 
    w: '100%' 
  },

  'input': {
    b: 'none',
    outline: 'none',
    p: '5px 15px', 
    w: '100%',
    br: '50px',
    background: '#1a1a1a',
    color: '#fff',
    h: '100%',
   
  }
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  @media (max-width: 450px) {
    font-size: 0.8em;
  }
`;
const Navigation2 = () => {
    return (
        <Box myStyle={searcSectionStyle} >
              <Box nav flex>
                <StyledLink to="/">Explorar</StyledLink>
                <StyledLink to="/store">Tienda</StyledLink>
              </Box>

              <Box myStyle={SearchStyle} className="stylePrimary" >
                <input type="text" placeholder="Buscar..."  />

                <MyBtn rounded className="stylePrimary" p="5px">
                  <BiSearchAlt size="1.3em" color="#fff" />
                </MyBtn>
              </Box>
        </Box>
    )
}
export default Navigation2
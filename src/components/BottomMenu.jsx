//dependencies
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
//icons
import { IconContext } from 'react-icons'
import { AiFillHome } from 'react-icons/ai'
import { BiStore } from 'react-icons/bi'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsPeopleFill } from 'react-icons/bs'
import { ImBlog } from 'react-icons/im'
//components
import { Navbar } from 'my-library-core'
import { useStateValue } from '../store/StateProvider'

// import { useStateValue } from "../providers/StateProvider";
//styled components
const Counter = styled.span`
  color: #707070;
  text-decoration: none;
  font-size: 1rem;
`

const Navigation3 = ({ bg }) => {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <Navbar
        position="fixed"
        location="bottom"
        bg="#1a1a1a"
        z="1"
        header={{
            br: '10px 10px 0 0',
            '@media (min-width: 600px)': {
                d: 'none'
            }
        }}
        nav={{ai: 'center', jc: 'space-around'}}
    >
      <IconContext.Provider value={{ color: '#707070', size: '2rem' }}>
        <NavLink to='/'>
          {' '}
          <AiFillHome />{' '}
        </NavLink>
        <NavLink to='/store'>
          {' '}
          <BiStore />{' '}
        </NavLink>
        <div>
          <NavLink to='/checkout'>
            {' '}
            <RiShoppingCartLine />
          </NavLink>
          <Counter>{basket?.length}</Counter>
        </div>
        {/* <NavLink to='/blog'>
          {' '}
          <ImBlog />{' '}
        </NavLink> */}
      </IconContext.Provider>
    </Navbar>
  )
}
export default Navigation3

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
      location='left'
      position='fixed'
      header={{
        z: '1',
        t: 'calc(50vh - 150px)',
        w: '85px',
        m: '0px',
        l: '20px',
        h: '300px',
        '@media (max-width: 600px)': {
          w: '100%',
          top: 'calc(100vh - 80px)',
          left: '0'
        },
      }}
      nav={{
        l: '2.5rem',
        p: '40px 20px',
        w: '85px',
        ai: 'center',
        bg: bg || '#1a1a1a',
        bxSw: '0px 3px 6px rgba(0, 0, 0, 0.16)',
        jc: 'space-between',
        br: '10px',
        '@media (max-width: 600px)': {
          d: 'none'
        },
      }}
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

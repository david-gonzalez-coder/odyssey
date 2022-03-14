import { Box } from 'my-library-core'
import { IconContext } from 'react-icons'
import { AiFillHome } from 'react-icons/ai'
import { MdComputer } from 'react-icons/md'
import { FaGamepad } from 'react-icons/fa'
import { BiGame } from 'react-icons/bi'
const Navigation1 = () => {
  return (
    <Box myStyle={{ mT: '20px', jc: 'space-around', d: 'flex', fs: '6rem', 
        '@media (max-width: 600px)': {
            fs: '3.5rem'
        }
    }}>
      <IconContext.Provider value={{ color: '#707070' }}>
        <AiFillHome />
        <MdComputer />
        <FaGamepad />
        <BiGame />
      </IconContext.Provider>
    </Box>
  )
}
export default Navigation1

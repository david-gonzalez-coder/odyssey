import {MyThemeColors as colors, Customizer, Box, Navbar} from 'my-library-core'
import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'
import {useState} from 'react'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.text.main};
    margin: 10px;
    :hover{ color: #141414}
    ${({style})=> style && Customizer(style)}
`
const SubMenu = styled(Box)`
    position: absolute;
    background: #fff;
    top: 80px;
    min-width: 100px;
    box-shadow: 2px 3px 5px #eee;
`

//-------------------------------------------------
const Header001 = ({
        links = false, logo = false, title, box, link,
        subBox, nav, subInsert, navInsert = false, location, position,
        ...rest
}) => {
    const [subMenu, setSubMenu] = useState({state:  false, item: 'none'})
    const {img, alt, w, width, h, height, to} = logo;
    const linksList = [];

    for(let linkData in links) {  
        if(typeof links[linkData] === 'object'){
            const subLinks = [];
            for(let subLink in links[linkData]){
                subLinks.push(
                    <StyledLink 
                        to={links[linkData][subLink]}
                        key={subLink}
                    >
                        {subLink}
                    </StyledLink>)
            }
            linksList.push(
                <Box nav flex flexColumn >
                    <StyledLink 
                        to='#' 
                        style={link}
                        key={linkData}
                        onMouseEnter={()=> setSubMenu({state: subMenu.state, item: linkData})}
                        onClick={()=> setSubMenu({state: !subMenu.state, item: linkData})}
                        >
                        {linkData}
                    </StyledLink>   
                    {subMenu.state === true && subMenu.item === linkData ? 
                        <SubMenu 
                            nav
                            flex 
                            flexColumn
                            center
                            rounded
                            bg="#fff" 
                        >
                            {subLinks}
                        </SubMenu> : 
                        '' }
                </Box>
            )
        }else{
            linksList.push(
                <StyledLink 
                    to={links[linkData]} 
                    style={link}
                    key={linkData}
                    onMouseEnter={()=> setSubMenu({state: false, item: linkData})}
                >
                    {linkData}
                </StyledLink>
            );
        }    
    }

    return(
        <Navbar
            location={location}
            position={position}
            {...rest}
            nav={subBox}
            header={box}
        >
            {logo && 
                <StyledLink to={to || '#'}> 
                    <img src={img} alt={alt} width={width || w} height={height || h}/>
                </StyledLink>
            }
            {title && title}
            {links || navInsert ? <Box nav flex center myStyle={nav}>{linksList}{navInsert}</Box> : ''}
            {subInsert}
        </Navbar>
    )
}
export default Header001

//drop down
//subMenu
//refactoritation


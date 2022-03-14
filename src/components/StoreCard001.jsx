import {Card, Customizer} from 'my-library-core'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'


const StyledLink = Styled(Link)`
    text-decoration:none;
    ${({mystyle}) => mystyle && Customizer(mystyle)}
`
const StoreCard001 = ({
    image = false, 
    title, 
    price,
    linkStyle,
    link = false,
    description,
    ...rest
}) => {
    return (
        <StyledLink to={link} mystyle={linkStyle}>
            <Card 
                {...rest}
                image={image}
                content={
                <>
                    <h2>{title}</h2>
                    <article>{description}</article>
                    <span>{price}</span>
                </>
                }
            />  
        </StyledLink>  
    )
}
export default StoreCard001
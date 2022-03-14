//components
import{
  Box as Wrapper, 
  Box as Content, 
  Box as Subtotal, 
  MyBtn, 
  Card
} from "my-library-core";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../store/reducer";
import { useStateValue } from "../store/StateProvider";
import {Navigation3, BottomMenu, GoToTop} from '../components'

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const removeFromBasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <>
      <Navigation3 />
      <Wrapper
        grid 
        cols="150px 1fr"
        x="center"
        p="20px"
        myStyle={{'@media (max-width: 550px)': {gtc: '1fr'}}}
      >
        
        <Content span="2/3" myStyle={{mxW: '1000px'}}>
          {/* ------------------------------------------------ */}
          {basket.map((item) => (
            <Card 
            id={23}
            className="stylePrimary cardEffect"
            flex
            flexRow
            image={{src: "https://cdn1.epicgames.com/offer/84c76746bce94effb8e1047fabfd7eb7/b_1200x1600-bfc818169d2b198dbc1553a0491d340c?h=854&resize=1&w=640"}}
            imageStyle={{
              h: '100%',
              img: {
                br: '10px 10px 0 0', 
                aspectRatio: '1.5/1', 
                objectFit: 'contain', 
                h: '100%', mxH: '250px'
              }
            }}
            myStyle={{ 
                br: '15px', m: '15px 0',
                '@media (max-width: 550px)':{
                  fxDit: 'column'
                }
             }}
            contentStyle={{p: '20px 40px 40px 40px'}}
            content={
              <>  
                <h2>titulo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu 
                </p>
                <b>$ 45</b>
                <MyBtn 
                  primary 
                  rounded 
                  type="danger"
                  // onClick={()=>removeFromBasket(23)}
                >Delete</MyBtn>
              </>
            } 

          />
          ))}
        {/* ------------------------------------------------ */}
          <Subtotal
            flex  
            rounded
            flexColumn
            myStyle={{
              jc: 'space-between',
              h: '150px',
              p: '20px',
              pt: 'sticky',
              bm: '0px', 
              bg: 'rgb(18, 18, 18)',
              fxWrap: 'wrap',
              '@media (max-width: 550px)':{
                bm: '80px',  mT: '80px'
              }
            }}
          >
            <CurrencyFormat
              renderText={(value) => (
                  <p>
                    subtotal({basket.length} items): <strong>{value}</strong>
                  </p>  
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <MyBtn primary rounded m='0' w="100%">Proceed to checkout </MyBtn>
          </Subtotal>
        </Content>
      </Wrapper>
      <BottomMenu />
      <GoToTop />
    </>
  );
};
export default Checkout;

// //--------------IMPORTS---------------------------
//     import {useState} from 'react'
//     //dependencies
//         import styled from 'styled-components'
//     //components
//         import { Slider, StoreCard001 as Card,Navigation3, BottomMenu, GoToTop} from '../components'
//     //other
//         import {Customizer, Box, MyBtn } from 'my-library-core'
//         // import { Star} from '../layout'
//         import { useStateValue } from "../store/StateProvider";
//         import { cardsData, imagesProduct } from '../testData'

// //--------------END_IMPORTS--------------------------

// const products = cardsData.map((element) => {
//     return (<li key={element.title}>
//        <Card
//         className="stylePrimary cardEffect"

//         image={{ src: element.image}}
//         imageStyle={{
//           'img': {
//             br: '10px 10px 0 0',
//             aspectRatio: '1.5/1',
//             objectFit: 'contain',
//           }
//         }}
//         myStyle={{h:'100%', w: '250px', br: '15px'}}
//         contentStyle={{p: '20px 40px 40px 40px'}}
//         title={element.title}
//         price={'$ ' + element.price}
//         description={
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
//           </p>
//         }
//       />
//       </li>)
// })

// const elements = imagesProduct.map((element) =>
//     <Box myStyle={{aspectRation: '1.5/1', 'img': {br: '5px'}}}>
//         <img className="full-img img-contain" src={element} />
//     </Box>)
// //------STYLED-COMPONENTS-----------

// const View = styled.div`
//     ${Customizer({
//         h: '100vh', pt: 'sticky', t: '0', fxDit: 'column',
//         '.view_menu':{mBm: '5rem', w: '100%', jc: 'center'},
//         break:{
//             medium:{gc: '1 / -1', pt: 'static'}
//         }
//     })}
// `
// const Info = styled.div`
//     ${Customizer({
//         p: '4rem',
//         '.info_info':{
//             mBm: '20px',
//             '.price':{fs: '1.25rem', fw: '500', c: '#888888'},
//         },
//         '.abstract':{
//             c: '#ccc', lnH: '25px',
//             ff: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//             'ul':{ p: '1.5rem', 'li':{m: '5px 0'} }
//         },
//         '.info_menu':{
//             w: '100%', z: '10', pt: 'sticky', bm: '0', bg: 'rgb(28, 28, 28)',
//             p: '1rem', fxWrap: 'wrap',
//             "input[type='number']": {
//                  w: '50px', h: '35px', b: '1px solid #ccc', br: '3px',
//                  p: '2px 5px', outline: 'none'
//             }

//             },
//         break:{
//             medium:{gc: '1 / -1'}
//         }
//     })}

// `

// function ProductView() {
//     const [{ currentProduct, basket }, dispatch] = useStateValue();

//     const [numberItems, setNumberItems] = useState(1)

//     const handelClick = () => {
//         dispatch({
//           type: "SET_MODAL_VIEW",
//           modalView: true
//         });
//       };

//   const addToBasket = () => {
//     dispatch({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: currentProduct.id,
//         title: currentProduct.title,
//         image: currentProduct.image,
//         price: currentProduct.price,
//         rating: currentProduct.rating,
//         numberItems: numberItems
//       }
//     });
//   };

//     return (
//         <>
//         <Navigation3 />
//         <Box grid cols="85px 1fr" bg="rgb(28, 28, 28)">

//             <Box></Box>
//             <Box grid
//                 myStyle={{
//                     mxW: '1200px',
//                     '.mX':{m: '0 10px'},
//                     '.flex': {d: 'flex'},
//                     '.center': {jc: 'center', ai: 'center'},
//                     '.end': {jc: 'flex-end', ai: 'center'},
//                     '.free':{c: '#1aa331'}
//             }}>
//                 <Box grid myStyle={{gc: '1 / -1'}}>
//                      <View className="flex center">
//                          <Box grid>
//                             <Slider
//                                 elements={elements}
//                                 columns="10"
//                                 widthColumn="550"
//                                 myStyle={{gc: '1 / -1'}}/>
//                          </Box>
//                      </View>
//                      <Info>
//                          <h2>{currentProduct.title}</h2>
//                          <div className="info_info flex end">
//                             <div className="price mX">${currentProduct.price}</div>
//                             {/* <div className="rating mX flex">
//                             {Array(currentProduct.rating)
//                                  .fill().map((_, i) => (<Star />)
//                             )}
//                             </div> */}
//                             <p className="free mX">free shipping</p>
//                          </div>
//                          <div className="abstract">
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
//                                  ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iusto
//                                  nostrum culpa ipsam maiores, aperiam incidunt repudiandae fuga, laborum
//                             </p> <br /> <br />
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
//                                  ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iusto
//                                  nostrum culpa ipsam maiores, aperiam incidunt repudiandae fuga, laborum
//                             </p> <br /> <br />

//                             <p> Product features:</p> <br />
//                             <ul>
//                                 <li>Lorem ipsum, dolor sit amet consectetur</li>
//                                 <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
//                                 <li>ipsum, </li>
//                                 <li>ipsum, dolor sit amet</li>
//                                 <li>met consectetur adipisicing</li>
//                             </ul> <br /> <br />
//                             <p>Returns and refunds:</p><br />
//                             <ul>
//                                 <li>orem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
//                                  ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iusto </li>
//                                 <li>orem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
//                                  ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iustoorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
//                                  ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iusto</li>
//                             </ul> <br />
//                          </div>
//                          <div className="info_menu flex end">

//                                 <input
//                                     type="number"
//                                     value={numberItems}
//                                     onChange={(e)=>setNumberItems(e.target.value)}
//                                 />
//                                 <MyBtn
//                                     rounded primary
//                                     // bg="#141414"
//                                     onClick={()=> addToBasket()}
//                                 >Add to cart</MyBtn>
//                          </div>
//                      </Info>
//                 </Box>
//                 {/* related products */}
//                 <h2>Products you may be interested in</h2>
//                 <Box myStyle={{gc: '1 / -1'}}>
//                     <Slider
//                         elements={products}
//                         columns="10"
//                         widthColumn="250px"
//                         myStyle={{gc: '1 / -1'}}/>
//                 </Box>

//             </Box>
//         </Box>
//         <BottomMenu />
//         <GoToTop />
//         </>
//     )
// }

// export default ProductView

//--------------IMPORTS---------------------------
import React, { useState } from 'react'
//dependencies
import styled from 'styled-components'
//components
import { Slider, StoreCard001 as Card, GoToTop } from '../components'
import { MyBtn, Customizer, Box } from 'my-library-core'
//icons
//other
import { useStateValue } from '../store/StateProvider'
import { cardsData, imagesProduct } from '../testData'
import { Link } from 'react-router-dom'

//--------------END_IMPORTS--------------------------

// const elements = imagesProduct.map((element) => <ImageProductView url={element}/>)
const elements = imagesProduct.map((url) => (
  <li key={url}>
    <Box
      myStyle={{
        aspectRatio: '1.25/1',
        img: {
          br: '5px',
          objectFit: 'cover',
          w: '100%',
          h: '100%',
        },
      }}
    >
      <img src={url} alt='' />
    </Box>
  </li>
))

//----------STYLED-COMPONENTS-----------
const StyledLink = styled(Link)`
  border-radius: 5px;
  background: rgb(48, 48, 48);
  color: #fff;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  font-size: 14px;
  text-decoration: none;
`
const View = styled.div`
  ${Customizer({
    h: '100vh',
    pt: 'sticky',
    t: '0',
    fxDit: 'column',
    '.view_menu': { mBm: '5rem', w: '100%', jc: 'center' },
    break: {
      medium: { gc: '1 / -1', pt: 'static' },
    },
    '@media (max-width: 900px)': {
      pt: 'relative',
    },
  })}
`
const Info = styled.div`
  ${Customizer({
    p: '4rem',
    '.info_info': {
      mBm: '20px',
      '.price': { fs: '1.25rem', fw: '500', c: '#888888' },
    },
    '.abstract': {
      c: '#252a2b',
      lnH: '25px',
      ul: { p: '1.5rem', li: { m: '5px 0' } },
    },
    '.info_menu': {
      w: '100%',
      z: '10',
      pt: 'sticky',
      bm: '0',
      bg: '#fff',
      p: '1rem',
      fxWrap: 'wrap',
      '@media (max-width: 600px)': {
        bm: '80px',
        z: '1',
      },

      "input[type='number']": {
        w: '50px',
        h: '35px',
        b: '1px solid #ccc',
        br: '3px',
        p: '2px 5px',
        outline: 'none',
      },
    },
    break: {
      medium: { gc: '1 / -1' },
    },
  })}
`

function ProductView() {
  const [{ currentProduct, basket }, dispatch] = useStateValue()

  const [numberItems, setNumberItems] = useState(1)
  const [stateModal, setStateModal] = useState(false)

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: currentProduct.id,
        title: currentProduct.title,
        image: currentProduct.image,
        price: currentProduct.price,
        rating: currentProduct.rating,
        numberItems: numberItems,
      },
    })
  }

  return (
    <>
      <Box bg='#fff'>
        <Box></Box>
        <Box
          bg='#fff'
          grid
          myStyle={{
            mxW: '1200px',
            '.mX': { m: '0 10px' },
            '.flex': { d: 'flex' },
            '.center': { jc: 'center', ai: 'center' },
            '.end': { jc: 'flex-end', ai: 'center' },
            '.free': { c: '#1aa331' },
            '.title': { c: '#1a1a1a' },
          }}
        >
          <Box
            grid
            span='1 / -1'
            myStyle={{ '@media (max-width: 900px)': { gtc: '1fr' } }}
          >
            <View className='flex center'>
              <Box grid>
                <Slider
                  elements={elements}
                  columns='10'
                  widthColumn='550'
                  myStyle={{ gc: '1 / -1' }}
                />
              </Box>
            </View>
            <Info>
              <h1 className='title'>{currentProduct.title}</h1>
              <div className='info_info flex end'>
                <div className='price mX'>${currentProduct.price}</div>

                <p className='free mX'>free shipping</p>
              </div>
              <div className='abstract'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam
                  asperiores, iusto nostrum culpa ipsam maiores, aperiam
                  incidunt repudiandae fuga, laborum
                </p>{' '}
                <br /> <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam
                  asperiores, iusto nostrum culpa ipsam maiores, aperiam
                  incidunt repudiandae fuga, laborum
                </p>{' '}
                <br /> <br />
                <p> Product features:</p> <br />
                <ul>
                  <li>Lorem ipsum, dolor sit amet consectetur</li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>ipsum, </li>
                  <li>ipsum, dolor sit amet</li>
                  <li>met consectetur adipisicing</li>
                </ul>{' '}
                <br /> <br />
                <p>Returns and refunds:</p>
                <br />
                <ul>
                  <li>
                    orem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quibusdam ipsum saepe explicabo illum quia odio rem ex
                    aliquam asperiores, iusto{' '}
                  </li>
                  <li>
                    orem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quibusdam ipsum saepe explicabo illum quia odio rem ex
                    aliquam asperiores, iustoorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Quibusdam ipsum saepe
                    explicabo illum quia odio rem ex aliquam asperiores, iusto
                  </li>
                </ul>{' '}
                <br />
              </div>
              <div className='info_menu flex end'>
                <input
                  type='number'
                  value={numberItems}
                  onChange={(e) => setNumberItems(e.target.value)}
                />
                <StyledLink onClick={() => addToBasket()} to='/checkout'>
                  Add to cart
                </StyledLink>
              </div>
            </Info>
          </Box>
        </Box>
      </Box>
      <GoToTop />
    </>
  )
}

export default ProductView

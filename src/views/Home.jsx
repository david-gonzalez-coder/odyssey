//components
import {
  Navigation1,
  Navigation2,
  Navigation3,
  StoreCard001 as Card,
  Carousel,
  BottomMenu,
  GoToTop,
} from '../components'
// import { Carousel } from "../mySystem/class-conponents/carrusel";
import {
  Box,
  Box as Wrapper,
  Box as Products,
  Box as Main,
} from 'my-library-core'

import { useStateValue } from '../store/StateProvider'
import { cardsData } from '../testData'
const slides = [
  <img
    src='https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg'
    alt='1'
  />,
  <img
    src='https://www.zonammorpg.com/wp-content/uploads/2020/12/warframe-epic-810x400.jpg'
    alt='2'
  />,
  <img
    src='https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg'
    alt='3'
  />,
  <img src='https://picsum.photos/800/303/?random' alt='4' />,
  <img src='https://picsum.photos/800/304/?random' alt='5' />,
]

const Home = () => {
  const [{ currentProduct }, dispatch] = useStateValue()

  const setCurrent = (id, title, image, price, rating) => {
    dispatch({
      type: 'SET_CURRENT_PRODUCT',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  const productsElements = cardsData.map((element) => {
    return (
      <li key={element.title}>
        <Card
          link='/product-view'
          onClick={() =>
            setCurrent(
              element.id,
              element.title,
              element.image,
              element.price,
              element.rating
            )
          }
          className='stylePrimary cardEffect'
          image={{ src: element.image }}
          imageStyle={{
            img: {
              br: '10px 10px 0 0',
              aspectRatio: '1.5/1',
              objectFit: 'contain',
            },
          }}
          myStyle={{ h: '100%', w: '100%', br: '5px' }}
          contentStyle={{ p: '20px 40px 40px 40px' }}
          title={element.title}
          price={'$ ' + element.price}
          description={<p>Lorem ipsum dolor sit amet consectetur</p>}
        />
      </li>
    )
  })

  return (
    <Wrapper
      grid
      cols='150px 1fr'
      myStyle={{ '@media (max-width: 600px)': { gtc: '1fr' } }}
    >
      <Main
        section
        flex
        center
        p='20px'
        myStyle={{
          mxW: '1300px',
          fxWrap: 'wrap',
          '@media (max-width: 600px)': {
            gc: '1/ -1',
          },
        }}
        span='2/3'
      >
        <Box h='80vh' myStyle={{ '@media (max-width: 600px)': { d: 'none' } }}>
          <Carousel slides={slides} autoplay={true} interval={4000} />
        </Box>
        <Navigation1 /> {/* list icons */}
        <Navigation2 /> {/*explore store       search */}
        <Navigation3 /> {/*lateral and bottom  menu*/}
        <Products
          grid
          gap='15px'
          cols='repeat(auto-fill, minmax(220px, 1fr))'
          myStyle={{ 
            m: '20px auto', ai: 'stretch',
            '@media (max-width: 600px)':{
              gtc: 'repeat(auto-fill, minmax(180px, 1fr))'
              
            }
         }}
        >
          {productsElements}
        </Products>
      </Main>
      <BottomMenu />
      <GoToTop />
    </Wrapper>
  )
}
export default Home

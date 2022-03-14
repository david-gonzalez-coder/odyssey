import {
  Navigation1,
  Navigation2,
  Navigation3,
  StoreCard001 as Card,
  BottomMenu,
  GoToTop,
} from '../components'
//components
import { Box as Wrapper, Box as Products, Box } from 'my-library-core'

const WrapperStyle = {
  maxWidth: '1000px',
  width: '80%',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '0 0 0 45px',
  '@media (max-width: 500px)': {
    width: '100%;',
    padding: '5px',
  },
}

const Store = () => {
  return (
    <>
      <Wrapper myStyle={WrapperStyle}>
        <Navigation1 />
        <Navigation2 />
        <Navigation3 />

        <Products
          grid
          gap='10px'
          cols='repeat(auto-fill, minmax(200px, 1fr))'
          center
        >
          <Card
            className='cardEffect'
            image={{
              src: 'https://cdn1.epicgames.com/offer/84c76746bce94effb8e1047fabfd7eb7/b_1200x1600-bfc818169d2b198dbc1553a0491d340c?h=854&resize=1&w=640',
            }}
            title='Dead cells'
            imageStyle={{ img: { br: '5px' } }}
            contentStyle={{
              p: '0',
              c: '#fff',
              fs: '14px',
              h2: { fs: '14px' },
            }}
            price={'$ 49'}
          />
          <Card
            className='cardEffect'
            image={{
              src: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640',
            }}
            title='Dead cells'
            imageStyle={{ img: { br: '5px' } }}
            contentStyle={{
              p: '0',
              c: '#fff',
              fs: '14px',
              h2: { fs: '14px' },
            }}
            price={'$ 49'}
          />
          <Card
            className='cardEffect'
            image={{
              src: 'https://m.media-amazon.com/images/M/MV5BOGM3MTlhM2QtNWE5NC00NGEwLWJlYWYtMGJkNzYwMmIzMTRiXkEyXkFqcGdeQXVyNDIwOTkyNjM@._V1_.jpg',
            }}
            title='Dead cells'
            imageStyle={{ img: { br: '5px' } }}
            contentStyle={{
              p: '0',
              c: '#fff',
              fs: '14px',
              h2: { fs: '14px' },
            }}
            price={'$ 49'}
          />
          <Card
            className='cardEffect'
            image={{
              src: 'https://cdn1.epicgames.com/4d8b727a49144090b103f6b6ba471e71/offer/EGS_HundredDaysWinemakingSimulatorDEMO_BrokenArmsGames_Demo_S2-1200x1600-35531ec1fa868e3876fac76471a24017.jpg?h=854&resize=1&w=640',
            }}
            title='Dead cells'
            imageStyle={{ img: { br: '5px' } }}
            contentStyle={{
              p: '0',
              c: '#fff',
              fs: '14px',
              h2: { fs: '14px' },
            }}
            price={'$ 49'}
          />
          <Card
            className='cardEffect'
            image={{
              src: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S2_1200x1600-a700eac197c57b46cfc99a08b1d62589?h=854&resize=1&w=640',
            }}
            title='Dead cells'
            imageStyle={{ img: { br: '5px' } }}
            contentStyle={{
              p: '0',
              c: '#fff',
              fs: '14px',
              h2: { fs: '14px' },
            }}
            price={'$ 49'}
          />
        </Products>
      </Wrapper>
      <BottomMenu />
      <GoToTop />
    </>
  )
}
export default Store

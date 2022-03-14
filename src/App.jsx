import './styles/App.css';
import './styles/normalize.css';
import {Link} from 'react-router-dom';
//views
import {Home, Store, Checkout, SignIn, SignUp, Blog, ProductView} from './views'
//components
import {Header001} from './components'
import { useStateValue } from "./store/StateProvider";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Header001
          subBox={{ai: 'center', p: '10px 30px'}} 
          links={{ 'Sign In': '/sign-in', 'Sign Up': '/sign-up' }}
          link={{ c: '#fff', ':hover': {c: '#fff', cursor: 'pointer'} }}
          title={<Link to="/" className="styledLink-1"><h2>Odyssey</h2></Link>}
        />

        <Routes>
          
          <Route path="/store" element={<Store />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/product-view" element={<ProductView />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;

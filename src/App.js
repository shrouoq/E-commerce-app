import './css/input.css'
import {useEffect} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import NavBar from "./components/NavBar/NavBar.jsx";
import { Route, Routes } from 'react-router-dom';
import ShoppingPage from './pages/shoppingPage.jsx';
import Home from './pages/Home.jsx';
import BlogPage from './pages/Blog.jsx';
import ContactPage from './pages/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutPage from './pages/About.jsx';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/cart';
import PrivateRouter from './components/Auth/privateRouter'

import {GetData} from './slice/DataSlice.js';
import ProductsCategory from './pages/ProductsCategory.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Checkout from './pages/Checkout.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
  const Dispatch = useDispatch();

  let {data} = useSelector(state => state.DataSlice)


useEffect(() => {
  Dispatch(GetData());
  console.log(data);
  
},[Dispatch])

  return (

      <div className="min-h-screen bg-light">
        <div><Toaster /></div>
        <NavBar />

        <Routes>
          <Route path='/shoppingCart' element={<ShoppingPage />} />
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<AboutPage />}/>
          <Route path='shopping' element={<ShoppingPage />}/>
          <Route path='meat' element={<Home />}/>
          <Route path='bakeries' element={<Home />}/>
          <Route path='beverages' element={<Home />}/>
          <Route path='blog' element={<BlogPage />}/>
          <Route path='contact' element={<ContactPage />}/> 
          <Route path='signIn' element={<SignIn />}/> 
          <Route path='signUp' element={<SignUp />}/> 
          <Route path='cart' element={<PrivateRouter> <Cart /> </PrivateRouter>}/> 
          <Route path='products/:category' element={<ProductsCategory />} />
          <Route path='productDetails/:productId' element={<ProductDetails />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='/*' element={<NotFound />} />


        </Routes>

        <Footer />
      </div>

  );
}

export default App;

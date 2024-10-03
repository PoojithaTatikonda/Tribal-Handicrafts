import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
//import Feedback from './components/Feedback';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
//import Items from './pages/Items';
import Profile from './pages/Profile';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './styles.css';
import HomePrivate from './pages/HomePrivate';
import ItemsPage from './pages/ItemsPage';
import CartPage from './pages/CartPage';
//import backGroundImage from './assets/backgroundimage1.jpg'
import AdminSignIn from './pages/AdminSignIn';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminOrders from './pages/AdminOrders';
import AdminCustomers from './pages/AdminCustomers';
import './pages/AdminDashboard.css'
import AdminRoute from './components/AdminRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'customer',
    profileImage: null
  });

  const updateUser = (updatedUser) => {
    setUser(updatedUser);  // Update the user details
  };


  
  
  const handleLogout = (navigate) => {
    setIsAuthenticated(false); // Set authentication to false on logout
    navigate('/');
    
    
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <Header />
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout}/>
      <Routes>
      <Route path="/" element={isAuthenticated ? <HomePrivate /> : <Home />} />
      <Route path="/profile" element={<Profile user={user} updateUser={updateUser} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={<SignIn setIsAuthenticated={setIsAuthenticated} setUser={setUser} />}
        />
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route
            path="/items"
            element={<ItemsPage addToCart={addToCart} />} // Pass addToCart function to ItemsPage
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} />} // Pass cartItems to CartPage
          />
        
        
        <Route path="/logout" element={<Home />} />

         {/* Public Routes */}
         <Route path="/" element={<Home />} />
        <Route path="/adminsignin" element={<AdminSignIn />} />
        <Route path="/admindashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/adminproducts" element={<AdminRoute><AdminProducts /></AdminRoute>} />
        <Route path="/adminorders" element={<AdminRoute><AdminOrders /></AdminRoute>} />
        <Route path="/admincustomers" element={<AdminRoute><AdminCustomers /></AdminRoute>} />
        
      </Routes>
    </Router>
  );
  
};

export default App;

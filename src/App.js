import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Separate route for Login without common layout */}
        <Route path="/login" element={<Login />} />
				<Route path="register" element={<Register />} />

        {/* Wrap other components that use the common layout in a single Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="analytics" element={<Analytics />} />
          
          {/* Add more nested routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

// Define a Layout component that includes components common across most routes
const Layout = () => {
  return (
    <>
      <Navbar />
      {/* Outlet allows rendering of nested routes */}
			{/* <Analytics /> */}
      <Outlet />
			<Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
};

export default App;

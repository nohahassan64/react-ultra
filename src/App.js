import React from 'react';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import  Home from './Pages/HomePage/Home'
import { Navbar , Footer } from './components'
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import SingUp from './Pages/SingUp/SingUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
    <GlobalStyle />
    <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up"  component={SingUp} />
        <Route  path="/" component={Home} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

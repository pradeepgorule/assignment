import logo from './logo.svg';
import './App.css';
import ProductForm from './Component/ProductForm'
import FormProduct from './Component/Assingment/FormProduct'

import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>

      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#8ab6d6" }}>
          
          <Link to="/" className="navbar-brand" aria-current="page">Add Item</Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">

              <Link to="/assignment" className="nav-link active" aria-current="page">Task</Link>
            </li>
          </ul>

        </nav>
        <Switch>
          <Route exact path="/">

            <ProductForm />
          </Route>
          <Route path="/assignment">
            <FormProduct />
          </Route>
        </Switch>
      </Router>



    </>
  );
}

export default App;

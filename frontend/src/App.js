import React from 'react';
import './App.css';
import Login from './components/features/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color='Red' light expand='md' >
            <NavbarBrand>Help Center</NavbarBrand>
            {this.props.isLoading ? <Spinner color="primary" /> : <div style={{ 'width': '45px' }}></div>}
            <NavItem>
              <Link to='/login' component={Login}>Login</Link>
            </NavItem>
            <NavItem>
              <Link to='/register' component={Register}>Sign Up</Link>
            </NavItem>
          </Navbar>

          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
        </div>
      </Router>

    );
  }
}

const mapStateToProps = store => {
  return {
    isLoading: store.isLoading
  }
}

export default connect(mapStateToProps, null)(App);
export default App;

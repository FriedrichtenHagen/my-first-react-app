import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listOfProducts = products.map(product => 
      <li key={product.id}>
      {product.title}
    </li>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          <ul>{listOfProducts}</ul>
        
      </header>
    </div>
  );
}

export default App;

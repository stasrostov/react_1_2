import logo from './logo.svg';
import './App.css';
import ShopItemClass from './components/ShopItemClass/ShopItemClass'

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: '399.00',
    currency: '£'
  };
  return (
    
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemClass info={item} />
        </div>
      </div>
    
  )
}

export default App;

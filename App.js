import logo from './logo.svg';
import './App.css';
import {addToCart} from './Redux/actionk';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch();
  const product={
    name:"iphone",
    category:'mobile',
    price:'1000000',
    color:'red'
  }
  return (
    <div className="App">
      
      <button onClick={()=>dispatch(product)}>addToCart</button>
    </div>
  );
}

export default App;

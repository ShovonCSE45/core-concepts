import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Anoar','Salman','Manna','Riaz','Shakib','Bappi','shuvo','Rittik','Amin Khan','Shakil Khan'];
  const product=[
    {name:'Photoshop',prise:'$99.55'},
    {name:'Elastator',prise:'$90.45'},
    {name:'Ms Word',prise:'$9.95'}

  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, I am react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            product.map(product=><li>{product.name}</li>)
          }
        </ul>
        <Product product={product[0]}></Product>  
        <Product product={product[1]}></Product>
        <Product product={product[2]}></Product>

        <Partner name={nayoks[0]} nayika="Mousumi"></Partner>
        <Partner name={nayoks[1]} nayika="shabana"></Partner>
        <Partner name={nayoks[2]} nayika="cheka"></Partner>
        

      </header>
    </div>
  );
}
function Partner(prop){
  var stylePerson={
    border:'4px solid green',
    margin:'10px'
  }
  return (
    <div style={stylePerson}>
      <h2>Nayok {prop.name} </h2>
      <h4>Hero of {prop.nayika}</h4>
     
    </div>
  )
}
function Counter(){
  const[Count, setCount]=useState(10);
  const handleIncrease=()=>{
    setCount(Count+1);

  };
  const handleDecrease=()=>{
    setCount(Count-1);
  }
  return(
    <div>
      <h1>Count: {Count}</h1>
      <button onClick={handleIncrease }>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
    
  )
}
function Users(){
  const[users, setUsers]= useState();
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users{users.length}</h3>
       <ul>
        {
         users.map(user => <li>{user.name}</li>)
        }
       </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'4px solid gray',
    borderRadius:'10px',
    backgroundColor:'gray',
    height:'250px',
    width:'200px',
    float:'left',
    marginTop:'10px'

  }
  const {name,prise}=props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{prise} </h1>
      <button>Bye Now</button>

    </div>
  )
}

export default App;

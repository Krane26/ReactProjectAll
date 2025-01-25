import  React, {useState} from 'react'
import './App.css';
import Name from './Components/Name/Name';
import Price from './Components/Price/Price';
import Description from './Components/Description/Description';
import Image from './Components/Image/Image';
import Product from './Product';


function App() {
  const [firstName, setFirstName] = useState(''); 

  return (
    <div className="container">
      <h1 className="text-center mb-4">✨Products✨</h1>

      <div className="card">
        <Image />
        <div className="card-body">
          <Name />
          <Description />
          <Price />
          <Product />

        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
          />
        </div>
        <h3 className="mt-3">
          {firstName ? `Hello, ${firstName}!` : 'Hello, there!'}
        </h3>
        {firstName && (
          <img
            src="../src/assets/Images/waving.webp"
            alt="HOLLA!!"
            className="img-thumbnail mt-3"
          />
        )}
      </div>
    </div>
  );
}

export default App;



// import React from 'react';
// import './App.css';
// import Product from './Product';

// function App() {
//   return (
//     <div className="App">
//       <Product />
//     </div>
//   );
// }

// export default App;

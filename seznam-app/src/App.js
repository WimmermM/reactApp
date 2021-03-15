import './App.css';
import React from 'react';
import Card from './Components/Card';
import CardDetail from './Components/CardDetail'

function App() {
  return (
    <div className='App'>
          {CardDetail.map((detail) => {
                       <Card 
                       title={detail.title}
                       body={detail.body}
                       parametrs={detail.parametrs}
                       imageUrl={detail.imageUrl}
                       alt={detail.alt}
                       />
          })}

    </div>
  );
}

export default App;

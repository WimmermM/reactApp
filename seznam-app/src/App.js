import './App.css';
import React,{Fragment} from 'react';
import Card from './Components/Card';
import CardParams from './Components/CardParams'      
import CardModal from './Components/CardModal';

function App() {
  return (
          <div className='App'>
          {CardParams.map((detail) => {
                return(
                  <Fragment>
                  <Card 
                  title={detail.title}
                  body={detail.body}
                  parametrs={detail.parametrs}
                  imageUrl={detail.imageUrl}
                  alt={detail.alt}
                  />
                  </Fragment>
                )
          })}
          <Fragment>
                <CardModal>
                  teset
                </CardModal>
          </Fragment>
          </div>
  );


}

export default App;

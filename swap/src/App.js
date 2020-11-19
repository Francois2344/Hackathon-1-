import SwapItem from './components/SwapItem';

function App() {
  return (
    <div className="App">
        <h1>hello!</h1>
        <SwapItem name = 'Wine'
              image = 'https://www.vins-des-hospices-de-strasbourg.fr/data/uploads/2018/04/All%C3%A9e2.jpg'
              category= 'Drink'
              location ="sheerwood"
              quantity = '10'
              id ='1'/>
    </div>
  );
}

export default App;

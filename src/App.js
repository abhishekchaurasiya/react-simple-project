import { useState } from 'react';
import Tour from './components/Tours';
import data from './data';

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour)
  }

  if (tours.length == 0) {
    return (
      <div className='refresh'>
        <h4>No Tours Left</h4>
        <button className='white-btn' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="app">
      <Tour tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;

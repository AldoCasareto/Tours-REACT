import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const filterOutTour = tours.filter((tour) => tour.id !== id);
    setTours(filterOutTour);
  };

  const fetchTours = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((tours) => {
        setTours(tours);
        setLoading(false);
      })
      .catch((error) => console.log('error'));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div>
        <h3>No more tours</h3>
        <button onClick={() => fetchTours()}>Refresh</button>
      </div>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;

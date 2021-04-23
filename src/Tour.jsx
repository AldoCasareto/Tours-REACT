import React, { useState } from 'react';

const Tour = ({ name, info, price, image, tour, removeTour, id }) => {
  const [expand, setExpand] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt='' />
      <footer>
        <div className='tours-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {expand ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setExpand(!expand)}>
            {expand ? 'show less' : 'show more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not interested!
        </button>
      </footer>
    </article>
  );
};

export default Tour;

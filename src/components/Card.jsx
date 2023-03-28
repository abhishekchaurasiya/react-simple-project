import React, { useState } from 'react'

const Card = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const description = readMore ? info : `${info.substring(0, 200)}`
  const readmoreHandler = () => {
    setReadMore(!readMore)
  }

  return (
    <div>
      <img src={image} className="image" />
      <div className='tour-info'>
        <div className='tour-details'>
          <h4 className='tour-price'>₹ {price}</h4>
          <h4 className='tour-name'>{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className='read-more' onClick={readmoreHandler}>
            {readMore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>
      <button className='btn-red' onClick={() => removeTour(id)} >
        Not interested
      </button>
    </div>
  )
}

export default Card;

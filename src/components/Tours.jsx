import React from 'react'
import Card from './Card'

const Tours = ({ tours, removeTour }) => {
    return (
        <div className='container'>
            <div>
                <h1 className='title'>Plan With Abhi</h1>
            </div>
            <div className='cards'>
                {
                    tours.map((tour, id) => {
                        return <Card {...tour} key={id} removeTour={removeTour} />
                    })
                }
            </div>
        </div>
    )
}

export default Tours

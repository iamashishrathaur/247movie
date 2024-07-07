import React from 'react'

const CardDescription = () => {
  return (
    <div className="card-description with-transition">
      <div className="cart-content ">
        <div className="content-left -mb-1 p-5 px-6 flex flex-row justify-between items-center">
          <h5 className="iq-title">
            <a href="#" tabIndex="0" className='text-base font-semibold'>
              Another Danger
            </a>
          </h5>
          <span className="movie-time-text font-thin text-[10px] ">2H : 6Mins</span>
        </div>
      </div>
    </div>
  )
}

export default CardDescription

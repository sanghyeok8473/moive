import React from 'react'

export default function Detail({ title, overview }) {
    return (
      <div className='detail-container'>
          <div className='movie-detail'>
            <h4>{title}</h4>
            <span>{overview}</span>
          </div>
      </div>
    );
  }
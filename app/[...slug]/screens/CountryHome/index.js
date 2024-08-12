import React from 'react'

const CountryHome = ({data}) => {
    console.log('CountryHome', data)

  return (
    <div className='h-64'>{data.type}</div>
  )
}

export default CountryHome
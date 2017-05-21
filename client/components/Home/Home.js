// @flow
import React from 'react'
import SearchInput from './SearchInput'

const Home = props => {
  return (
    <div className='Home_div'>
      <h1 className='text-center Layout_page-title Home_page-title'>
        Bar Hop
      </h1>
      <SearchInput />
      <p><i className='fa fa-map-marker' /> Get current location</p>
    </div>
  )
}
export default Home

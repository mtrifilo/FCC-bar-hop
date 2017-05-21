// @flow
import React, { Component } from 'react'
import Input from '../Common/Input'

class SearchInput extends Component {
  render () {
    return (
      <div className='SearchInput-div'>
        <Input
          label="Search"
          type="text" 
          value=""
          name="Search"
          />
      </div>
    )
  }
}

export default SearchInput

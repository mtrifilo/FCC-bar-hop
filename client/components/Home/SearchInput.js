// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onInputChange } from '../../redux/modules/location'
import Input from '../Common/Input'

class SearchInput extends Component {
  render () {
    return (
      <div className='SearchInput-div'>
        <Input
          label='Search'
          type='text'
          value={this.props.value}
          name='Search'
          onChange={this.props.dispatchOnInputChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.location.searchInputValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchOnInputChange (value) {
      return dispatch(onInputChange(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)

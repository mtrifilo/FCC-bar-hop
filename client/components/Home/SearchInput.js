// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onInputChange } from '../../redux/modules/location'
import Input from '../Common/Input'

class SearchInput extends Component {
  props: {
    value: string,
    dispatchOnInputChange: Function
  };
  render () {
    return (
      <form className='SearchInput-form'>
        <Input
          placeholder='Address or Zipcode'
          type='text'
          value={this.props.value}
          name='Search'
          onChange={this.props.dispatchOnInputChange}
        />
      </form>
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

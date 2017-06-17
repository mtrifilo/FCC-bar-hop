// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onInputChange } from '../../redux/modules/location'
import { getBars } from '../../redux/modules/bars'
import Input from '../Common/Input'

class SearchInput extends Component {
  props: {
    value: string,
    dispatchOnInputChange: Function,
    dispatchGetBars: Function
  };

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatchGetBars(this.props.value)
  };

  render () {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='form-inline SearchInput-form'
      >
        <Input
          placeholder='Address or Zipcode'
          type='text'
          value={this.props.value}
          name='Search'
          onChange={this.props.dispatchOnInputChange}
        />
        <button type='submit' className='btn btn-primary SearchInput-button'>
          Find Bars
        </button>
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
    },
    dispatchGetBars (location) {
      return dispatch(getBars(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)

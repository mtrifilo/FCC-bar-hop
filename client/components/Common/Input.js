import React from 'react'
import classNames from 'classnames'
import { string, func } from 'prop-types'

const Input = ({
  label,
  placeholder,
  type,
  value,
  name,
  onChange,
  onBlur,
  validationError
}) => {
  return (
    <div
      className={classNames('form-group', { 'has-danger': validationError })}
    >
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className='form-control'
      />
      {validationError &&
        <div className='form-control-feedback'>
          {validationError}
        </div>}
    </div>
  )
}

Input.propTypes = {
  label: string,
  placeholder: string,
  type: string,
  value: string,
  name: string,
  onChange: func.isRequired,
  onBlur: func,
  validationError: string
}

export default Input

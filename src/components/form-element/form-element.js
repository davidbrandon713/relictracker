import React from 'react'
import './form-element.css'

const FormElement = ({
  type,
  name,
  title,
  error,
  errorMsg,
  tabIndex,
  register,
}) => {
  return (
    <div className="formElementContainer">
      <p>{error && errorMsg}</p>
      <input
        type={type}
        name={name}
        placeholder=""
        {...register(name)}
        tabIndex={tabIndex}
      />
      <h4>{title}</h4>
    </div>
  )
}

export default FormElement

import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Input({label, type, required = true}) {

  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div 
      className={`
        input-wrapper
        duration-300
        hover:-translate-y-2
        inline-block
        relative
        w-full
      `}
    > 
      <label 
        htmlFor={label}
        className={`
          absolute
          top-1/2
          left-4
          -translate-y-1/2
          duration-300
          ${(isFocused || value != '') && '-translate-y-7'}
          ${(isFocused || value != '') && 'scale-75'}
        `}
      >
        {label}
      </label>

      <input 
        type={type}
        name={label}
        id={label}
        required={required}
        className={`
          bg-grey
          rounded-xl
          px-8
          pt-5
          pb-2
          duration-300
          focus:outline-none
          focus:bg-orange-light
          text-lg
          w-full
          my-2
        `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool
}
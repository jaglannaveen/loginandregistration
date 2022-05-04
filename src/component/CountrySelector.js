import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import { MenuItem, Select } from '@mui/material'

function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
// console.log(options);
  const changeHandler = value => {
    setValue(value.target.value)
  }

  return <Select className="input2" defaultValue={value} onChange={changeHandler} >
      {options.map((option,index)=> {return <MenuItem key={index} value={option.value}>{option.label}</MenuItem>})}
  </Select>
}

export default CountrySelector
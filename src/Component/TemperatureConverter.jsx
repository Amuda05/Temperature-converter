import React, { useState } from 'react'

const TemperatureConverter = () => {
    const [number, setNumber] = useState('')
    const [result, setResult] = useState(0)

const [to, setto] = useState("")
const [from, setFrom] = useState("")

const handleSubmit = () => {
  console.log(to=="celcius" && from=="fahraheit" )
      if(from=="fahraheit" && to=="celcius"){
        celciusToFaraheint(number)
      }

      if(from=="celcius" && to=="fahraheit"){
        faraheitToCelcius(number)
      }

        if(from=="Kelvin" && to=="celcius"){
          kelvinTOCelcius(number)
        }

           if(from=="celcius" && to=="Kelvin"){
            celciusToKelvin(number)
        }

        if(from=="Kelvin" && to=="fahraheit" ){
          KelvinTofaraheit(number)
        }

        if(from=="fahraheit" && to=="Kelvin" ){
          faraheitToKelvin(number)
        }
    }


    const faraheitToCelcius = (value) => {
      const converted = (value - 32) *5/9;
        setResult(converted || '')
    } 

    const celciusToFaraheint = (value) => {
      const converted = (value * 9) /5 - 32;
      setResult(converted || '')
    } 

    const kelvinTOCelcius = (value) => {
      const converted = (value + 273.13);
      setResult(converted || '')
    } 

    const celciusToKelvin = (value) => {
      const converted = (value -273.15)
      setResult(converted || '') 
    }

    const  KelvinTofaraheit = (value) => {
      const converted = (value -459.67)
      setResult(converted || '') 
    }
    const faraheitToKelvin = (value) => {
      const converted = (value +273.15)
      setResult(converted || '') 
    }
    
  return (
    <>
    <div className="wrapper">
      <h1>Temperature Converter</h1>
      <div className="wrap">
      <label>
        Degrees:
        <br />
        <input type="number"  placeholder='enter temperature'  value={number} onChange={(e) => setNumber (e.target.value)}/>
      </label>

      <label>
      Converting From:
      <br />
      <select className='input' onChange={(e) => setFrom (e.target.value)}>
        <option value="" className='color'>... Converting From</option>
        <option value="fahraheit" className='color'>fahraheit</option>
        <option value="celcius" className='color'>celsius</option>
        <option value="Kelvin" className='color'>Kelvin</option>
        </select>
      </label>

      <label>
      Converting to:
      <br />
      <select className='input' onChange={(e) => setto (e.target.value)}>
        <option value="" className='color'>... Converting to</option>
        <option value="fahraheit" className='color'>fahraheit</option>
        <option value="celcius" className='color'>celsius</option>
        <option value="Kelvin" className='color'>Kelvin</option>
        </select>
      </label>

      <button className='con' onClick={() => handleSubmit()}>Convert</button>
      </div>
      <p>Result {result}</p>
    </div>
    </>
  )
}

export default TemperatureConverter
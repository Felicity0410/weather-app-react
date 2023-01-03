import './SearchCity.css'
import { useState } from 'react'
import { fetchWeatherByCity } from '../../../services/weatherService'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchCity = (props) => {
    const [city, setCity] = useState('')
    
   
    const onCityInputChange = (event) => {
        const value = event.target.value
        setCity(value)
    }

    const onSearchButtonClick = async (event) => {
        event.preventDefault()
        // 在react环境中使用表单，都需要对onSubmit这个event.preventDefault，否则会刷新整个页面，使得所有的state都初始化，就是重新mounting
        const weatherData = await fetchWeatherByCity(city)
        props.search(weatherData)
    }

  

    return (
         <Form onSubmit={onSearchButtonClick}>
            <Form.Group className="mb-3" >
                <Form.Control 
                type='text' 
                placeholder='Search city...' 
                value={city} 
                onChange={onCityInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Show air quality data" className='air-quality'/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    )
}

{/* <div>
<input type='text' placeholder='Search city...' value={city} onChange={onCityInputChange}/>
<button onClick={onSearchButtonClick}>Search</button>
回车也会执行onSearch是因为是表单，表单当中button设置type='submit' 按回车会自动执行
</div>  */}

export default SearchCity
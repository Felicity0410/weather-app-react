
import './Weather.css'
import SearchCity from './SearchCity/SearchCity'
import { useState } from 'react'
import WeatherResult from './WeatherResult/WeatherResult'
import Card from 'react-bootstrap/Card';


const Weather = () => {
    
    const [weather, setWeather] = useState(undefined)

    const onSearch = (weatherData) => {
        setWeather(weatherData)
    }
    return (    
        <Card className="text-center weather-container">
            <Card.Header>
                <h1>Weather App 🌤️</h1>
            </Card.Header>
            <Card.Body>
                <SearchCity search={onSearch}/>                    
                {weather && <WeatherResult weather={weather}/>}
                {/* 做渲染的话最好用三元运算符或者&& */}
            </Card.Body>
            <Card.Footer className="text-muted app-creator">By Felicity Liu</Card.Footer>
        </Card>    
    )
}

export default Weather
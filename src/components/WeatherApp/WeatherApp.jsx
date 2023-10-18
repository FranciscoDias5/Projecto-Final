import { useState } from 'react';
import './WeatherApp.css';
import { clear, cloud, drizzle, humidity, rain, wind, snow } from '../../assets';
import search_icon from '../../assets/search.png';
import Hero from '../Hero';

const WeatherApp = () => {
	let api_key = 'fd824fd67750c2e6ef11bf63509eb6c0';
	const [wicon, setWicon] = useState(cloud);

	const search = async () => {
		const element = document.getElementsByClassName('cityInput');
		if (element[0].value === '') {
			return 0;
		}
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
		let response = await fetch(url);
		let data = await response.json();

		const humidity = document.getElementsByClassName('humidity-percent');
		const wind = document.getElementsByClassName('wind-rate');
		const temperature = document.getElementsByClassName('weather-temp');
		const location = document.getElementsByClassName('weather-location');

		humidity[0].innerHTML = data.main.humidity + '%';
		wind[0].innerHTML = Math.floor(data.wind.speed) + 'km/h';
		temperature[0].innerHTML = Math.floor(data.main.temp) + 'ºC';
		location[0].innerHTML = data.name;

		if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
			setWicon(clear);
		} else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
			setWicon(cloud);
		} else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
			setWicon(drizzle);
		} else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
			setWicon(drizzle);
		} else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
			setWicon(rain);
		} else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
			setWicon(rain);
		} else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
			setWicon(snow);
		} else {
			setWicon(clear);
		}
	};

	return (
		<div>
			<Hero />
			<div className='container'>
				<div className='top-bar'>
					<input type='text' className='cityInput' placeholder='Search' />
					<div
						className='search-icon'
						onClick={() => {
							search();
						}}
					>
						<img src={search_icon} alt='' />
					</div>
				</div>
				<div className='weather-image'>
					<img src={wicon} alt='' />
				</div>
				<div className='weather-temp'>24ºC</div>
				<div className='weather-location'>Lisboa</div>
				<div className='data-container'>
					<div className='element'>
						<img src={humidity} alt='' className='icon' />
						<div className='data'>
							<div className='humidity-percent'>64%</div>
							<div className='text'>Humidade</div>
						</div>
					</div>
					<div className='element'>
						<img src={wind} alt='' className='icon' />
						<div className='data'>
							<div className='wind-rate'>18 km/h</div>
							<div className='text'>Vel.Vento</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherApp;
const axios = require('axios');


const getClima = async(lat, lon) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b20f7d5bc077e68d67316244fdc560ef&units=metric`);
	return resp.data.main.temp;


}


module.exports = {getClima};
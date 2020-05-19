const axios = require('axios');


const getLugarLatLng = async(direccion) => {

	const encodedURL = encodeURI(direccion);
	//console.log(encodedURL);

	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
	  headers: {'x-rapidapi-key': 'b61ababbe6msh1cca5f80e1d5e05p1c5d78jsn9a012003bc27'}
	});

	const resp = await instance.get();

	if (resp.data.Results.length === 0) {
		throw new Error(`No hay resultados para ${direccion}`)
	}
	const data = resp.data.Results[0];
	const location = data.name;
	const lat = data.lat;
	const lng = data.lon;


	return {
		direccion,
		lat,
		lng
	}

}


module.exports = {
	getLugarLatLng
}
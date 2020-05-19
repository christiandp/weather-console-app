
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direction: {
		alias: 'd',
		desc: 'Dirección de Ciudad',
		demand: true
	}
}).argv;


//lugar.getLugarLatLng(argv.direction).then(resp => console.log(resp));
/*clima.getClima(35, 139)
	.then(resp => console.log(resp))
	.catch(err => console.log(err));*/

const getInfo = async(direccion) => {

	try {
		const coords = await lugar.getLugarLatLng(direccion);
		const temp = await clima.getClima(coords.lat, coords.lng);
		return `El clima de ${coords.direccion} es: ${temp}Cº`;
	} catch {
		return `No se pudo determinar el clima de ${direccion}`
	}

}

getInfo(argv.direction).then(resp => console.log(resp)).catch(err => console.log(err));
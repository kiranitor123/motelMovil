"use strict"

//Requerimos la dependencia jwt-simple para crear el token
var token = require("jwt-simple");

//Moment: Esta dependencia nos permite hacer registro de fecha de creación del token y la fecha de expiración de ese mismo token
var moment = require("moment");

//Con esta clave secreta podemos descodificar el token
var claveSecreta = "nuevaclave";
/*=============================================
MÉTODO DEL TOKEN
=============================================*/

exports.crearToken = function(selectet){
	console.log(selectet);

	//Datos que vamos a codificar
        
	var LoadToken = {
		//Se usa para guardar el id del objeto
		hash:selectet,
		//unix() formato timestamp actual
		now: moment().unix(),
		exp: moment().add(1, "days").unix()
	//	exp: moment().add(1, "minutes").unix()

	}

	// Devolvemos el token codificado
	return token.encode(LoadToken, claveSecreta)

}
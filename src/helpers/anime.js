//declaro la url de mi crud del dominio para que luego solo sea cambiar la url y no todo el sistema
//url entorno pruebas
//const url='http://192.168.1.33/'
//url entorno produccion
//const url='https://devcamilo.000webhostapp.com/'  
//aca creamos las funciones y ya se pueden exportan en los compoentes
const url='https://devcamilo.000webhostapp.com/'              
module.exports.getAnime= function(limit){
   
   return fetch('https://kitsu.io/api/edge/anime?limit='+limit).then((res)=>res.json())
}

//consumo de mi este lista los usaurios
module.exports.consumoApi= function(){
   
   return fetch(url+'apicrudci4/crudapi').then((res) => res.json());
}

//eliminar usuario
module.exports.eliminaruserApi= function(id){
   
   return fetch(url+'apicrudci4/crudapi/eliminar/'+id).then((res) => res.json());
}
//agregar un usuario
module.exports.agregarUser = function(nombre) {
   
   const options = {
     method: 'POST',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: new URLSearchParams({ nombre })
   };
 
   return fetch(url+'apicrudci4/crudapi/crear', options)
     .then(response => response.json())
     .then(data => {
       console.log(data);
       return data; // Devuelve los datos de respuesta
     })
     .catch(error => console.error(error));
 }

 //actualizar usuario
 module.exports.actualizarUser = function(nombre, id) {
   
   const options = {
     method: 'POST',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: new URLSearchParams({ id, nombre })
   };
 
   return fetch(url+'apicrudci4/crudapi/actualizar', options)
     .then(response => response.json())
     .then(data => {
       console.log(data);
       return data; // Devuelve los datos de respuesta
     })
     .catch(error => console.error(error));
 }


<template>
   <div id="app">
   
    <!-- esto es el vue router se pone en la vista principal y ya todos con el vou roter link, empiezan a mostrarsen aca-->
    <router-view></router-view>

   </div>


</template>

<script>
//creamos una carpeta helpers y alli metimos un archivo que consume la api lo exportamos y aca lo llamamos , importamos el nombre de la funcion que queramos que allamos creado en ese archivo
//como estamos llamanod esto en la principal en mount() quea automaticamente disponible para todos los componentes y solo se ejecuta 1 vez cuando se abrio esta pagina principal entonces consume
import {getAnime} from './helpers/anime'
//importamos mi api de prueba
import {consumoApi} from './helpers/anime'


export default {
  name: 'App',
  //este de mounted apunta a helpers/anime.js ahi se consume la api,y en listcomponent se trae esa ruta y alla obtenemos la data
  //se carga aca para que sea solo llamado 1 ves por que es un api y este para el resto de componentes solo al consumirse 1  sola vez
  //este se usa para llamar las funciones en la vista a penas monte el componete con el ciclo de vida hooks
  async mounted() {
    //y ya con esto se ejecuta la funcion le pasamos que nos traiga 15 registros pero no le funciona ni andres ni ami esta en herpers/anime.js y aca llamamos la funcion
    this.animes=await getAnime(15)
    
    //console.log(this.animes)
  //consumimos la segunda api que hicimos esta se carga inicialemte en todos los componestes al recargar la pagina
  this.nombres=await consumoApi()
  console.log(this.nombres)

  // Ejecutar la consulta cada 5 segundos y monta los datos en todos los componentes es una elegancia si estoy en la vista de 
  //lista de usuarios alli se visualiza los nuevos que voy insertando desde postman asincronamente
   setInterval(async () => {
    this.nombres = await consumoApi();
  }, 5000);

  
  },
  components: {
    
  },
  data(){
    return{
      animes:[],
      nombres:[]
    }
  },
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
    <div class="hello">
      <h1> detalle</h1>
      <router-link to="/">Inicio</router-link>

      <!--aca accedemos a los parametros que nos pasan por las rutas para este component detail en rutas pusiomos un parametro en la ruta, lleva esto mas el parametro que estamos pasando $route.params.-->
      
      <router-link :to="{name:'lista'}">Lista</router-link>
      <br>
      <h2>titulo {{anime.attributes.titles.en}}</h2>
      <br>
     <p>id:  {{ anime.id }}</p><br>
     <p>Descripcion: {{ anime.attributes.description }}</p><br>
     <!--para imagen no hay que poner las llaves {{  }}-->
     <img :src="anime.attributes.posterImage.medium " alt="">

     <br>
     
     
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetailComponent',
    props: {
      
    },
    data(){
      return{
         //rute es propio de las rutas n se declara en ningun lado solo se llama creamos una variable que contendra lo que viene por url osea el parametro que tiene las rutas para llegar a esta pagina, en este camo viene un objeto ya tabajamos y accedemos a las propiedades arriba al igual que params que es el parametro que viene por url  
         //lo parseamos a json por que cuando mandamos el parametro era un objeto parseado a string
            anime:JSON.parse(this.$route.params.animeobjeto)
            
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
<template>
  <div class="hello">
    <h1> Hola soy hello word {{ msg }}</h1>
    <!-- para ruta con nombre se llama :to y un array name y el nombre de la ruta Y LOS PARAMETROS SE PASAN CON PARAMs Y EUN OBJETO CON los datos de parametro-->
    
    <router-link :to="{name:'lista'}">Lista</router-link>
   

    

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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

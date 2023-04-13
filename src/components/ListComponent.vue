<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        
       <h1>Listados</h1>
     
      <ul >
        <!--esto viene desde la vista princiapl app.vue que consume api a penas carga la pagina y ya pasa la propiedad a todos los componentes, entonces ya se accede al rut y animes y como data es la propiedad del json que tiene los objetos del api consumida por eso se ponde .data this.$root.animes-->
        <li v-for="(a,key) in this.$root.animes.data" :key="a">
            <!-- el parametro que paso es la "a" que es un objeto completo para que viaje por la url lo parseamos a json-->
            <router-link  :to="{name:'detalles',params:{animeobjeto:JSON.stringify(a)}}">{{ a['attributes']['titles']['en'] }}</router-link>
            <!-- mandamos no el id sino la posicion del array-->
            ---<router-link :to="{name:'editarLista',params:{posicionEditar:key}}">Editar</router-link>
            <!--para eliminar no nececitamos rutas sino un boton y dar una funcion con clik y ya-->
      <button class="btn btn-danger" @click="eliminar(a.id)">Eliminar</button>
           
            
        </li>
      </ul>
     
  
      <router-link :to="{name:'crearLista'}">Crear nuevos</router-link>
      
      
      
    </div>
</template>

<script>


export default {
  name: 'ListComponent',
//este mount es solo para montar la info a penas cargue el componente pero como ya tenemos acceso a $root que es la data que se pasa desde la vista mstramos
//loading mientras carga la data
mounted() {
  console.log(this.$root.animes)
},
 
  props: {
    
  },data(){
    return{
        //este loading es para el ciclo de vida del hooh mientras esta creando consultando ws y luego cargando la data visaul le ponemos un loading mientra termina el ciclo de vida
       loading:true  
        
    }
  }, 

  methods:{
    eliminar:function(idEliminar){
        //aca ejecutarios el api de eliminar con esto le splice le decimos que nos elimine un elemento, pero esto ya es algo visual
       // this.$root.animes.splice(idEliminar,1)
        console.log('eliminando '+idEliminar)

    }
  },
}
</script>
<style>
ul{
    list-style-type: none;
    padding: 0;
}
li{
    margin: 10px 0;
}
li a{
    color: rgb(16, 128, 91);
    font-weight: bold;
    text-decoration: none;
}
</style>
<template>
<div>
  <router-link to="/">Inicio App</router-link>   
  <div class="container">
      <div class="row">
        <div class="col-6">
                <h1>usuarios</h1>
          
                <ul >
                  <!--esto viene desde la vista princiapl app.vue que consume api a penas carga la pagina y ya pasa la propiedad a todos los componentes, entonces ya se accede al rut y animes y como data es la propiedad del json que tiene los objetos del api consumida por eso se ponde .data this.$root.animes-->
                  <li v-for="(a,key) in this.$root.nombres.users" :key="a">

                      <p>usuario: {{ a.nombre }} id {{ a.id}}</p>
                      
                   <button class="btn btn-danger" @click="eliminar(a.id)">Eliminar key {{key}}</button>
                 <router-link  :to="{name:'editarUsers',params:{objetoEditar:JSON.stringify(a)}}"><button class="btn btn-info">{{ a.nombre }}</button></router-link>   
                      
                  </li>
                </ul>

        </div>
        <div class="col-6">
                    <div class="card">
                      <div class="card-body">
                              
                                  <form class="form-control" @submit.prevent="addUser">
                              
                                    
                                    <input type="text"  v-model="form.nombre" class="form-control" placeholder="Digita el nombre">
                                
                                  
                                  <button class="btn btn-success">Agreag</button>
                                </form>

                              


                
                        </div>
                      </div>

        </div>
        
      </div>
</div>
        
      
     
      

      
      
      
    </div>
</template>

<script>
//importo el modulo de las apis que utilizare en este componente

import {eliminaruserApi} from '@/helpers/anime'
import {agregarUser} from '@/helpers/anime'

export default {
  name: 'ListarComponent',
//este mount es solo para montar la info a penas cargue el componente pero como ya tenemos acceso a $root que es la data que se pasa desde la vista mstramos
//loading mientras carga la data
mounted() {


  console.log(this.$root.nombres)

  
},
 
  props: {
    
  },data(){
    return{
        //este loading es para el ciclo de vida del hooh mientras esta creando consultando ws y luego cargando la data visaul le ponemos un loading mientra termina el ciclo de vida
       loading:true ,
       respuestaServer:[] ,
       respuestaSrverAdd:[],
       //para el campo de formulario agregar
       form:{
        nombre:''
       } ,
        
    }
  }, 

  methods:{
      eliminar:async function(idEliminar){
          //aca ejecutarios el api de eliminar con esto le splice le decimos que nos elimine un elemento, pero esto ya es algo visual
        // this.$root.animes.splice(idEliminar,1)
          console.log('eliminando '+idEliminar)
          //consumimos la api de eliminar
          this.respuestaServer= await eliminaruserApi(idEliminar)
        //esto es lo que respondo del ws hasta respuesat server es un objeto luego es la propiedad que yo mando del ws
          console.log('respuesta server: '+this.respuestaServer.exitoso)
          //esto actualiza lavista local sin recargar lo elimina pero visualmente y si recargamos seria igual ya no existiria
          // Actualizar lista local de usuarios
          const index = this.$root.nombres.users.findIndex(user => user.id === idEliminar)
          if (index !== -1) {
              this.$root.nombres.users.splice(index, 1)
          }
          

      },
      addUser:async function(){
          //consumimos el api para agregar

          
          this.respuestaSrverAdd= await agregarUser  (this.form.nombre)
          console.log('respuesta servidor '+this.respuestaSrverAdd.exitoso)

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
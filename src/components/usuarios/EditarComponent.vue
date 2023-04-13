<template>
    <div>
        
        <div class="container card">
            <div class="card-body">
                <form class="form-control" @submit.prevent="updateUser">
                              
                                    
                        <input type="text" v-model="idEditar" >
                        <input type="text" v-model="form.nombre" >
                    
                    
                     <button class="btn btn-success">Actualizar</button>
                </form>
    
            </div>
        </div>
                              
                                  

                              

        <router-link to="/">Inicio App</router-link>  
              
        
      



    </div>
</template>

<script>
//importamos la api para actualziar
import {actualizarUser} from '@/helpers/anime'



export default {
  name: 'EditarComponent',
  mounted(){
    //esto es para cuando den click en editar y se abra esta vista ya el formularios alga con los datos montados visibles por defecto
    if (this.$root.nombres) {
    this.idEditar = this.datos.id
    this.form.nombre = this.datos.nombre;
   
    
    console.log(this.$root.nombres);
  } else {
    console.log('this.$root.nombres is not defined yet');
  }

   

  },
 
  props: {
    
  },data(){
    return{
       idEditar:0,
       form:{
        nombre:''
       } ,
       //parceamos a json el string que venia por url
       datos:JSON.parse(this.$route.params.objetoEditar),
       respuestaWs:[]
       
    }
  },
  methods:{
    //aca seria lo de agregar pero como no tenemos un db lo hacemos asi le $data[1]=32 como asignando manualmente EN ESTA PARTE SE CONSUMIRIA EL WS QUE HACE LA ACTUALIZACION DE DATOS
     updateUser: async function(){
            
            
            console.log('nombre editar '+this.form.nombre+'id actualizar '+this.idEditar)
            //ejectuamos la api de actualizar
            this.respuestaWs= await actualizarUser(this.form.nombre, this.idEditar)
            console.log('respuesta del server al actualizar '+this.respuestaWs.exitoso )

        },
  },
}
</script>
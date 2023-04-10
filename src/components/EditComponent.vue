<template>
    <div>
   <p>el id recibido es {{ $route.params.posicionEditar }}</p><br>
   <form @submit.prevent="funcionEditar">
    <input type="text" v-model="form.title"><br>
    <textarea v-model="form.description"></textarea>
    <button type="submit">Editar</button>
   </form>
    </div>
</template>

<script>


export default {
  name: 'EditComponent',
//inicializamos la data 
  mounted(){
    //super importante validar esto que la propiedad ya exista para que la monte, por que el principal la tiene pero este componentes hijos tarda minisegundos en tenerla si no esta esta validacion sale error por que no existe aun la propiedad aca, y ya con esto carga super rapido pero se valida que monte a penas detecte el dato de app aca osea la respuesta del ws
    if (this.$root.animes) {
    this.position = this.$route.params.posicionEditar;
    this.form.title = this.$root.animes.data[this.position].attributes.titles.en;
    this.form.description=this.$root.animes.data[this.position].attributes.description;
    
    console.log(this.$root.animes);
  } else {
    console.log('this.$root.animes is not defined yet');
  }

   

  },
 
  props: {
    
  },data(){
    return{
       position:0,
       form:{
        title:'',
        description:''
       } 
       
    }
  },
  methods:{
    //aca seria lo de agregar pero como no tenemos un db lo hacemos asi le $data[1]=32 como asignando manualmente EN ESTA PARTE SE CONSUMIRIA EL WS QUE HACE LA ACTUALIZACION DE DATOS
        funcionEditar:function(){
            this.$root.animes.data[this.position].attributes.titles.en=this.form.title;
            this.$root.animes.data[this.position].attributes.description=this.form.description;
        },
  },
}
</script>

<template>
  <div>
    <p>Formulario de creacion</p><br>
   <form @submit.prevent="funcionAgregar">
    <input type="text" v-model="form.title"><br>
    <textarea v-model="form.description"></textarea>
    <button type="submit">Crear</button>
   </form>
  </div>
</template>


<script>


export default {
  name: 'CreateComponent',
  props: {
    
  },data(){
    return{
      
       form:{
        title:'',
        description:''
       }
       
    }
  },
  methods:{
    //aca se consumiria un api obteniendo los datos del formulario y creariamos  this.form.title
        funcionAgregar:function(){
        
         console.log('presionaste en crear')
            
        },
  },
}
</script>



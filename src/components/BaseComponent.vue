<template>
    <div>
   <p>Bienvenidos componente base dashboard de ruta hija</p>
   <!---como este es el componente base de rutas hijas simplemente debo poner aca el llamador principal de las rutas que es lo que esta en app que muestra rutas que se pone en las vistas principlaes osea en el componente app y en las rutas hijas en el componente principal-->
   <route-view></route-view>
   
    </div>
</template>
<script>
export default {
  name: 'BaseComponent',
  props: {
    msg: String
  }
}
</script>

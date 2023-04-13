import { createApp } from 'vue'
import App from './App.vue'
//esto va fijo es para importar las funciones que se usan en vue esas 2
import {createRouter,createWebHashHistory} from 'vue-router'
// el @ independientemente de donde me encuentre siempre va a puntar  a src
import HelloWorld from '@/components/HelloWorld'
import DetailComponent from '@/components/DetailComponent'
import ListComponent from '@/components/ListComponent'
import EditComponent from '@/components/EditComponent'
import CreateComponent from '@/components/CreateComponent'
import BaseComponent from '@/components/BaseComponent'
//esta es la parte para las rutas del crud
import ListarComponent from '@/components/usuarios/ListarComponent'

import EditarComponent from '@/components/usuarios/EditarComponent'






//componentes



//definir objeto rutas esto es la configuracion
const routes=[
    //aca creamos una ruta hija pero la hija es solo el primer json que es el ejemplo de ruta hija lleva path que es como la agrupacion lleva un componente base y un array de las ruta que tendra
    {
        path:'/dashboard',
        //se debe crear un componente base a todas les vba aparecer  lo que contenga el componente base mas lo que tenga el component que se pase en el path, ejemplo si un agente solo puede ver x cosa con eso tiene
        component: BaseComponent,
        children:[
            {
                path:'otrahija',component:HelloWorld,
               
            },{
                path:'otrarutamas',component:HelloWorld,
            }
            

        ]
   
    },
    //estas ya soln rutas normales no hijas
    {
        path:'/',component:HelloWorld,
        
    },
    {
        //ruta con nombre y con parametro : y el nombre del parametro
        path:'/detail/:animeobjeto',component:DetailComponent,name:'detalles'
    },
    {
        path:'/lista',component:ListComponent,name:'lista'
    },{
        path:'/lista/editar/:posicionEditar',component:EditComponent,name:'editarLista'
        
    },{
        path:'/lista/crear',component:CreateComponent,name:'crearLista'
        
    },
    //inicio proceso de users crud con api real
    {
        path:'/lista/users',component:ListarComponent,name:'listaUsers'
        
    },
    //edicion de users
    {
        path:'/lista/users/:objetoEditar',component:EditarComponent,name:'editarUsers'
    }
]

//crear objeto ruta de vue route esto seria la ruta real de vue router

const router=createRouter({
    history: createWebHashHistory(),
    routes
})

//intancia de vue
const app=createApp(App)
app.use(router)

app.mount('#app')

import SignupForm from "./components/SignupForm.vue";
import {createRouter,createWebHistory} from 'vue-router'
import HelloComp from "./components/HelloComp.vue";
import SigninForm from "./components/SigninForm.vue";
import UpdateRestro from './components/UpdateRestro.vue'
import AddData from './components/AddData.vue'

const routes =[
    {
        name:'HelloComp',
        component:HelloComp,
        path:'/'
    },
    {
        name:'SignupForm',
        component:SignupForm,
        path:'/signup'
    },
    {
        name:'SigninForm',
        component:SigninForm,
        path:'/signin'
    },
 
    {
        name:'UpdateRestro',
        component:UpdateRestro,
        path:'/updaterestro/:id'
    },
    {
        name:'AddData',
        component:AddData,
        path:'/addata'
    }
]
const router = createRouter({
    history:createWebHistory(),routes
})

export default router
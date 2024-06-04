<template>
    <div class="main">

        <h1>add product </h1>
        
        <div class="main">
            <input placeholder="enter resturant name" class="in" v-model="name" type="text"/>
            <input placeholder="enter resturant adress"  class="in" v-model="Adress" type="text"/>
            <input placeholder="enter resturant contact no"  class="in" v-model="contact" type="text"/>
            <button class="b1" v-on:click="sign()"> add resturant</button>
            <!-- <h4><router-link to="/Signin">add resturant</router-link></h4> -->
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'AddData',

data(){
    return{
        name:' ',
        Adress:" ",
        contact:'',
    }
},
methods:{
 async sign(){
    let result = await axios.post("http://localhost:3000/resturant",{
        name :this.name,
        Adress:this.Adress,
        contact:this.contact
    })   
     console.log(result);

    this.$router.push({name:'HelloComp'})

}
},


}
</script>
<style scoped>
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.in{
    height:20px;
    border:2px solid black ;
    width: 300px;
    margin:5px;
    padding: 10px;
}
.b1{
background-color: brown;
padding: 10px;
color: white;
width:300px;
border:2px solid black ;

}

</style>
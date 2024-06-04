 <template>
    <div class="main">

        <h1>signup</h1>
        
        <div class="main">
            <input placeholder="enter your name" class="in" v-model="name" type="text"/>
            <input placeholder="enter your email"  class="in" v-model="email" type="text"/>
            <input placeholder="enter your password"  class="in" v-model="password" type="text"/>
            <button class="b1" v-on:click="sign()"> signup</button>
            <h4><router-link to="/Signin">signin</router-link></h4>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'SignupForm',

data(){
    return{
        name:' ',
        email:" ",
        password:'',
    }
},
methods:{
 async sign(){
    let result = await axios.post("http://localhost:3000/users",{
        name :this.name,
        email:this.email,
        password:this.password
    })   
     console.log(result)
    if(result.status==201){
        alert('signup sucessful')
    }
    localStorage.setItem('user-info', JSON.stringify(result.data));

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
<template>
<div class="header">
   <a>home</a>
   <a v-on:click="adding()">add resturant</a>
   <a v-on:click="updating()">update restrorant</a>
   <a>logout</a>
    
</div>
</template>
<script>
export default{
    name:'HeaderPage',
    methods:{
        adding(){
            this.$router.push({name:'addata'})

        },
        updating(){
            this.$router.push({name:'UpdateRestro'})

        }
    }
}
</script>
<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  background-color: black;
  color: white;
  padding:14px
}

.header a {
  margin-right: 20px;
  
  color: white;
  text-decoration: none;
}

.header a:hover {
  text-decoration: underline;
  text-decoration: none;
}
</style>
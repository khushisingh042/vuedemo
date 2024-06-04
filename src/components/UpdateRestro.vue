<template>
    <div class="main">
        <h1>Add Product</h1>
        <div class="main">
            <input placeholder="Enter restaurant name" class="in" v-model="restaurant.name" type="text"/>
            <input placeholder="Enter restaurant address" class="in" v-model="restaurant.Adress" type="text"/>
            <input placeholder="Enter restaurant contact no" class="in" v-model="restaurant.contact" type="text"/>
            <button class="b1" v-on:click="update()">Update</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddData',

    data() {
        return {
            restaurant: {
                name: '',
                Adress: '',
                contact: ''
            }
        }
    },
    methods: {
        async update() {
            try {
                let result = await axios.put("http://localhost:3000/resturant/" + this.$route.params.id, {
                    name: this.restaurant.name,
                    Adress: this.restaurant.Adress,
                    contact: this.restaurant.contact
                })
                if (result.status === 200) {
                    this.$router.push({ name: 'HelloComp' })
                }
            } catch (error) {
                console.error("Error updating restaurant:", error);
            }
        }
    },
    async mounted() {
        try {
            console.log("Fetching restaurant data for ID:", this.$route.params.id);
            let result = await axios.get("http://localhost:3000/resturant/" + this.$route.params.id)
            console.log("Result data:", result.data);
            this.restaurant = result.data;
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.in {
    height: 20px;
    border: 2px solid black;
    width: 300px;
    margin: 5px;
    padding: 10px;
}
.b1 {
    background-color: brown;
    padding: 10px;
    color: white;
    width: 300px;
    border: 2px solid black;
}
</style>

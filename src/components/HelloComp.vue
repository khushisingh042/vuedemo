<template>
    <div>
        <HeaderPage></HeaderPage>

        <h1>Hello {{ names }}, I'm at the home page</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in resturant" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.Adress }}</td>
                    <td>{{ item.contact }}</td>
                    <td><router-link :to="'/updaterestro/'+item.id">Update</router-link></td>
                    <td @click="deleteitem(item.id)">Delete</td>
                </tr>
            </tbody>
        </table>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'

export default {
    name: 'HomeComp',
    components: {
        HeaderPage
    },
    data() {
        return {
            names: '',
            resturant: []
        }
    },
    async mounted() {
        let userss = localStorage.getItem("user-info");
        if (!userss) {
            this.$router.push({ name: 'SignupForm' })
        } else {
            this.names = JSON.parse(userss).name;
            try {
                let response = await axios.get("http://localhost:3000/resturant");
                this.resturant = response.data;
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        }
    },
    methods: {
        async deleteitem(id) {
            try {
                let result = await axios.delete(`http://localhost:3000/resturant/${id}`);
                this.resturant = this.resturant.filter(item => item.id !== id);
                console.log(result)
            } catch (error) {
                if (error.response && error.response.status == 404) {
                    console.error("Item not found:", error);
                } else {
                    console.error("Error deleting item:", error);
                }
            }
        },
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'SignupForm' })
        },
    }
}
</script>

<style scoped>
.table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.table th {
    background-color: #f2f2f2;
}
</style>

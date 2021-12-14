const app = Vue.createApp({

    // Starting data to display on page
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },

    methods: {

        // Gets random user and displays data
        async getUser() {

            // API call to get random user
            const res = await fetch('https://randomuser.me/api')

            // Storing results from api call in JSON object
            const { results } = await res.json()

            // Parsing data into variables
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }

})

// Telling vue where to mount data
app.mount('#app')
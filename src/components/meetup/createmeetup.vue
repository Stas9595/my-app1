<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h2 class="secondary--text">
                    Create a new Meetup
                </h2>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="title"
                                    label="Title"
                                    id="title"
                                    v-model="title"
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="location"
                                    label="Location"
                                    id="location"
                                    v-model="location"
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="imageUrl"
                                    label="Image URL"
                                    id="image-url"
                                    v-model="imageUrl"
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="150px">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="description"
                                    label="Description"
                                    id="description"
                                    v-model="description"
                                    multi-line
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h3>Choose a Data & Time</h3>
                        </v-flex>
                    </v-layout>
                    <v-container row>
                    <v-layout class="mb-2">
                        <v-flex xs12 sm6 offset-sm3>
                            <v-date-picker v-model="date"></v-date-picker>
                            <p>{{ date }}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker v-model="time"></v-time-picker>
                            <p>{{ time }}</p>
                        </v-flex>
                    </v-layout>
                    </v-container>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn class="primary"
                                   :disabled="!formIsValid"
                                   type="submit">Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                location: '',
                imageUrl: '',
                description: '',
                time: new Date(),
                date: new Date(),
            }
        },
        computed: {
            formIsValid() {
                return this.title !== ''
                    && this.location !== ''
                    && this.imageUrl !== ''
                    && this.description !== ''
            },
           /* submittableDateTime () {
                const date = new Date(this.date)
                console.log(date)
                return date
            }*/
        },
        methods: {
            onCreateMeetup () {
                if (!this.formIsValid) {
                    return
                }
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    date: new Date()
                }
                this.$store.dispatch("createMeetup", meetupData)
                this.$router.push('/meetups')
            }
        }
    }
</script>
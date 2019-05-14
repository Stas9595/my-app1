<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h4 class="success--text">{{ meetup.title }}</h4>
                    </v-card-title>
                    <v-card-media>
                        <v-card-media
                                :src="meetup.imageUrl"
                                height="400px"
                        >
                        </v-card-media>
                        <v-card-text>
                            <div class="info--text">{{ meetup.date }} - Where it takes place</div>
                            <div>Amy normally hated Monday mornings, but this year was different. Kamal was in her art class and she liked Kamal. She was waiting outside the classroom when her friend Tara arrived.</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="info">Register</v-btn>
                        </v-card-actions>
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            meetup () {
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>
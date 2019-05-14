import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: {
        loadedMeetups: [
            { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg',
                id: 'dwawdwadw',
                title: 'Meetup in Paris',
                date: '2019-07-17'
            },
            { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/EmpireStateNewYokCity.jpg',
                id: 'dwawdwadwa',
                title: 'Meetup in New York',
                date: '2019-07-17'
            },
            { imageUrl: 'https://cs9.pikabu.ru/post_img/big/2017/01/12/12/1484253114139520843.png',
                id: "fwefewfew",
                title: 'Ну шо, народ, погнали',
                date: '2019-07-17'
            },
        ],
        user: {
            id: "dwadwadw",
            registeredMeetups: ['dwdwadadwa'],
        }

    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup ({commit}, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: "fefeffe"
            }
            commit("createMeetup", meetup)
}
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0,5);
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id == meetupId
                })
            }
         }
    },
})
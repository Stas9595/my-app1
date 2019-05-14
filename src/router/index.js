import Vue from 'vue'
import Router from 'vue-router'
import homepage from "@/components/homepage";
import createmeetup from "@/components/meetup/createmeetup";
import meetups from "@/components/meetup/meetups";
import profile from "@/components/user/profile";
import signin from "@/components/user/signin";
import signup from "@/components/user/signup"
import meetup from "@/components/meetup/meetup"

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: homepage
        },
        {
            path: "/meetups",
            name: "Meetups",
            component: meetups
        },
        {
            path: "/meetup/new",
            name: "Createmeetup",
            component: createmeetup
        },
        {
            path: "/meetups/:id",
            name: "Meetup",
            props: true,
            component: meetup
        },
        {
            path: "/profile",
            name: "Profile",
            component: profile
        },
        {
            path: "/signup",
            name: "Signup",
            component: signup
        },
        {
            path: "/signin",
            name: "Signin",
            component: signin
        }
    ],
    mode: "history"
})
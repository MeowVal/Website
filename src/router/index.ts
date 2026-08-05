import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/projects', component: Projects },
        { path: '/contact', component: Contact },
        { path: '/PrivacyPolicy', component: PrivacyPolicy },
    ]
})
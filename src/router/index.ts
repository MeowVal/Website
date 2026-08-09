import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Overview from '../views/worksheets/Overview.vue'
import WorksheetLayout from '../layouts/WorksheetsLayout.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/projects', component: Projects },
        { path: '/overview', component: Overview },
        { path: '/contact', component: Contact },
        { path: '/PrivacyPolicy', component: PrivacyPolicy },
        {
            path: '/worksheets/webGL/w:unit:part',
            component: WorksheetLayout,
            children: [
                {
                    path: '',
                    props: route => ({
                        unit: route.params.unit,
                        part: route.params.part
                    }),
                    component: () => import('../views/worksheets/webGL/DynamicWorksheet.vue')
                }
            ]
        },
        {
            path: '/worksheets/webGPU/w:unit:part',
            component: WorksheetLayout,
            children: [
                {
                    path: '',
                    props: route => ({
                        unit: route.params.unit,
                        part: route.params.part
                    }),
                    component: () => import('../views/worksheets/webGPU/DynamicWorksheet.vue')
                }
            ]
        },
    ]
})
import { createRouter, createWebHistory } from 'vue-router';
import PrincipalComp from '../components/comps/PrincipalComp.vue';

const routes = [
    { path: '/', name: "Home", props: true, component: PrincipalComp },
    // {
    //     path: '/:notFound',
    //     name: 'NotFound',
    //     component: NotFoundView,
    //     meta: { title: "MyCinema" }
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title;
    if (pageTitle) {
        document.title = pageTitle;
    } else {
        document.title = 'Who Wants to Be a Millionaire';
    }
    next();
});

export default router;

import IndexPage from '@/pages/IndexPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  /*
   * This Page will be rendered if a user entered a non-existing route
   * */
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage,
  },
];

export default routes;

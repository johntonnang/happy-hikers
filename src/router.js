import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import FavouriteView from './views/FavouriteView.vue'
import ProfileView from './views/ProfileView.vue'
import CartView from './views/CartView.vue'
import ProductCatalog from './views/ProductCatalogView.vue'
import ProductView from './views/ProductView.vue'
import SandboxView from './views/SandboxView.vue'
import CheckouteView from './views/CheckoutView.vue'
import ConfirmationView from './views/ConfirmationView.vue'
import CommonQuestionView from './views/CommonQuestionsView.vue'
import AboutView from './views/AboutView.vue'
import BlogView from './views/BlogView.vue'
import StoreView from './views/StoreView.vue'
import TutorialsView from './views/TutorialsView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: FavouriteView,
      path: '/Favourite'
    },
    {
      component: ProfileView,
      path: '/Profile'
    },
    {
      component: CartView,
      path: '/Cart'
    },
    {
      component: ProductCatalog,
      path: '/ProductCatalog'
    },
    {
      component: ProductCatalog,
      path: '/ProductCatalog/:category'
    },
    {
      component: ProductView,
      path: '/ProductView/:id'
    },
    {
      component: SandboxView,
      path: '/SandboxView'
    },
    {
      component: CheckouteView,
      path: '/CheckoutView'
    },
    {
      component: ConfirmationView,
      path: '/ConfirmationView'
    },
    {
      component: CommonQuestionView,
      path: '/CommonQuestionsView'
    },
    {
      component: AboutView,
      path: '/AboutView'
    },
    {
      component: BlogView,
      path: '/BlogView'
    },
    {
      component: StoreView,
      path: '/StoreView'
    },
    {
      component: TutorialsView,
      path: '/TutorialsView'
    }
  ]
})

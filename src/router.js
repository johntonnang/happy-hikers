import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import FavouriteView from './views/FavouriteView.vue'
import ProfileView from './views/ProfileView.vue'
import CartView from './views/CartView.vue'
import ProductCatalog from './views/ProductCatalogView.vue'
import ProductView from './views/ProductView.vue'

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
      component: ProductView,
      path: '/ProductView/:id'
    }
  ]
})

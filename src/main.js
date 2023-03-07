import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import store from './store'

library.add(faStar)
library.add(faX)
library.add(faUser)
library.add(faHeart)
library.add(faShoppingCart)
library.add(faMagnifyingGlass)
library.add(faCircleArrowRight)
createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

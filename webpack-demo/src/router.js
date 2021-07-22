import {createRouter} from "vue-router"
import {createWebHashHistory} from "vue-router"
 
// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
 
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
]
 
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import video_statistics from "../components/video_statistics";
import MyCharts from "../components/MyCharts";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    router:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/video',
    component:video_statistics
  },
  {
    path:'/MyCharts',
    component:MyCharts
  },
]

const router = new VueRouter({
  routes
})

export default router

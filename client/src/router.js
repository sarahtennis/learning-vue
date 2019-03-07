import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'

Vue.use(Router)

export default new Router({
  // MODE - HISTORY
  // enables history mode
  // uses browser's history.pushstate API to change URL w/o reloading
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
      // ALIASING ------
      // Note: same component for multiple URL endpoints
      // ex. alias: '/about'
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    }
    // DEFAULT ROUTE TO DISPLAY 404
    // {
    //   path: '*',
    //   component: NotFoundComponent
    // }

    // NAMED ROUTING W/ REDIRECT ------
    // {
    //   path: '/about',
    //   redirect: { name: 'about' }
    // },

    // DYNAMIC ROUTING ------
    // {
    //   path: '/user/:username',
    //   name: 'user',
    //   component: User,
    //   props: true
    // }
  ]
})

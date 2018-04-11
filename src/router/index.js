import Vue from 'vue'
import Router from 'vue-router'
import Recommand from 'components/recommand/recommand'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommand',
      components: Recommand
    },
    {
      path: '/search',
      components: Search
    },
    {
      path: '/singer',
      components: Singer
    },
    {
      path: '/rank',
      components: Rank
    }
  ]
})

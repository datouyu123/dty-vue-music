import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
// import Search from 'components/search/search'
// import Singer from 'components/singer/singer'
// import Rank from 'components/rank/rank'
// import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('components/rank/rank').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})

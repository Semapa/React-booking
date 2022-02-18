import Login from './pages/login'
import Registration from './pages/registration'
import AllRooms from './pages/allRooms'
import Dashboard from './pages/dashboard'
import NotFound from './pages/notFound'
import LoginLayout from './layouts/login'
import MainLayout from './layouts/main'

const routes = [
  // {
  //   exact: true,
  //   path: '/',
  //   component: AllRooms,
  //   layout: MainLayout
  // },

  {
    exact: false,
    path: '/login',
    component: Login,
    layout: LoginLayout
  },
  {
    exact: false,
    path: '/registration',
    component: Registration,
    layout: LoginLayout
  },
  {
    exact: false,
    path: '/rooms/:roomId?',
    component: AllRooms,
    layout: MainLayout
  },
  {
    exact: false,
    path: '/dashboard',
    component: Dashboard,
    layout: LoginLayout
  },
  {
    exact: false,
    path: '/404',
    component: NotFound,
    layout: MainLayout
  }
]

export default routes

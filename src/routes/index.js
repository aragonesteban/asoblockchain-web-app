import CommunityMember from '../pages/CommunityMember'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />
  },
  {
    path: '/community-member',
    name: 'Community Member',
    component: <CommunityMember />
  },
  {
    path: '/contact',
    name: 'Contact',
    component: <Contact />
  }
]

export { routes } 
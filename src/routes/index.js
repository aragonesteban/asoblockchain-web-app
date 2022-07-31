import CommunityMember from '../pages/CommunityMember'
import Home from '../pages/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home/>
  },
  {
    path: '/community-member',
    name: 'Community Member',
    component: <CommunityMember/>
  }
]

export { routes } 
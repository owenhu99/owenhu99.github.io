import music from '../components/Music.vue'
import photos from '../components/Photos.vue'
import about from '../components/About.vue'

export default [
  { path: '/', component: about },
  { path: '/music', component: music },
  { path: '/photos', component: photos },
  { path: '/about', component: about }
]
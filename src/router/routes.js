import projects from "../components/Projects.vue"
import music from '../components/Music.vue'
import vinyl from '../components/Vinyl.vue'
import photos from '../components/Photos.vue'
import about from '../components/About.vue'

export default [
  { path: '/', component: about },
  { path: '/projects', component: projects },
  { path: '/music', component: music },
  { path: '/vinyl', component: vinyl },
  { path: '/photos', component: photos },
  { path: '/about', component: about }
]
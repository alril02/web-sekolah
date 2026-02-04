import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faBed,
	faBell,
	faBook,
	faBookOpen,
	faBus,
	faChalkboardUser,
	faClipboardCheck,
	faEnvelope,
	faFileLines,
	faGaugeHigh,
	faSchool,
	faUser,
	faUserGraduate,
	faUserShield,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import {
	faFacebookF,
	faGoogle,
	faInstagram,
	faLinkedinIn,
	faXTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import './global.css'

const app = createApp(App)

library.add(
	faBed,
	faBell,
	faBook,
	faBookOpen,
	faBus,
	faChalkboardUser,
	faClipboardCheck,
	faEnvelope,
	faFileLines,
	faGaugeHigh,
	faSchool,
	faUser,
	faUserGraduate,
	faUserShield,
	faUsers,
	faFacebookF,
	faGoogle,
	faInstagram,
	faLinkedinIn,
	faXTwitter,
	faYoutube
)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

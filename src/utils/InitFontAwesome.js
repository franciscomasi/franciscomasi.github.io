import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faLongArrowAltUp,
  faLink,
  faBars,
  faTimes,
  faDownload  
} from '@fortawesome/free-solid-svg-icons'

function initFontAwesome() {
  library.add(fab,
    faLinkedin,
    faGithub,
    faLongArrowAltUp,
    faLink,
    faBars,
    faTimes,
    faDownload
  )
}

export default initFontAwesome

import { library } from "@fortawesome/fontawesome-svg-core"
import {fab, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

function initFontAwesome() {
  library.add(fab, faLinkedin, faGithub, faLongArrowAltUp)
}

export default initFontAwesome

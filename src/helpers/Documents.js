// Certificates
import ReactJsReduxEs6 from 'assets/documents/certificates/reactjs_redux_es6.jpg'
import Bootstrap4Fundamentos from 'assets/documents/certificates/bootstrap4_fundamentos.pdf'
import IntroduccionDocker from 'assets/documents/certificates/introduccion_a_docker.pdf'
import MarketingDigital from 'assets/documents/certificates/marketing_digital.pdf'
import Enai2015 from 'assets/documents/certificates/enai_2015.pdf'
import SeminarioNegociacion from 'assets/documents/certificates/seminario_negociacion.png'
import SeminarioLiderazgo from 'assets/documents/certificates/seminario_liderazgo.png'
import CalidadSena from 'assets/documents/certificates/calidad_sena.pdf'
import PlanificacionIso9001 from 'assets/documents/certificates/planificacion_iso9001.jpg'
import SerieIso9000 from 'assets/documents/certificates/serie_iso9000.jpg'

// Curriculum Vitae
import CV from 'assets/documents/cv.pdf'

export function certificate(certificate) {
  switch (certificate) {
  case 'reactjs_redux_es6':
    return ReactJsReduxEs6
  case 'bootstrap4_fundamentos':
    return Bootstrap4Fundamentos
  case 'introduccion_a_docker':
    return IntroduccionDocker
  case 'marketing_digital':
    return MarketingDigital
  case 'enai_2015':
    return Enai2015
  case 'seminario_negociacion':
    return SeminarioNegociacion
  case 'seminario_liderazgo':
    return SeminarioLiderazgo
  case 'calidad_sena':
    return CalidadSena
  case 'planificacion_iso9001':
    return PlanificacionIso9001
  case 'serie_iso9000':
    return SerieIso9000
  default:
    return ReactJsReduxEs6
  }
}

export function cv() {
  return CV
}

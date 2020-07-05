import React from 'react'
import Udemy from 'assets/images/trainings/udemy.jpg'
import Iab from 'assets/images/trainings/iab.jpg'
import ItQuality from 'assets/images/trainings/it_quality.jpg'
import Iaia from 'assets/images/trainings/iaia.jpg'
import Cessi from 'assets/images/trainings/cessi.jpg'
import Iram from 'assets/images/trainings/iram.jpg'
import EducacionIt from 'assets/images/trainings/educacion_it.jpg'
import EducacionBiz from 'assets/images/trainings/educacion_biz.jpg'
import Sena from 'assets/images/trainings/sena.jpg'
import Sei from 'assets/images/trainings/sei.jpg'

export function TrainingIcon({ icon, className }) {
  switch (icon) {
  case 'udemy':
    return <img src={Udemy} alt='Logo de empresa Udemy' className={className} />
  case 'iab':
    return <img src={Iab} alt='Logo de empresa IAB Spain' className={className} />
  case 'it_quality':
    return <img src={ItQuality} alt='Logo de empresa IT Quality' className={className} />
  case 'iaia':
    return <img src={Iaia} alt='Logo de empresa IAIA' className={className} />
  case 'cessi':
    return <img src={Cessi} alt='Logo de empresa CESSI' className={className} />
  case 'iram':
    return <img src={Iram} alt='Logo de empresa IRAM' className={className} />
  case 'educacion_it':
    return <img src={EducacionIt} alt='Logo de empresa Educacion IT' className={className} />
  case 'educacion_biz':
    return <img src={EducacionBiz} alt='Logo de empresa Educacion BIZ' className={className} />
  case 'sena':
    return <img src={Sena} alt='Logo de empresa Sena Sofia Plus' className={className} />
  case 'sei':
    return <img src={Sei} alt='Logo de empresa Software Engineering Institute' className={className} />
  default:
    return <img src={Udemy} alt='Logo de empresa Udemy' className={className} />
  }
}

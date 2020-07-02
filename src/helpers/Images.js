import React from 'react'
import DiarioDeViaje from 'assets/images/projects/diario_de_viaje.jpg'
import MpOrganizador from 'assets/images/projects/mp_organizador.jpg'
import OiramIt from 'assets/images/projects/oiramit.jpg'
import SegurosBenprof from 'assets/images/projects/seguros_benprof.jpg'
import WebBenprof from 'assets/images/projects/web_benprof.jpg'

export function projectImage(name) {
  switch (name) {
  case 'Diario de viaje':
    return <img src={DiarioDeViaje} alt='Proyecto Diario De Viaje' />
  case 'MP Organizador':
    return <img src={MpOrganizador} alt='Logo de empresa IAB Spain' />
  case 'OiramIT':
    return <img src={OiramIt} alt='Logo de empresa IT Quality' />
  case 'Seguros Benprof':
    return <img src={SegurosBenprof} alt='Logo de empresa SegurosBenprof' />
  case 'Web Benprof':
    return <img src={WebBenprof} alt='Logo de empresa WebBenprof' />
  default:
    return <img src={WebBenprof} alt='Logo de empresa WebBenprof' />
  }
}

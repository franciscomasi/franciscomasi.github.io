import React from 'react'

// Projects
import DiarioDeViaje from 'assets/images/projects/diario_de_viaje.jpg'
import MpOrganizador from 'assets/images/projects/mp_organizador.jpg'
import OiramIt from 'assets/images/projects/oiramit.jpg'
import SegurosBenprof from 'assets/images/projects/seguros_benprof.jpg'
import WebBenprof from 'assets/images/projects/web_benprof.jpg'

// Interests
import Gym from 'assets/images/interests/gym.jpg'
import Music from 'assets/images/interests/music_2.jpg'
import Travel from 'assets/images/interests/travel.jpg'
import Technology from 'assets/images/interests/technology.jpg'
import Nutrition from 'assets/images/interests/nutrition.jpg'
import Sport from 'assets/images/interests/sport.jpg'
import DefaultInterest from 'assets/images/interests/example.jpg'

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

export function interestImage(name) {
  switch (name) {
  case 'gym':
    return <img src={Gym} alt='Fotografía de una persona entrenando curl de biceps' />
  case 'music':
    return <img src={Music} alt='Fotografía de una persona tocando la guitarra' />
  case 'travel':
    return <img src={Travel} alt='Fotografia de un paisaje de Villa la Angostura' />
  case 'technology':
    return <img src={Technology} alt='Fotografia de una aplicación web' />
  case 'nutrition':
    return <img src={Nutrition} alt='Fotografia de un plato con alimentos' />
  case 'sport':
    return <img src={Sport} alt='Fotografia de una paleta de padel' />
  default:
    return <img src={DefaultInterest} alt='Fotografia monocromatica' />
  }
}
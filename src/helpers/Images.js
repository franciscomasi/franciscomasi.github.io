import React from 'react'

// Projects
import DiarioDeViaje from 'assets/images/projects/diario_de_viaje.webp'
import MpOrganizador from 'assets/images/projects/mp_organizador.webp'
import OiramIt from 'assets/images/projects/oiramit.webp'
import SegurosBenprof from 'assets/images/projects/seguros_benprof.webp'
import WebBenprof from 'assets/images/projects/web_benprof.webp'
import FitnessApp from 'assets/images/projects/fitness_app.webp'

// Interests
import Gym from 'assets/images/interests/gym.webp'
import Music from 'assets/images/interests/music.webp'
import Travel from 'assets/images/interests/travel.webp'
import Technology from 'assets/images/interests/technology.webp'
import Nutrition from 'assets/images/interests/nutrition.webp'
import Sport from 'assets/images/interests/sport.webp'
import DefaultInterest from 'assets/images/interests/example.webp'

export function projectImage(name) {
  switch (name) {
  case 'Diario de viaje':
    return <img src={DiarioDeViaje} alt='Proyecto Web Diario De Viaje' />
  case 'MP Organizador':
    return <img src={MpOrganizador} alt='Proyecto Backoffice MP Organizador de seguros' />
  case 'OiramIT':
    return <img src={OiramIt} alt='Proyecto Web institucional OiramIT' />
  case 'Seguros Benprof':
    return <img src={SegurosBenprof} alt='Proyecto Seguros Benprof' />
  case 'Web Benprof':
    return <img src={WebBenprof} alt='Proyecto Web institucional Benprof' />
  case 'FitnessApp PWA':
    return <img src={FitnessApp} alt='Proyecto PWA Fitness App' />
  default:
    return <img src={WebBenprof} alt='Proyecto Seguros Benprof' />
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
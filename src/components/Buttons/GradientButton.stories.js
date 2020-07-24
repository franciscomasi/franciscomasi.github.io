import React from 'react'
import { action } from '@storybook/addon-actions'
import GradientButton from './GradientButton'

export default {
  title: 'Gradient Button',
  component: GradientButton
}

const exampleChild = <span>Lorem Ipsum</span>

export const defaultGradientButton = () => {
  return <GradientButton
    handleOnClick={action('clicked')}
  >
    {exampleChild}
  </GradientButton>
}

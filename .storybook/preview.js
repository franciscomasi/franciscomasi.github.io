import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyles from 'components/Shared/AppStyle'

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  )
}

addDecorator(withGlobalStyles)

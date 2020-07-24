import React from 'react'
import Text from './Text'

export default {
  title: 'Text',
  components: Text
}

const exampleText = 'Lorem ipsum'

export const defaultText = () => <Text>{exampleText}</Text>

export const featuredText = () => <Text featured>{exampleText}</Text>

export const coloredText = () => <Text color='blue'>{exampleText}</Text>

export const sizedText = () => <Text size={40}>{exampleText}</Text>

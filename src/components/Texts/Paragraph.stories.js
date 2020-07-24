import React from 'react'
import Paragraph from './Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph
}

const exampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
  Quisque aliquet mi nec fringilla iaculis. Sed interdum condimentum nunc, vitae \
  tempus diam eleifend a. Etiam ac nisi ligula. Duis tempus erat enim, a consequat \
  justo vehicula sed. Donec pulvinar sagittis sapien ut laoreet. Fusce faucibus lacus \
  orci, ac hendrerit libero hendrerit in. Etiam lacinia scelerisque posuere. \
  Aenean pharetra lorem nec odio suscipit lobortis.'

export const defaultParagraph = () => <Paragraph>{exampleText}</Paragraph>

export const coloredParagraph = () => <Paragraph color='blue'>{exampleText}</Paragraph>

export const sizedParagraph = () => <Paragraph size={40}>{exampleText}</Paragraph>

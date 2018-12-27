import React, { Fragment } from 'react'
import FullWidthImage from '../Atoms/FullWidthImage'

export interface ImageLoaderProps {
  previewImageURL: string
  imageURL: string
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

export interface LoadingState {
  isLoadCompleted: boolean
}

// Exceptional case where a Molecule has a state, becase this state is pretty self-contained and simple.
// Usually state should exist in Organisms or Template, not Atoms or Organisms to keep granular components simple.
class ImageLoader extends React.Component<ImageLoaderProps, LoadingState> {
  constructor(props: ImageLoaderProps) {
    super(props)
    this.state = { isLoadCompleted: false }
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad() {
    this.setState({ isLoadCompleted: true })
  }

  renderImageOrSpinner() {
    if (this.state.isLoadCompleted)
      return (
        // Important to accept the className prop, to inject CSS margin from outside.
        // Only margin, no other CSS property from outside.
        <FullWidthImage
          className={this.props.className}
          src={this.props.imageURL}
        />
      )
    else
      return (
        // Important to accept the className prop, to inject CSS margin from outside.
        // Only margin, no other CSS property from outside.
        <FullWidthImage
          className={this.props.className}
          src={this.props.previewImageURL}
        />
      )
  }

  render() {
    // className prop is passed down to the inner FullWidthImage component
    return (
      <Fragment>
        <img hidden src={this.props.imageURL} onLoad={this.onLoad} />
        {this.renderImageOrSpinner()}
      </Fragment>
    )
  }
}

export default ImageLoader

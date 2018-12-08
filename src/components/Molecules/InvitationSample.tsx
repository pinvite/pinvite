import React from 'react'
import Paper from  '@material-ui/core/Paper'
import SampleImage from '../Atoms/SampleImage'
import SampleImageCaption from '../Atoms/SampleImageCaption'

const InvitationSample = () =>
  <Paper elevation={0}>
    <SampleImageCaption text='目を引く画像とともにツイート！' />
    <SampleImage />
  </Paper>

export default InvitationSample
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Caption from '../Atoms/Caption'
import SampleImage from '../Atoms/SampleImage'

const InvitationSample = () =>
  <Paper elevation={0}>
    <Caption text='目を引く画像とともにツイート！' />
    <SampleImage />
  </Paper>

export default InvitationSample

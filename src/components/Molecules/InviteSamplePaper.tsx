import React from 'react'
import Typography  from '@material-ui/core/Typography'
import Paper from  '@material-ui/core/Paper'
import SampleImage from '../Atoms/SampleImage'

const InviteSamplePaper = () =>
  <Paper elevation={0}>
    <Typography variant='h6'>目を引く画像とともにツイート！</Typography>
    <SampleImage />
  </Paper>

export default InviteSamplePaper
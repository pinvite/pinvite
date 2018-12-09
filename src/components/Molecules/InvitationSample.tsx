import Paper from '@material-ui/core/Paper'
import React from 'react'
import Caption from '../Atoms/Caption'
import SampleImage from '../Atoms/SampleImage'

export interface InvitationSampleProps {
  captionText: string
  className?: string
}

const InvitationSample: React.SFC<InvitationSampleProps> = (props) =>
  <Paper className={props.className} elevation={0}>
    <Caption text={props.captionText} />
    <SampleImage />
  </Paper>

export default InvitationSample

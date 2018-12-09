import Paper from '@material-ui/core/Paper'
import React from 'react'
import Caption from '../Atoms/Caption'
import Concern from './Concern'

export interface ConcerListProps {
  captionText: string,
  concernText1: string,
  concernText2: string,
  concernText3: string
}

const ConcernList: React.SFC<ConcerListProps> = (props) =>
  <Paper elevation={0}>
    <Caption text={props.captionText} />
    <Concern text={props.concernText1} />
    <Concern text={props.concernText2} />
    <Concern text={props.concernText3} />
  </Paper>

export default ConcernList

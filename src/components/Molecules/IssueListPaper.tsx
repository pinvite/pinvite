import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const IssueList = () =>
  <Paper elevation={0}>
    <Icon>sentiment_very_dissatisfied</Icon>
    <Typography>新技術を導入したいが社内にエキスパートがいない</Typography>
    <Icon>sentiment_very_dissatisfied</Icon>
    <Typography>技術書や動画を見たがイマイチ理解が進まない</Typography>
    <Icon>sentiment_very_dissatisfied</Icon>
    <Typography>導入したい技術のエキスパートと繋がりを持っていない</Typography>
  </Paper>

export default IssueList

import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import {Header2} from '../components/style-typography'
import InviteCard from '../components/Molecules/InviteCard'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {AuthStatusConsumer} from '../context/AuthStatusContext'
import {RequestConsumer} from '../context/RequestContext'
import TwitterIcon from '../components/Atoms/TwitterIcon'
import Redirect from '../utils/Redirect'

const TextFieldsWrapper = styled.div``

class InvitePage extends React.Component {
  state = {
    previewChecked: false,
    title: '',
    description: '',
    amount: '',
    time: '',
    currency: 'JPY'
  };

  componentDidMount(){
    console.log(this.props)
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeTextField = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <Layout>

        <AuthStatusConsumer>
          {({result}) => (
            <>
              {!result && <Redirect to={'/'} />}
            </>
          )}
        </AuthStatusConsumer>
        <Header2 center>募集内容</Header2>
        <AuthStatusConsumer>
          {({result}) => (
            <>
              {result && <TwitterIcon src={result.user.photoURL} />}
            </>
          )}
        </AuthStatusConsumer>
        <Switch
          checked={this.state.previewChecked}
          onChange={this.handleChange('previewChecked')}
          value="checked"
          color="primary"
        />
        {
          this.state.previewChecked
          ? <InviteCard
            title={this.state.title}
            description={this.state.description}
            amount={this.state.amount}
            time={this.state.time} />
          : <TextFieldsWrapper>
            <TextField
              fullWidth
              id="title"
              label="勉強会のタイトル"
              value={this.state.title}
              onChange={this.handleChangeTextField('title')}
              margin="normal"
            />
            <TextField
              fullWidth
              id="description"
              label="勉強会の内容"
              value={this.state.description}
              onChange={this.handleChangeTextField('description')}
              multiline
              margin="normal"
            />
            <TextField
              fullWidth
              id="amount"
              label="勉強会のギャラ"
              value={this.state.amount}
              onChange={this.handleChangeTextField('amount')}
              InputProps={{
                startAdornment: (
                  <InputAdornment variant="filled" position="start">
                    ¥
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              id="time"
              label="目安時間"
              value={this.state.time}
              onChange={this.handleChangeTextField('time')}
              multiline
              margin="normal"
            />
          </TextFieldsWrapper> 
        }

        <RequestConsumer>
          {({postRequest, requestData}) => (
            <Button
              variant="contained"
              color="primary"
              onClick={() => postRequest(
                'https://demo9911358.mockable.io/create-invite',
                this.state,
                'inviteRequest'
              )}>
              募集する 
            </Button>
          )}
        </RequestConsumer>
      </Layout>
    );
  }
}

export default InvitePage

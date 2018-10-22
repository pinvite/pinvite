import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import {Header2} from '../components/style-typography'
import InviteCard from '../components/Molecules/InviteCard'
// import Input from '../components/Atoms/Input'
// import {ButtonMain} from '../components/Atoms/Button'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const TextFieldsWrapper = styled.div``

class InvitePage extends React.Component {
  state = {
    checked: false,
    title: '',
    description: '',
    amount: '',
    time: '',
    currency: 'JPY',
  };

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
        <Header2>募集内容</Header2>
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange('checked')}
          value="checked"
          color="primary"
        />
        {
          this.state.checked
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
        
        <Button variant="contained" color="primary">
          募集する
        </Button>
      </Layout>
    );
  }
}

export default InvitePage

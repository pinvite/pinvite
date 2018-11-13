import React from 'react'
import Layout from '../components/layout'
import {Header2, Caption} from '../components/style-typography'
import InviteCard from '../components/Molecules/InviteCard'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import TwitterIcon from '../components/Atoms/TwitterIcon'
import {LayoutColumn2, LayoutBottom, TextFieldsWrapper} from './styled'
import {withAuthStatusContext, withRequestContext} from '../context/HOC'
import { navigateTo } from 'gatsby-link';

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
    if (!this.props.context.result) navigateTo('/')
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
    const context = this.props.context
    const requestContext = this.props.requestContext
    return (
      <Layout>
        <Header2 center>募集内容</Header2>
        <LayoutColumn2>
          {context.result && <TwitterIcon src={context.result.user.photoURL} />}
          <LayoutColumn2>
            <Caption>Preview</Caption>
            <Switch
              checked={this.state.previewChecked}
              onChange={this.handleChange('previewChecked')}
              value="checked"
              color="primary"
            />
          </LayoutColumn2>
        </LayoutColumn2>
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
              variant="outlined"
            />
            <TextField
              fullWidth
              id="description"
              label="勉強会の内容"
              value={this.state.description}
              onChange={this.handleChangeTextField('description')}
              multiline
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              id="time"
              label="目安時間"
              value={this.state.time}
              onChange={this.handleChangeTextField('time')}
              multiline
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="amount"
              label="勉強会のギャラ"
              value={this.state.amount}
              onChange={this.handleChangeTextField('amount')}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment variant="filled">
                    ¥
                  </InputAdornment>
                ),
              }}
            />
          </TextFieldsWrapper> 
        }
        <LayoutBottom>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={() => requestContext.postRequest(
              'https://demo9911358.mockable.io/create-invite',
              this.state,
              'inviteRequest'
            )}>
            募集する 
          </Button>
        </LayoutBottom>
      </Layout>
    );
  }
}

export default withRequestContext(withAuthStatusContext(InvitePage))

import React from 'react'
import ReactDOM from 'react-dom';
import Layout from '../components/layout'
import {Header2, Caption} from '../components/style-typography'
import InviteCard from '../components/Molecules/InviteCard'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import TwitterIcon from '../components/Atoms/TwitterIcon'
import {LayoutColumn2, LayoutBottom, TextFieldsWrapper} from '../components/styled'
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
    this.forceUpdate();
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
    const validationErrorTitle = this.state.title.length > 70
    return (
      <Layout>
        <Header2 center>募集内容</Header2>
        <LayoutColumn2>
          {context.result && <TwitterIcon src={context.result.user.photoURL} />}
          <LayoutColumn2>
            <Caption>プレビュー</Caption>
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
            <FormControl
              fullWidth
              margin="normal"
              aria-describedby="error-title"
              error={validationErrorTitle}
              variant="outlined">
              <InputLabel
                ref={ref => {
                  this.labelRef = ReactDOM.findDOMNode(ref);
                }}
                htmlFor="title"
                >勉強会のタイトル</InputLabel>
              <OutlinedInput
                id="title"
                value={this.state.title}
                onChange={this.handleChangeTextField('title')}
                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                />
              <FormHelperText id="error-title">70文字以内で入力してください。</FormHelperText>
            </FormControl>
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

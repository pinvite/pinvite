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
import cloudinary from '../utils/cloudinary';

class InvitePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      previewChecked: false,
      title: '',
      description: '',
      amount: '',
      time: '',
      timeUnit: '時間',
      currency: '円'
    };
  }

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

  postUrl() {
    return ('/users/' + this.props.context.result.user.uid + '/invites'); 
  }

  imageUrl(title, description) {
    //https://cloudinary.com/documentation/image_transformations#adding_text_captions
    return (cloudinary.url(
      "pinvite-background2.png",
      {
        transformation: [
          {
            width: 1000,
            height: 400,
            x: 100,
            y: 50,
            gravity: "north_west",
            overlay: {
              font_family: "NotoSansJP-Black.otf",
              font_size: 60, 
              font_antialias: "best",
              text_align: "left",
              text: encodeURI(this.state.title)
            },
            crop: "fit"
          },
          {
            width: 1000,
            height: 100,
            x: 100,
            y: 400,
            overlay: {
              font_family: "NotoSansJP-Black.otf",
              font_size: 60, 
              text_align: "start",
              text: encodeURI('勉強会のギャラ: ' + this.state.amount + this.state.currency)
            },
            gravity: "north_west",
            crop: "fit"
          },
          {
            width: 1000,
            height: 94,
            x: 100,
            y: 500,
            overlay: {
              font_family: "NotoSansJP-Black.otf",
              font_size: 60, 
              text_align: "left",
              text: encodeURI('勉強会の時間: ' + this.state.time + ' ' + this.state.timeUnit)
            },
            gravity: "north_west",
            crop: "fit"
          }
      ]
    }));
  }

  createPostBody() {
    return ({
      description:   this.state.description,
      image_url:     this.imageUrl(),
      title:         this.state.title
    });
  }

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
            description={this.state.description}
            imageUrl={this.imageUrl()} />
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
              this.postUrl(),
              this.createPostBody(),
              this.props.context.idToken,
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

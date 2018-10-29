import React from 'react'

const RequestContext = React.createContext();

export class RequestProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {createInvite: null};
    this.postRequest = this.postRequest.bind(this)
    this.getRequest = this.getRequest.bind(this)
  }

  postRequest = (url, data, property) => {
    fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data), // 本文のデータ型は "Cont
    }).then(response => response.json())
    .then(response => {
      console.log(response)
      const data = {}
      data[property] = response
      this.setState({...data})
    })
  }

  getRequest = (url, property) => {
    fetch(url, {
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      }
    })
    .then(response => response.json())
    .then(response => {
      const data = {}
      data[property] = response
      this.setStatae({...data})
    })
  }

  render(){
    return(
      <RequestContext.Provider
        value={{
          requestData: this.state,
          postRequest: this.postRequest,
          getRequest: this.getRequest
        }}>
        {this.props.children}
      </RequestContext.Provider>
    );
  }
};

export const RequestConsumer = RequestContext.Consumer;
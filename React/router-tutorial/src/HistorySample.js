import React, { Component } from "react";

class HistorySample extends Component{

  handleGoBack = () => {
    this.props.history.goBack();
  }

  handleGoHome = () => {
    this.props.hisory.push('/')
  }

  componentDidMount(){
    // 여기를 설정하면 페이지를 나가려고 할 때마다 정말 나갈 것인지를 확인함.
    this.unblock = this.props.hisory.block('정말 떠나실 건가요?')
  }

  componentWillUnmount(){
    if(this.unblock){
      this.unblock();
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.handleGoBack}>
          뒤로
        </button>
        <button onClick={this.handleGoHome}>
          뒤로
        </button>
      </div>
    )
  }

}


export default HistorySample;
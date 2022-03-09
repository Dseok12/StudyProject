import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  dseok: {
    name: '정원석',
    description: '유명한 웹 개발자가 되고 싶다.'
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공'
  }
}


const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if(!profile){
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  )
}



export default withRouter(Profile);
import React from 'react';
import { withRouter } from 'react-router-dom';
const WithRouterSample = ({location, match, history}) => {
  // JSON.stringify(location, null, 2) 처럼 2번째, 3번째 파라미터에 null, 2를 넣으면 JSON에서 들여쓰기가 적용됨
  return(
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} row={7} readonly={true}/>
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} row={7} readonly={true}/>      
      <button onClick={()=>history.push('/')}>to home</button>
    </div>
  )
}
export default withRouter(WithRouterSample);
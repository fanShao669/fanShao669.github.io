
// 依赖  "react-avatar-editor": "^11.0.2",

import React, { Component } from 'react'
import Avatar from '../../components/common/Avatar'

export default class ComponetName extends Component {
 
  render() {
    // 编辑态
    const avatar =[{"id":"1","photokey":'12121',"nosKey":-1,"name":"xxx.png","url":"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]
    //const avatar = [] // 初态
    
    avatar.map(item=>item.uid=item.id) // 必须 将id 转为uid
    
    return (
      <div>
        <Avatar title={'上传头像'} accpetType={'image'}  avatar={avatar} accpetSize={'2'}/>
      </div>
    )
  }
}

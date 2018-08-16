import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export default class Ad extends Component {

  constructor(props){
      super(props);
      this.ad = props.adList;
  }
  render() {
    return (
        <div>
            <Link to = {this.ad[0].href}>
                <img src={this.ad[0].pic} />
            </Link>
        </div>
    )
  }
}

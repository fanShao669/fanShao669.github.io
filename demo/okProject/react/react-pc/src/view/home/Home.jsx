import React, { Component } from 'react'
import {isIe} from '../../utils/index'
import { getUserInfo } from '../../axios/index'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.isMobile = this.props.isMobile;
        this.isIe = isIe()
    }
    state = {
    }

    componentWillMount() {
        this.getUserInfo()
    }

    getUserInfo = () => {
        getUserInfo().then(res => {
            console.log('aa')
        })
    }

    render() {
        return (
            this.isMobile?
            <div>
                1111112313213213
            </div>:
            <div className="g-home">
                {this.isIe?
                <div>23231231323</div>
                :<div>32323323213范德萨发生2</div>}
            </div>
        )
    }
}



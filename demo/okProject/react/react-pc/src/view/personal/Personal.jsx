import React, { Component } from 'react'
import { Menu } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePersonalMenu } from '../../redux/action'
const SubMenu = Menu.SubMenu


class Personal extends Component {
    state = {
      
    }
    
    componentWillMount(){
     
    }

    componentWillReceiveProps(nextprops){
    }

    render() {
        const { isMobile } = this.props.responsive.data
        return (
            isMobile ?
            <div>
               1111
            </div>
            :
            <div>
               111法法法法23232
            </div>
        )
    }
}



const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData
    return {personalMenuState: state.personalMenuState, responsive}
}

const mapDispatchToProps = dispatch => ({
    updatePersonalMenu: bindActionCreators(updatePersonalMenu, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Personal)  
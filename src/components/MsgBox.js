import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import { hideMsg } from '../redux/actions'


const mapStateToProps = (state) => {
    return { isOpen: state.msgBoxIsOpen, color: state.msgBoxColor, msg: state.msgBoxMsg }
}

const mapDispatchToProps = {
    hideMsg
}


class MsgBox extends React.Component {
    constructor(props) {
        super(props)
        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss() {
        this.props.hideMsg()
    }

    render() {
        return (
            <div id="msg-box">
                <Alert color={this.props.color} isOpen={this.props.isOpen} toggle={this.onDismiss} >
                    {this.props.msg}
                </Alert>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgBox)
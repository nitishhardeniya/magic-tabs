import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dialog from './dialog';

class Tabitem extends Component {
    constructor(props){
        super(props);
        this.state = {
            showClose: false,
            showAlert: false
        }
    }

    _onHover = () => {
        // console.log("HOVER")
        this.setState({
            showClose: true
        })
    }

    _onLeave = () => {
        // console.log("LEAVE")
        this.setState({
            showClose: false
        })
    }

    _onClose = () => {
        this.setState({
            showAlert: true
        })
    }

    _onConfirm = (event) => {
        this.props.onTabClose(event, this.props.tabIndex);
        this.setState({
            showAlert: false
        });
    }

    _onDecline = () => {
        this.setState({
            showAlert: false
        })
    }

    render() {
        const { label, tabIndex, active, onTabClick, closable} = this.props;
        const { showAlert, showClose } = this.state;
        return (
            <div className={active ? "mg-tabitem active": "mg-tabitem"}
                onMouseEnter={this._onHover}
                onMouseLeave={this._onLeave}
                onClick={() => onTabClick(tabIndex)}
            >
                <div className="mg-label">{label}</div>
                {closable && showClose && <div className="close" onClick={e => this._onClose(e)}>x</div>}

                {showAlert && <Dialog message="Are you sure you want to remove this tab?" onConfirm={this._onConfirm} onDecline={this._onDecline}/>}
            </div>
        )
    }
}

export default Tabitem;

PropTypes.Tabitem = {
    label: PropTypes.string,
    closable: PropTypes.bool,
    onTabClose: PropTypes.func,
    tabIndex: PropTypes.number,
    active: PropTypes.bool,
}

Tabitem.defaultProps = {
    active: false
}

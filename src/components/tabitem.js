import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Tabitem extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }

    render() {
        const { label, tabIndex, active, onTabClick ,onTabClose, closable} = this.props;
        return (
            <div className={active ? "mg-tabitem active": "mg-tabitem"} onClick={() => onTabClick(tabIndex)}>
                <div className="mg-label">{label}</div>
                {closable && <div className="close" onClick={e => onTabClose(e, tabIndex)}>x</div>}
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

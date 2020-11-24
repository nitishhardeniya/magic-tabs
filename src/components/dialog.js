import React from 'react'
import PropTypes from 'prop-types'

const Dialog = ({ message, onConfirm, onDecline }) => {
    return (<>
                <div className="mg-overlay"></div>
                <div className="mg-dialog">
                    <div className="warning-msg">{message}</div>
                    <button className="mg-btn margin-r-10" onClick={e => onConfirm(e)}>Yes</button>
                    <button className="mg-btn" onClick={onDecline}>No</button>
                </div>
            </>)
}

Dialog.propTypes = {
    message: PropTypes.string,
    onConfirm: PropTypes.func,
    onDecline: PropTypes.func
}

export default Dialog;


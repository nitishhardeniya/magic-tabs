import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    _onTabChange = (changeIndex) => {
        this.setState({
            activeIndex: changeIndex
        }, () => this.props.onTabChange(this.state.activeIndex));
    }

    render() {
        const { children, allowAdd, onNewTab } = this.props;
        return (
            <div className="magic-tabs">
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {
                        active: this.state.activeIndex === index,
                        onTabClick: this._onTabChange,
                        tabIndex: index
                    }, null);
                })}
                {allowAdd && <div className="add" onClick={e => onNewTab(e)}>+</div>}
            </div>
        )
    }
}

export default Tabs;

Tabs.PropTypes = {
    maxTabs: PropTypes.number,
    allowAdd: PropTypes.bool,
    onNewTab: PropTypes.func
}
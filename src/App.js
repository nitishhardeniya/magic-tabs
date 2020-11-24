import React, { useState } from 'react';
import './mg-tabs.css';
import Tabs from './components/tabs';
import Tabitem from './components/tabitem';

const alltabs = [
  {
    name: "Design",
    closable: true,
    active: true
  },
  {
    name: "Components",
    closable: true,
  },
  {
    name: "Typography",
    closable: false,
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      tabsConfig: alltabs
    }
  }

  _onTabChange = (tabIndex) => {
    console.log("Im clicked", tabIndex);
    this.setState({
      activeTab: tabIndex
    })
  }
  
  _onTabClose = (e, index) => {
    e.stopPropagation();
    console.log("Tab closed",index ,e);
    const nextTabs = [...this.state.tabsConfig].filter((tab,it) => it !== index);
    this.setState({
      tabsConfig: nextTabs
    })
    
  }

  render() {
    const { tabsConfig, activeTab } = this.state;
    return (<div className="demo-container">
      <div className="title">Demo Magic Tabs</div>
      
      <Tabs onTabChange={this._onTabChange}>
        {tabsConfig.map(tab => <Tabitem label={tab.name} closable={tab.closable} active={tab.active} onTabClose={this._onTabClose}></Tabitem>)}
      </Tabs>

      <div className="main-content">
        Contents to be shown for Tab {activeTab}
      </div>
    </div>)
  }
}

export default App;

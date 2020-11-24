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
  },
  {
    name: "Installation",
    closable: false,
  },
  {
    name: "Item 5",
    closable: false,
  },
  {
    name: "Item 6",
    closable: true,
  },
  {
    name: "Item 7",
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
    // console.log("Im clicked", tabIndex);
    this.setState({
      activeTab: tabIndex
    })
  }
  
  _onTabClose = (e, index) => {
    e.stopPropagation();
    // console.log("Tab closed",index ,e);
    const nextTabs = [...this.state.tabsConfig].filter((tab,it) => it !== index);
    this.setState({
      tabsConfig: nextTabs
    })
  }

  _onNewTab = (e) => {
    const { tabsConfig } = this.state;
    e.stopPropagation();
    tabsConfig.push({ name: `Item ${tabsConfig.length+1}`, closable: false });
    this.setState({
      tabsConfig
    })
  }

  render() {
    const { tabsConfig, activeTab } = this.state;
    return (<div className="demo-container">
      <div className="title">Demo Magic Tabs</div>
      
      <Tabs onTabChange={this._onTabChange} allowAdd maxTabs={10} onNewTab={this._onNewTab}>
        {tabsConfig.map(tab => <Tabitem label={tab.name} closable={tab.closable} onTabClose={this._onTabClose}></Tabitem>)}
      </Tabs>

      <div className="main-content">
        Contents to be shown for Tab {activeTab}
      </div>
    </div>)
  }
}

export default App;

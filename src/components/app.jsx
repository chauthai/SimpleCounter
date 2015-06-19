import React from "react-native";
import Reflux from "reflux";

import Styles from "../styles";
import Actions from "../actions/global-actions";
import AppMessageStore from "../stores/app-message-store";

import AlphabetCount from "./alphabet-count";
import NumberCount from "./number-count";

let {
  NavigatorIOS,
  StatusBarIOS,
  TabBarIOS,
  View,
  Text,
  Image,
} = React;

let App = React.createClass({
  
  getInitialState() {
    return {
      selectedTab: 'AlphabetCount'
    };
  },

  _renderComponent(tab: component, tabTitle: string) {
    return (
      <NavigatorIOS 
        style={Styles.nav} 
        initialRoute={{
          component : tab,
          title: tabTitle,
        }}
      />
    )
  },

  componentDidMount() {
    // Do stuff when the App top-level component is ready,
    // such as change the color of the iOS status bar:

    StatusBarIOS.setStyle('light-content');

  },

  render() {
    // Render the top-level element that will contain the complete UI
    // of your application. You may also choose to use this element
    // as the single source of data, that is then passed down to
    // child components.

    return (
      <TabBarIOS>
        <TabBarIOS.Item
          icon={{uri:'featured'}}
          title="Alphabet"
          selected={this.state.selectedTab === 'AlphabetCount'}
          onPress={() => {
            this.setState({
              selectedTab: 'AlphabetCount'
            })
          }}>
          {this._renderComponent(AlphabetCount, 'Alphabet Counter')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri:'contacts'}}
          title="Numbers"
          selected={this.state.selectedTab === 'NumberCount'}
          onPress={() => {
            this.setState({
              selectedTab: 'NumberCount'
            })
          }}>
          {this._renderComponent(NumberCount, 'Number Counter')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

export default App;

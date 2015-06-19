import React from "react-native";
import Reflux from "reflux";

import Styles from "../styles";
import Actions from "../actions/global-actions";
import AppMessageStore from "../stores/app-message-store";

let {
  View,
  Text,
  Image,
  TouchableOpacity,
} = React;

let AlphabetCount = React.createClass({
  mixins: [Reflux.connect(AppMessageStore, "myChar")],
  
  componentDidMount() {

    // Get the initial message from the store
    Actions.updateAlphabet();
  },

  render() {
    // Render the top-level element that will contain the complete UI
    // of your application. You may also choose to use this element
    // as the single source of data, that is then passed down to
    // child components.

    return (
      <View style={Styles.appContainer}>
        <Text style={[Styles.appMessage, Styles.appSubMessage]}>
          Tap the character to change it!
        </Text>

        <TouchableOpacity
          onPress={Actions.updateAlphabet}>
          <Text style={Styles.appMessage}>{this.state.myChar}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={Actions.resetAlphabet}>
          <Text style={Styles.appMessage}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

export default AlphabetCount;

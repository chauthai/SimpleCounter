import Reflux from "reflux";
import Actions from "../actions/global-actions";

const messages = [
  "Hello, React!",
  "Today is a good day.",
  "How do I computer",
  "Stop poking me!",
  "Hi there!"
];

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

let AppMessageStore = Reflux.createStore({
  listenables: [Actions],

  init() {

    this.count = 0;
    this.myChar = alphabet[this.count];    
    this.number = -1;
  },

  onUpdateAlphabet() {
  
    while(this.count <= alphabet.length) {
      if(this.count < alphabet.length) {
        let newChar = alphabet[this.count++];
        this.myChar = newChar;
      }else {
        this.count = 0;
        let newChar = alphabet[this.count];
        this.myChar = newChar;
      }
      break;
    }

    this.trigger(this.myChar);
  },

  onResetAlphabet() {
    this.count = 0;
    this.myChar = alphabet[this.count];

    this.trigger(this.myChar);
  },

  onUpdateNumber() {
    this.number++;

    this.trigger(this.number);
  },

  onResetNumber() {
    this.number = 0;

    this.trigger(this.number);
  },
});

export default AppMessageStore;

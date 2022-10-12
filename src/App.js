import "./styles.css";

export default function App() {
  const reverseStringWithChar = (str) => {
    var regex = /\W|_/g;
    let newStr = str.split(regex).join("").split("").reverse().join("");
    let obj = {};
    for (let i = 0; i <= str.length; i++) {
      if (regex.test(str[i])) {
        obj = {
          ...obj,
          [i]: str[i]
        };
      }
    }
    let keys = Object.keys(obj).map((x) => Number(x));
    for (let j = 0; j < keys.length; j++) {
      newStr =
        newStr.substr(0, keys[j]) + obj[keys[j]] + newStr.substr(keys[j]);
    }
    console.log("Entered String is: " + str + " Reversed String is: " + newStr);
  };
  // reverseStringWithChar("@a$p&pl*e");
  reverseStringWithChar("o,r$ang@e");
  // reverseStringWithChar("^p!ine@ap)ple#");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

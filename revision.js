/* 
* Hot Module Replacement (HMR) :- Parcel keeps track of all the changes made
 in the code and reflects it on web browser without refreshing or saving.
 * File Watcher Algorithm :-are algorithms which keep track of any changes made
 in a file , * Parcel also uses this algorithm 
 */
// createElement;
const React = require("react");
const ReactDOM = require("react-dom/client");

const heading = React.createElement(
  // React Element
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Hello Doug! What's up"
);
const heading2 = React.createElement(
  "h2",
  { id: "titl", key: "h2" },
  "Hello Paul!"
);
const newHeading = React.createElement("h1", {}, "Vishnu Nair");

const newLists = React.createElement("ul", { id: "rights" }, [
  React.createElement("li", {}, "Home"),
  React.createElement("li", {}, "Support"),
  React.createElement("li", {}, "Contact"),
]);
const h = // jsx // also a component of react // react element
  (
    <div id="Trial">
      <h1>Namaste React</h1>
      <ul>
        <li>YOYO</li>
      </ul>
    </div>
  );

const Header3 = () => (
  // functional component
  <div>
    <div>
      <h1>Hello Girl!</h1>
    </div>
    <div>
      {((a) => {
        return a * 4;
      })(67)}
      {h}
      {/* a component within another component is called composing component  */}
      <h1>Hello World</h1>

      <h2>Blah blah</h2>
    </div>
  </div>
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
  newHeading,
  newLists,
  h,
  Header3(),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading, root);

// root.render(heading2);
root.render(container);

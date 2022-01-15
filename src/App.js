import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import contacts from "./contacts.json";

/*
class Contacts extends Component {

   state = {
    contacts: contacts.slice(0, 5),
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((el) => {
              return (
                <tr>
                  <td>
                    <img src={el.pictureUrl} alt="" />{" "}
                  </td>
                  <td>{el.name}</td>
                  <td>{el.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );

}

function App() {
  return (
    <div className="App">
      <Contacts />
    </div>
  )
}
*/

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5), // [ {}, {}, {}, {}, {} ]
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log("clickk");

            // 1. tirer au sort un contact de la liste -> Math.random()
            const randomContact =
              contacts[Math.floor(Math.random() * (contacts.length + 1))];

            // 2. faire une copie de this.state.contacts
            let newContacts = this.state.contacts.slice();

            // 3. .push notre 1. dans notre copie
            newContacts.push(randomContact);

            // 4. .setState()
            this.setState({
              contacts: newContacts,
            });
          }}
        >
          {" "}
          Add random contacts{" "}
        </button>
        <table>
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((el) => {
              return (
                <tr>
                  <td>
                    <img class="pic" src={el.pictureUrl} alt="" />{" "}
                  </td>
                  <td>{el.name}</td>
                  <td>{el.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

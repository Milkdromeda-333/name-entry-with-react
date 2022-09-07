import { useState } from 'react';

function App() {
  const [nameObj, setNameObj] = useState({
    name: "",
    names: []
  });


  function handler(event) {
    switch (event.target.name) {
      case "name":
        setNameObj(prevState => ({
          ...prevState,
          name: event.target.value
        })
        );

        break;

      default:
        setNameObj(prevState => ({
          ...prevState,
          names: [...nameObj.names, nameObj.name]
        }));
        event.target.value = "";
        break;
    }
  }

  const nameItems = nameObj.names.map(name => (<li>{name}</li>));

  return (
    <main>
      <input type="text" onChange={handler} name="name" value={nameObj.name} />
      <button onClick={handler}>Submit</button>
      <h1>{nameObj.name}</h1>
      <ol>{nameItems}</ol>
    </main>
  );
}

export default App;

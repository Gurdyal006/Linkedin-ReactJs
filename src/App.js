import { useEffect, useReducer, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState();
  const [color, setColor] = useState("#000");

  const submit = (e) => {
    e.preventDefault();
    alert(`title: ${title}, color: ${color}`);
    setTitle("");
    setColor("");
  };

  const [emotion, setEmotion] = useState("Happy");
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  useEffect(() => {
    console.log(`first emotion is ${emotion}`);
  }, [emotion]);

  return (
    <div className="App">
      <h1> Form Handling with useRef</h1>

      <form onSubmit={submit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="color"
        />
        <button>Click</button>
      </form>

      <h1>Our Emotion {emotion}</h1>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Calm")}>calm</button>

      <h1>Check box use Reducer hook</h1>
      <input
        type="checkbox"
        value={checked}
        onClick={() => {
          setChecked();
        }}
      />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;

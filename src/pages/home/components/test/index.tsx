import reactLogo from "../../../../assets/react.svg";
import "./App.css";
import { Adaptor } from "./interface";

function Test({
  adaptor: {
    states: { count, comment, name },
    handlers: { handlerButtonClick, handlerNameChange },
  },
}: {
  adaptor: Adaptor;
}) {
  return (
    <>
      <br />
      {comment}
      <br />
      <div>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div className="card">
          <button onClick={handlerButtonClick}>count is {count}</button>
        </div>
        <div>
          {name}
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => handlerNameChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Test;

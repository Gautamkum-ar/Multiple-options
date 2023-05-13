import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [selecteds, setSelected] = useState([]);

  const sports = [
    "Football",
    "Cricket",
    "Oyo",
    "BGMI",
    "Table Tennis",
    "Golf",
    "Career",
  ];

  const handleInput = (e) => {
    setUserValue(e.target.value);
  };

  const handleOption = (e) => {
    setUserValue("");

    setIsOpen(!isOpen);
    const find = selecteds.find((elms) => elms === e.target.value);
    if (!find) {
      setSelected([...selecteds, e.target.value]);
    } else {
      setSelected(selecteds.filter((elms) => elms !== e.target.value));
    }
  };

  const handleCustom = () => {
    setIsOpen(false);
    setUserValue("");
    setSelected([...selecteds, userValue]);
  };

  const handleClear = (value) => {
    setSelected(selecteds.filter((elms) => elms !== value));
  };

  const handleAllClear = () => {
    setSelected([]);
    setIsOpen(false);
  };

  return (
    <>
      <div className="selected__items">
        <b>Selected items:</b>[
        {selecteds.map((elms) => (
          <p key={elms}> "{elms}" ,</p>
        ))}
        ]
      </div>
      <h4>Favorite Sports</h4>
      <div className="container">
        <div onClick={() => setIsOpen(!isOpen)} className="inputs">
          {selecteds.map((elms) => (
            <span key={elms} className="selected__input__value">
              <p>{elms}</p>
              <button onClick={() => handleClear(elms)}>X</button>
            </span>
          ))}

          <input
            className="input"
            value={userValue}
            onChange={(e) => handleInput(e)}
            type="text"
          />
          {selecteds.length > 0 && (
            <button onClick={handleAllClear} className="clear__btn">
              X
            </button>
          )}
        </div>
        {isOpen && (
          <>
            {userValue !== "" && (
              <div className="cust__add">
                <p>{userValue}</p>
                <button onClick={handleCustom}>+</button>
              </div>
            )}
            <select
              onChange={handleOption}
              multiple
              className="select__options"
            >
              {sports.map((elms) => (
                <option key={elms} value={elms}>
                  {elms}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    </>
  );
}

export default App;

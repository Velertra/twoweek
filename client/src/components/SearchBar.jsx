import { useState } from "react";
import StatsDisplay from "./StatsDisplay";
import ApiFunction from "../utilities/ApiFunction";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [playerData, setPlayerData] = useState([]);
  const [searchStatus, setSearchStatus] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleChange(e) {
    setText(e.target.value);
  }

  async function handleKeyDown(e) {
    try {
      if (e.key === "Enter") {
        const playerResults = await ApiFunction(text);
        setPlayerData(playerResults.data);
        setSearchStatus(false);
        setShowDiv(true);
        setText("");
      }
    } catch (error) {
      setSearchStatus(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-bar"></label>
        <input
          id="search-bar"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" style={{ display: "none" }}></button>
      </form>
      <div className="pop-up-stat" id="pop-up-stat">
        {showDiv ? (
          <div>
            <StatsDisplay stats={playerData} searchStatus={searchStatus} />
            <button onClick={() => setShowDiv(false)}>close</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchBar;

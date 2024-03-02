import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const navigate = useNavigate();

  async function handleKeyDown(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        navigate(`search/${e.target.value}`)
      }
  }

  return (
    <>
      <form >
        <label htmlFor="search">{''}</label>
        <input
          id="search"
          name="search"
          placeholder="Enter your EPIC name..."
          onKeyDown={handleKeyDown}
        />
        <button type="submit" style={{ display: "none" }}></button>
      </form>
    </>
  );
};

export default SearchBar;
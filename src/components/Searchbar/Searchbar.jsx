import { useState } from "react";

const Searchbar = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    handleSubmit(query);
  };

  return (
    <header className="Searchbar">
      <form onSubmit={onSubmit} className="SearchForm">
        <button type="submit" className="SearchFormButton">
          <img
            src="https://www.svgrepo.com/show/7109/search.svg"
            alt="search"
            width="25px"
          />
          <span className="SearchFormButtonLabel">Search</span>
        </button>

        <input
          onChange={(event) => setQuery(event.target.value)}
          className="SearchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

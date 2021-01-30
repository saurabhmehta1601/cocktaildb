import React from "react";

const SearchForm = ({ setSearchTerm }) => {
  const searchValue = React.useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  });
  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form action="" className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search for favourite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

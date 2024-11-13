import "./search-input.css";

export default function SearchInput({ action }) {
  function handleSearch(e) {
    action(e.target.value);
  }
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search a product..."
      onChange={handleSearch}
    />
  );
}

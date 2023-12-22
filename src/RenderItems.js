import "./App.css";

const sample_country = [
  {
    name: "Andorra",
    capital: "Andorra la Vella",
  },
  {
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
  },
  {
    name: "Afghanistan",
    capital: "Kabul",
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
  },
];

function Lists({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function RenderItems() {
  return (
    <Lists
      data={sample_country}
      renderEmpty={<p>This List is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.capital}
        </>
      )}
    />
  );
}

export default RenderItems;

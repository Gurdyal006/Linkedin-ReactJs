// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "./App.css";

// https://countries.trevorblades.com/graphql

const query = `
query{
  countries {
    name
    capital
    currency
  }
}`;

const opts = {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({ query }),
};

function Lift({ name, capital, currency }) {
  return (
    <div>
      <h1>name: {name}</h1>
      <p>Capital: {capital}</p>
      <p>Currency: {currency}</p>
    </div>
  );
}

function Graphql() {
  //  fetch data from url api
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://countries.trevorblades.com/graphql`, opts)
      .then((response) => response.json())
      .then((data) => setData(data)) // then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading.....</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return (
    <div className="App">
      {data.data.countries.map((data, i) => (
        <Lift
          name={data.name}
          capital={data.capital}
          currency={data.currency}
        />
      ))}
    </div>
  );
}

export default Graphql;

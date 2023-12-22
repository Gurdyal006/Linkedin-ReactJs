// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "./App.css";

function GitHubUser({ name, company, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{company}</p>
      <p>
        <img height={50} src={image} alt={"text"} />
      </p>
    </div>
  );
}

function Hooks() {
  //  fetch data from url api
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/Gurdyal006`)
      .then((response) => response.json())
      .then((data) => setData(data)) // then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  // console.log(data);

  if (loading) return <h1>Loading.....</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return (
    <GitHubUser
      name={data.name}
      company={data.company}
      image={data.avatar_url}
    />
  );
}

export default Hooks;

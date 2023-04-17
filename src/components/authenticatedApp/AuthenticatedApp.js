import NavBar from "../navBar/NavBar";
import NewsRow from "../newsRow/NewsRow";
import NavLinks from "../navLinks/NavLinks";
import Show from "../Show/Show"
import NotFoundScreen from "../notFoundScreen/NotFoundScreen";
import {Routes, Route, Link} from "react-router-dom"
import { useState, useEffect } from "react";
import { client } from "../../utils/api-client";
import "./AuthenticatedApp.css";

function AuthenticatedApp({ user, logout }) {
  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");

  console.log(data);

  useEffect(() => {
    if (!queried) {
      return;
    }
    setStatus("loading");
    client(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}`
    ).then((responseData) => {
      setData(responseData);
      setStatus("success");
    });
  }, [query, queried]);

  function handleSearchSubmit(query) {
    setQueried(true);
    setQuery(query);
  }

  return (
    <div className="main-container">
      <NavBar
        onSubmit={handleSearchSubmit}
        status={status}
        user={user}
        logout={logout}
      />

      <div className="body-container">
        <NavLinks logout={logout} user={user} />
        <div className="news-container">
          {data
            ? data.articles.map((n, i) => {
                return <NewsRow key={i} data={data.articles[i]} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

function AppRoutes() {
  return(
    <Routes>
      <Routes path="/explore" element={<NavBar />}/>
      <Routes path="/news/:newsTitle" element={<Show />}/>
      <Routes path="*" element={<NotFoundScreen />}/>
    </Routes>
  )
}

export default AuthenticatedApp;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  // console.log(result);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };

    if (term && !result.length) {
      search();
    } else {
      const timeOut = setTimeout(() => {
        if (term) {
          search();
        } else {
          setResult([]);
        }
      }, 500);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [term, result.length]);

  const renderResult = result.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term </label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
        <div className="ui celled list">{renderResult}</div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import { LoadingIcon } from "./LoadingIcon";
import NewsItem from "./NewsItem";

const NewsContainer = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 12;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const loadData = async (topBar = false) => {
    if (topBar) {
      props.setProgress(30);
    }
    console.log("loading data...", "country=", props.country, "$$");
    console.log("page = ", page, ", pageSize = ", pageSize);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?${
        props.country ? `country=${props.country}&` : ""
      }${props.category ? `category=${props.category}&` : ""}apiKey=${
        props.apiKey
      }&page=${page}&pageSize=${pageSize}`
    );
    if (topBar) {
      props.setProgress(50);
    }
    let parsedData = await data.json();
    if (topBar) {
      props.setProgress(80);
    }
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    if (topBar) {
      props.setProgress(100);
    }
    console.log("data loaded");
  };
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    const showLoadingBar = page === 1;
    loadData(showLoadingBar);
  }, [page]);
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <h1 className="my-2 text-center">
        NewsGenie - Top {props.category ? capitalize(props.category) : ""}{" "}
        Headlines
      </h1>
      {/* PageSizeSelector */}
      <div>
        {loading ? (
          <LoadingIcon />
        ) : (
          <InfiniteScroll
            dataLength={articles.length}
            next={() => {
              setPage(page + 1);
            }}
            hasMore={articles.length < totalResults}
            loader={<LoadingIcon />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                No more news for now ! Come back later &#x1F607;
              </p>
            }
          >
            <div className="container row my-2">
              {articles.map((element) => {
                return (
                  <div className="col-md-4  my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://assamtribune.com/h-upload/2021/11/23/1274910-delhiaiimspti.webp"
                      }
                      newsUrl={element.url ? element.url : ""}
                      date={new Date(element.publishedAt).toGMTString()}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        )}

        {/* PreviousNextButtons */}
      </div>
    </div>
  );
};

NewsContainer.defaultProps = {
  category: "",
  country: "",
};
NewsContainer.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
};

export default NewsContainer;

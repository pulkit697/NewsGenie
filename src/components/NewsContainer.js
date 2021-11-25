import React, { Component } from "react";
import { LoadingIcon } from "./LoadingIcon";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsContainer extends Component {
  static defaultProps = {
    category: "",
    country: "",
  };
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      pageSize: 12,
      page: 1,
      loading: true,
    };
  }
  async loadData(topBar = false) {
    if (topBar) {
      this.props.setProgress(30);
    }
    console.log("loading data...", "country=", this.props.country, "$$");
    console.log(
      "page = ",
      this.state.page,
      ", pageSize = ",
      this.state.pageSize
    );
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?${
        this.props.country ? `country=${this.props.country}&` : ""
      }${this.props.category ? `category=${this.props.category}&` : ""}apiKey=${
        this.props.apiKey
      }&page=${this.state.page}&pageSize=${this.state.pageSize}`
    );
    if (topBar) {
      this.props.setProgress(50);
    }
    let parsedData = await data.json();
    if (topBar) {
      this.props.setProgress(80);
    }
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    if (topBar) {
      this.props.setProgress(100);
    }
    console.log("data loaded");
  }
  async componentDidMount() {
    this.loadData(true);
  }
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  render() {
    return (
      <div className="container">
        <h1 className="my-2" style={{ display: "inline" }}>
          NewsGenie - Top{" "}
          {this.props.category ? this.capitalize(this.props.category) : ""}{" "}
          Headlines
        </h1>
        {/* PageSizeSelector */}
        <div>
          {this.state.loading ? (
            <LoadingIcon />
          ) : (
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={() => {
                this.setState({ page: this.state.page + 1 }, () => {
                  this.loadData();
                });
              }}
              hasMore={this.state.articles.length < this.state.totalResults}
              loader={<LoadingIcon />}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  No more news for now ! Come back later &#x1F607;
                </p>
              }
            >
              <div className="container row my-2">
                {this.state.articles.map((element) => {
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
  }
}

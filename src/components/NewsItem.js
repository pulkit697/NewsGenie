import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  return (
    <div className="card">
      <span
        className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
        style={{ position: "relative", right: "0%" }}
      >
        {source}
      </span>
      <img className="card-img-top" src={imageUrl} alt="news card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            Last updated By {author ? author : "Unknown"} on {date}
          </small>
        </p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-primary"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
export default NewsItem;

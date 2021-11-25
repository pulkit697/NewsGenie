import React from "react";

export const PreviousNextButtons = () => {
  return (
    <div className="container d-flex justify-content-between my-2">
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => {
          this.setState({ loading: true, page: this.state.page - 1 }, () => {
            this.loadData();
          });
        }}
        disabled={this.state.page <= 1}
      >
        &larr; Previous
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => {
          this.setState({ loading: true, page: this.state.page + 1 }, () => {
            this.loadData();
          });
        }}
        disabled={
          this.state.page >=
          Math.ceil(this.state.totalResults / this.state.pageSize)
        }
      >
        Next &rarr;
      </button>
    </div>
  );
};

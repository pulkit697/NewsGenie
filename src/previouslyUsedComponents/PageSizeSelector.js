import React from "react";

export const PageSizeSelector = () => {
  return (
    <div className="dropdown" style={{ display: "inline" }}>
      <button
        className="btn btn-outline-primary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        10
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              this.setState({ pageSize: 5, loading: true, page: 1 }, () => {
                this.loadData();
                document.getElementById("dropdownMenu2").innerText = 5;
              });
            }}
          >
            5
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              this.setState({ pageSize: 10, loading: true, page: 1 }, () => {
                this.loadData();
                document.getElementById("dropdownMenu2").innerText = 10;
              });
            }}
          >
            10
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              this.setState({ pageSize: 20, loading: true, page: 1 }, () => {
                this.loadData();
                document.getElementById("dropdownMenu2").innerText = 20;
              });
            }}
          >
            20
          </button>
        </li>
      </ul>
    </div>
  );
};

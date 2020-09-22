import React from "react";

export default function SearchAppointments({
  orderBy,
  setOrderBy,
  orderDirection,
  setOrderDirection,
  query,
  setQuery
}) {
  const handleChange = (order, direction) => {
    setOrderBy(order);
    setOrderDirection(direction);
  };

  return (
    <div className="search-appointments row justify-content-center my-4">
      <div className="col-md-6">
        <div className="input-group">
          <input
            id="SearchApts"
            type="text"
            className="form-control"
            aria-label="Search Appointments"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by: <span className="caret" />
            </button>

            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "petName" ? "active" : "")
                }
                href="#"
                onClick={() => handleChange("petName", orderDirection)}
              >
                Pet Name
              </button>
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "aptDate" ? "active" : "")
                }
                href="#"
                onClick={() => handleChange("aptDate", orderDirection)}
              >
                Date
              </button>
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "ownerName" ? "active" : "")
                }
                href="#"
                onClick={() => handleChange("ownerName", orderDirection)}
              >
                Owner
              </button>
              <div role="separator" className="dropdown-divider" />
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderDirection === "asc" ? "active" : "")
                }
                href="#"
                onClick={() => handleChange(orderBy, "asc")}
              >
                Asc
              </button>
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderDirection === "desc" ? "active" : "")
                }
                href="#"
                onClick={() => handleChange(orderBy, "desc")}
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

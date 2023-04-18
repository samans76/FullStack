import React from "react";
import "./jobBody.css";

function JobBody(props) {
  const createCatalogs = () => {
    const catalogs = [];
    for (const [i, catalogData] of props.catalog.entries()) {
      const catalog = (
        <a
          className="catalog"
          href={catalogData}
          target="_blank"
          rel="noreferrer"
          key={i}
        >
          <i className="fa-solid fa-file-pdf fa-2xl"></i>
        </a>
      );
      catalogs.push(catalog);
    }
    return catalogs;
  };
  return (
    <div className="jobBody">
      <div className="navTab">
        <ul className="nav" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="navButton nav-link active"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description-tab-pane"
              type="button"
              role="tab"
              aria-controls="description-tab-pane"
              aria-selected="true"
            >
              توضیحات
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="navButton nav-link"
              id="catalog-tab"
              data-bs-toggle="tab"
              data-bs-target="#catalog-tab-pane"
              type="button"
              role="tab"
              aria-controls="catalog-tab-pane"
              aria-selected="false"
            >
              کاتالوگ ها
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="contentTab tab-pane fade show active"
            id="description-tab-pane"
            role="tabpanel"
            aria-labelledby="description-tab"
            tabIndex="0"
          >
            {props.description}
          </div>
          <div
            className="contentTab tab-pane fade"
            id="catalog-tab-pane"
            role="tabpanel"
            aria-labelledby="catalog-tab"
            tabIndex="0"
          >
            <div className="catalogs">{createCatalogs()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobBody;

import React, { Component } from "react";
import StateContext from "../contexts/stateContext";
import "./searchBox.css";

class SearchBox extends Component {
  static contextType = StateContext;
  state = {
    search: null,
    sort: null,
    filters: {
      job: null,
      city: null,
      isOnline: null,
    },
  };

  componentDidMount() {
    this.setState(this.context.searchState);
  }

  render() {
    return (
      <div className="searchBox ">
        <div className="title"> جستجو </div>
        <div className="search">
          <label htmlFor="searchText"> کلمات کلیدی </label>
          <input
            type="text"
            value={
              this.state.search === null
                ? "دنبال چه چیزی هستید؟"
                : this.state.search
            }
            id="searchText"
            onChange={(event) => {
              this.setState(
                { search: event.target.value },
                this.changeAppSearchState
              );
            }}
            onFocus={() => {
              this.clearDefaultSearch();
            }}
          />
        </div>
        <div className="sortBy">
          <label htmlFor="selectSort"> مرتب سازی </label>
          <select
            id="selectSort"
            value={this.state.sort || "مرتب سازی"}
            onChange={(event) => {
              this.setState(
                { sort: event.target.value },
                this.changeAppSearchState
              );
            }}
          >
            <option value="noSort">بدون مرتب سازی</option>
            <option value="mostExpensive">گرانترین</option>
            <option value="cheapest">ارزان ترین</option>
            <option value="newest">جدید ترین</option>
            <option value="oldest">قدیمی ترین</option>
          </select>
        </div>

        <div className="filters">
          <div className="job">
            <label htmlFor="selectJob"> مشاغل </label>
            <select
              id="selectJob"
              value={this.state.filters.job || "تمام شغل ها"}
              onChange={(event) => {
                this.setState(
                  (prevState) => ({
                    filters: { ...prevState.filters, job: event.target.value },
                  }),
                  this.changeAppSearchState
                );
              }}
            >
              <option value=""> تمام شغل ها </option>
              <option value="تمیزکار">تمیزکار</option>
              <option value="برنامه نویس">برنامه نویس</option>
              <option value="پرستار">پرستار</option>
              <option value="وکیل">وکیل</option>
              <option value="نجار">نجار</option>
              <option value="مشاور املاک">مشاور املاک</option>
            </select>
          </div>

          <div className="city">
            <label htmlFor="cityText"> شهر </label>
            <input
              type="text"
              value={
                this.state.filters.city === null
                  ? "در چه شهری؟"
                  : this.state.filters.city
              }
              id="cityText"
              onChange={(event) => {
                this.setState(
                  (prevState) => ({
                    filters: { ...prevState.filters, city: event.target.value },
                  }),
                  this.changeAppSearchState
                );
              }}
              onFocus={() => {
                this.clearDefaultCity();
              }}
            />
          </div>
          <div className="isOnline">
            <label htmlFor="isOnlineCheckbox" style={{ display: "inline" }}>
              <span> فقط آنلاین ها </span>
            </label>
            <input
              className="isOnlineCheckbox"
              type="checkbox"
              id="isOnlineCheckbox"
              onChange={(event) => {
                this.setState(
                  (prevState) => ({
                    filters: {
                      ...prevState.filters,
                      isOnline: event.target.checked,
                    },
                  }),
                  this.changeAppSearchState
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  clearDefaultSearch() {
    if (this.state.search === null) this.setState({ search: "" });
  }

  clearDefaultCity() {
    if (this.state.filters.city === null) {
      this.setState((prevState) => ({
        filters: { ...prevState.filters, city: "" },
      }));
    }
  }

  changeAppSearchState() {
    this.context.setSearchState(this.state);
  }
}

export default SearchBox;

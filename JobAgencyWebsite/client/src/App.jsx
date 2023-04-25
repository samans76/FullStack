import { Component } from "react";
// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import StateContext from "./contexts/stateContext.js";
import MainPage from "./pages/mainPage";
import JobPage from "./pages/jobPage";
import NotFound from "./pages/NotFound.jsx";

class App extends Component {
  state = {
    pageNumber: 1,

    searchState: {
      search: null,
      sort: null,
      filters: {
        job: null,
        city: null,
        isOnline: null,
      },
    },
  };

  render() {
    return (
      <div>
        <StateContext.Provider
          value={{
            pageNumber: this.state.pageNumber,
            searchState: this.state.searchState,
            setPageNumber: this.setPageNumber.bind(this),
            setSearchState: this.setSearchState.bind(this),
          }}
        >
          <Routes>
            <Route path="/jobPage/:id" element={<JobPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="*" match="exact" element={<NotFound />} />
          </Routes>
        </StateContext.Provider>
      </div>
    );
  }

  setPageNumber(pNumber) {
    this.setState({ pageNumber: pNumber });
  }

  setSearchState(state) {
    this.setState({ searchState: state }, () => {});
  }
}

export default App;

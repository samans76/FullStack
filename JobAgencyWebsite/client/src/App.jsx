import { Component } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import JobsContext from "./contexts/jobsContext.js";
import MainPage from "./pages/mainPage";
import JobPage from "./pages/jobPage";
import NotFound from "./pages/NotFound.jsx";

class App extends Component {
  state = {
    jobsData: null,
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:12426/jobs");
    this.setState({ jobsData: res.data });
    console.log("App", this.state);
  }

  render() {
    return (
      <div>
        <JobsContext.Provider value={{ jobsData: this.state.jobsData }}>
          <Routes>
            <Route path="/jobPage/:id" element={<JobPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="*" match="exact" element={<NotFound />} />
          </Routes>
        </JobsContext.Provider>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import StateContext from "../../contexts/stateContext.js";
import JobCard from "./jobCard.jsx";
import { configs } from "../../config.js";

class JobCards extends Component {
  static contextType = StateContext;

  state = {
    jobsData: null,
    searchState: null,
    isLoading: true,
  };

  componentDidMount() {
    this.getCardsData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(this.context.searchState) !==
      JSON.stringify(this.state.searchState)
    ) {
      this.getCardsData();
    }
  }

  getCardsData() {
    axios
      .post(`${configs.serverAddress}/jobs`, {
        pageNumber: this.context.pageNumber,
        searchState: this.context.searchState,
      })
      .then((res) => {
        this.setState(
          {
            jobsData: res.data.jobsData,
            searchState: res.data.searchState,
            isLoading: false,
          },
          () => {}
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;

    return (
      <div className="jobCards row d-flex justify-content-center align-items-center">
        {this.createContent()}
      </div>
    );
  }

  createContent() {
    if (!this.state.jobsData) return;

    if (this.state.jobsData.length > 0) {
      return this.createCards();
    } else {
      return this.createNotFoundElement();
    }
  }

  createCards() {
    const cards = [];
    for (const job of this.state.jobsData) {
      const card = <JobCard jobData={job} key={job.id} />;
      cards.push(card);
    }
    return cards;
  }

  createNotFoundElement() {
    return (
      <div
        className="notFound"
        style={{
          width: "75%",
          height: "90px",
          fontSize: "calc(1.2rem + 0.5vw)",
          marginTop: "18px",
          borderRadius: "8px",
          backgroundColor: "rgba(242, 246, 255, 0.7)",
          boxShadow: "2px 2px 1px rgba(33, 28, 35, 0.12)",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <span className="">متاسفانه موردی یافت نشد. </span>
      </div>
    );
  }
}

export default JobCards;

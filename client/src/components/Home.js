import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Article from "./Article";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      randomone: null,
      isloggedin: false
    };
    axios
      .get(process.env.REACT_APP_SECRET_CODE + "/api/isloggedin")
      .then(res => {
        this.setState({ isloggedin: res.data });
      });
    this.logoutHandler = this.logoutHandler.bind(this);
  }
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SECRET_CODE + "/api/getarticles")
      .then(articles => {
        this.setState({ articles: articles.data });
      });
    axios
      .get(process.env.REACT_APP_SECRET_CODE + "/api/getrandomone")
      .then(randomone => {
        this.setState({ randomone: randomone.data });
      });
  }
  logoutHandler() {
    axios.get(process.env.REACT_APP_SECRET_CODE + "/api/logout").then(res => {
      this.setState({ isloggedin: false });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <h3>Welcome to TechTalks!</h3> <br />
          <p>Read, write and share tech stories that matter</p>
          <br />
          <div>
            <Link className="btn btn-warning" to="/join">
              Log In/ Register -
            </Link>
            <Link className="btn btn-warning" to="/article/new">
              {" "}
              Write a TechTalks Post
            </Link>
            {this.state.isloggedin && (
              <button onClick={this.logoutHandler} className="btn btn-danger">
                Logout
              </button>
            )}{" "}
          </div>
        </div>
        <div className="container">
          <br />
          <h5 className="header">A Random article for you to enjoy:</h5>
          {this.state.randomone && <Article article={this.state.randomone} />}
          <br />
          <br />
          <h5 className="header">Latest articles</h5>
          {this.state.articles &&
            this.state.articles.map(article => {
              return <Article article={article} />;
            })}
        </div>
      </div>
    );
  }
}

export default Home;

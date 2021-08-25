import React, { useEffect } from "react";
import "./Feed.css";
import SearchIcon from "@material-ui/icons/Search";
// import Add_project from './Add_project';
import AddProject from "../add_project/AddProject";
import { Projects } from "../dummyData";
import { connect } from "react-redux";
import { loadProjects } from "../../actions/projectActions";

function Feed({ projects, loadProjects }) {
  useEffect(() => {
    console.log("yo");

    loadProjects();
  }, []);

  if (projects.loading) {
    return <div>Loading</div>;
  }

  if (!projects.loading && !projects.projects) {
    return <div>Error 🤐</div>;
  }

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="input">
          <div className="searchbar">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search the project here"
            />
          </div>
        </div>
        {projects.projects.map((p) => (
          <AddProject key={p._id} add_project={p} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { loadProjects })(Feed);

import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Edit2, Link, Map } from "react-feather";
import { Link as RouterLink, useRouteMatch } from "react-router-dom";

import { fetchSingleCampus } from "../store/currCampus";
import StudentList from "./StudentList";
import SingleCampusEmptyState from "./SingleCampusEmptyState";
import NotFound from "./NotFound";

const SingleCampus = (props) => {
  const { currCampus, fetchSingleCampus, history } = props;
  const { url } = useRouteMatch();
  const id = props.match.params.campusId;
  useEffect(() => {
    fetchSingleCampus(id);
  }, [currCampus.id]);

  return (
    <div className="flex flex-col bg-eggshell rounded-md drop-shadow-md">
      {!!currCampus ? (
        <Fragment>
          <div
            className="h-[80vh] md:h-96 bg-cover rounded-md bg-center relative from-slate-600"
            style={{
              backgroundImage: `linear-gradient( rgba(255, 255, 255, 0),rgba(0,0,0, 0.7)), url(${currCampus.image})`,
            }}
          >
            <div className="absolute text-5xl bottom-24 left-5 md:bottom-10 md:left-10 text-white font-serif w-2/3">
              {currCampus.name}
            </div>
            <div className="flex gap-3 absolute bottom-5 md:bottom-10 left-5 md:left-auto md:right-10">
              <RouterLink
                to={`${url}/edit`}
                type="button"
                className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium font-sans bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                <Edit2 className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
                Edit
              </RouterLink>
              <a
                href={currCampus.website}
                target="_blank"
                className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium font-sans bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                <Link className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
                Go to website
              </a>
            </div>
          </div>
          <div className="p-5 md:p-10 flex gap-10 flex-col">
            <div className="flex-inline">
              <div className="text-3xl font-serif pb-5 border-b border-dark-lava">
                About
              </div>
              <div className="my-5 font-sans text-gray-600 text-lg inline-flex items-center gap-2">
                <Map />
                {currCampus.address}
              </div>
              <div className="font-sans text-lg max-w-4xl whitespace-pre-line	">
                {currCampus.description}
              </div>
            </div>

            <div className="flex-inline">
              <div className="text-3xl font-serif pb-5 border-b border-dark-lava">
                Students
              </div>

              {currCampus.students && currCampus.students.length ? (
                <StudentList
                  currStudents={currCampus.students}
                  campusId={currCampus.id}
                  {...props}
                />
              ) : (
                <SingleCampusEmptyState url={url} />
              )}
            </div>
          </div>
        </Fragment>
      ) : (
        <NotFound history={history} />
      )}
    </div>
  );
};

const mapStateToProps = ({ currCampus }) => {
  return { currCampus };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleCampus: (id) => {
      dispatch(fetchSingleCampus(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

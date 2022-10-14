import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchJobs } from "../../web/redux/slices/jobs/job";

import { TailSpin } from "react-loader-spinner";

import "./styles/style.css";

const JobsPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs.jobs.items);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    await dispatch(fetchJobs());
    setLoading(false);
  }

  React.useEffect(() => {
    fetchData();
    console.log(jobs);
  }, []);

  if (isLoading) {
    return <TailSpin
    height="200px"
    width="100%"
    color="#0A72CD"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  }
  
  return (
    <section className="jobs">
      <div className="container">
        <div className="jobs__inner">
          <h1 className="jobs__title">
            На сегодняшний день в нашей кампании имеются следующие вакансии:
          </h1>
          {
              jobs.map((job) => 
                <div className="jobs__item">
                    <h2 className="jobs__name">{job.title}</h2>
                    <p className="jobs__description">{job.description}</p>
                    <p className="jobs__payment">{job.payment}</p>
                    <a href="mailto: ilya@mebius.info" className="jobs__button">Откликнуться</a>
                </div>
              )
          }
        </div>
      </div>
    </section>
  );
};

export default JobsPage;

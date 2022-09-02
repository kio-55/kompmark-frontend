import React, {useState} from "react";
import axios from "../../web/axios";

import { TailSpin } from "react-loader-spinner";

import "./styles/style.css";

const JobsPage = () => {
  const [jobs, setJobs] = useState();
  const [isLoading, setLoading] = useState(true);


  React.useEffect(() => {
    axios
      .get(`/api/jobs`)
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => console.warn(err));
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

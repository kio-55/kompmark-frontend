import React, {useState} from "react";
import axios from "../../web/axios";

import { TailSpin } from "react-loader-spinner";

import "./styles/style.css";

const CertificatePage = () => {
  const [certificates, setCertificates] = useState();
  const [isLoading, setLoading] = useState(true);

  React.useEffect(() => {
    axios
      .get("/api/certificates")
      .then((res) => {
        setCertificates(res.data);
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
    <>
      <section className="certificates">
        <div className="container">
          <div className="certificates__inner">
              <h1 className="certificates__title">Сертификаты</h1>
            {certificates.map((certificate) => (
              <div className="certificate">
                <h1 className="certificate__title">{certificate.title}</h1>
                <img
                  src={`http://localhost:8000${certificate.imageUrl}`}
                  alt=""
                  className="certificate__image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificatePage;

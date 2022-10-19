import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Websites() {
  const openModal = (image) => {
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('model-caption');
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
  };

  return (
    <div className="container website-section">
      <div className="row pt-4 text-center">
        <h1>Websites</h1>
      </div>
      <div className="row">
        <div className="col text-center mb-4 mt-2">
          Worked as part of 7 developer team to completely rework the front-end
          and partially reorganize the back-end of the PerfectVision website. I
          was the main front-end developer and I worked with a few designers to
          complete the look of the new site. See below to compare how the
          landing page looked in 2018 verus how it looked in&nbsp;2020-Current.
        </div>
      </div>
      <div className="row">
        <div className="col text-center mb-4 mt-2">
          Current site:&nbsp;
          <a
            href="https://www.perfect-vision.com/"
            target="_blank"
            rel="noreferrer"
          >
            perfect-vision.com
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-12 mx-auto d-flex justify-content-center mb-4">
          <button
            type="button"
            className="website-image"
            data-bs-toggle="modal"
            data-bs-target="#website-modal"
            onClick={(e) => openModal(e.target)}
          >
            <img
              src="https://i.imgur.com/IqlrHu9.png"
              alt="Perfect-10"
              width="400"
            />
          </button>
        </div>
        <div className="col-xl-4 col-lg-12 website-icon right-arrow text-center mb-4">
          <FontAwesomeIcon
            icon="fa-solid fa-right-long"
            className="d-none d-xl-block"
          />
          <FontAwesomeIcon icon="fa-solid fa-down-long" className="d-xl-none" />
        </div>
        <div className="col-xl-4 col-lg-12 d-flex justify-content-center mb-4">
          <button
            type="button"
            className="website-image"
            data-bs-toggle="modal"
            data-bs-target="#website-modal"
            onClick={(e) => openModal(e.target)}
          >
            <img
              src="https://i.imgur.com/WZoeV47.png"
              alt="PerfectVision"
              width="400"
            />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="divider">
            <span />
            <span>Charity Golf</span>
            <span />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-md-12 ">
          Developed PerfectVisionGolf as part of a 2 person team. All of the
          front-end development and design was completed by myself and I
          assisted my coworker with setting up the&nbsp;back-end.
          <div className="row">
            <div className="col text-center mb-4 mt-4">
              Current site:&nbsp;
              <a
                href="https://perfectvisiongolf.com/"
                target="_blank"
                rel="noreferrer"
              >
                perfectvisiongolf.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-12 d-flex justify-content-center mb-4">
          <button
            type="button"
            className="website-image"
            data-bs-toggle="modal"
            data-bs-target="#website-modal"
            onClick={(e) => openModal(e.target)}
          >
            <img
              src="https://i.imgur.com/b9NB7Fw.png"
              alt="PerfectVisionGolf"
              width="400"
            />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="divider">
            <span />
            <span>Email Quiz</span>
            <span />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-md-12 d-flex justify-content-center mb-4">
          <button
            type="button"
            className="website-image"
            data-bs-toggle="modal"
            data-bs-target="#website-modal"
            onClick={(e) => openModal(e.target)}
          >
            <img
              src="https://i.imgur.com/gtTkxBe.png"
              alt="NMSS Survey"
              width="400"
            />
          </button>
        </div>
        <div className="col-xl-6 col-md-12">
          This Salesforce Cloudpage was developed to be sent out as part of an
          email campaign for the National Multiple Sclerosis Society. It is
          simple survey, feel free to try it out.
          <div className="row">
            <div className="col text-center mb-4 mt-4">
              Current site:&nbsp;
              <a
                href="https://cloud.email-nmss.org/MS7QuestionQuiz"
                target="_blank"
                rel="noreferrer"
              >
                email-nmss.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="modal fade"
          id="website-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="websiteModal"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="model-caption">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img className="modal-content" id="img01" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Websites;

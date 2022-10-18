import React from 'react';

function Websites() {
  const openModal = (image) => {
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('model-caption');
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
  };

  return (
    <div className="container">
      <div className="row pt-4 text-center">
        <h1>Websites</h1>
      </div>
      <div className="row">
        <div className="col-xl-4">
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
        <div className="col-xl-4" />
        <div className="col-xl-4">
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

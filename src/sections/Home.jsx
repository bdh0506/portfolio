import React from 'react';

function Home() {
  return (
    <div>
      <h2>Homepage</h2>
      <div className="row pt-2">
        <div className="col-xl-6 col-lg-12 profile-img">
          <img src="https://i.imgur.com/mL03q1v.png" alt="Brandon Harmon" />
        </div>
        <div className="bio-text col-xl-6 col-lg-12">
          Lorem ipsum dolor sit amet, putent abhorreant est in, admodum corpora
          conceptam his ut. Purto illum appellantur cu mea, sed et omnesque
          reformidans. Et decore ponderum convenire eam. No diam maluisset
          incorrupte qui, ut cum labitur omnesque. Usu iriure platonem
          pertinacia ad, quot dicta gloriatur his eu. Lorem ipsum dolor sit
          amet, putent abhorreant est in, admodum corpora conceptam his ut.
          Purto illum appellantur cu mea, sed et omnesque reformidans. Et decore
          ponderum convenire eam. No diam maluisset incorrupte qui, ut cum
          labitur omnesque. Usu iriure platonem pertinacia ad, quot dicta
          gloriatur his eu.
        </div>
      </div>
      <div className="row skills-wrapper">
        <div className="container">
          <div className="row text-center skills-box">
            <div className="col-md-6 col-sm-12">
              &#x2022; attribute1
              <br />
              &#x2022; attribute2
            </div>
            <div className="col-md-6 col-sm-12">
              &#x2022; attribute1
              <br />
              &#x2022; attribute2
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-5" />
    </div>
  );
}

export default Home;

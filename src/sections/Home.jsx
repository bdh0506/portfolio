import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-xl-6 col-lg-12 profile-img mb-5 d-flex justify-content-center">
          <img src="https://i.imgur.com/HBh2xZE.png" alt="Brandon Harmon" />
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
      <div className="row skills-wrapper mb-5">
        <div className="container text-center skills-box">
          <div className="row text-center">
            <div className="col-xl-12 mb-3">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <ul>
                <li>C#</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>AJAX/REST</li>
                <li>Salesforce MC</li>
                <li>Luminate</li>
              </ul>
            </div>
            <div className="col-sm-6 col-xs-12">
              <ul>
                <li>.NET/.NET Core</li>
                <li>React</li>
                <li>AMPscript</li>
                <li>SQL</li>
                <li>Responsys</li>
                <li>Charity Engine</li>
              </ul>
            </div>

            {/* <div className="col-md-6 col-sm-12">&#x2022; C#</div>
            <div className="col-md-6 col-sm-12 ">&#x2022; .NET/.NET Core</div>
            <div className="col-md-6 col-sm-12">&#x2022; Javascript</div>
            <div className="col-md-6 col-sm-12">&#x2022; React</div>
            <div className="col-md-6 col-sm-12">&#x2022; JQuery</div>
            <div className="col-md-6 col-sm-12">&#x2022; AMPscript</div>
            <div className="col-md-6 col-sm-12">&#x2022; AJAX/REST</div>
            <div className="col-md-6 col-sm-12">&#x2022; SQL</div>
            <div className="col-md-6 col-sm-12">&#x2022; Salesforce MC</div>
            <div className="col-md-6 col-sm-12">&#x2022; Responsys</div>
            <div className="col-md-6 col-sm-12">&#x2022; Luminate</div>
            <div className="col-md-6 col-sm-12">&#x2022; Charity Engine</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

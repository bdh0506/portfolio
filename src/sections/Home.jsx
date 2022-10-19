import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-xl-6 col-lg-12 profile-img mb-5 d-flex justify-content-center">
          <img src="https://i.imgur.com/HBh2xZE.png" alt="Brandon Harmon" />
        </div>
        <div className="bio-text col-xl-6 col-lg-12">
          Hello, I&#39;m Brandon Harmon and I&#39;m a Senior Developer. Allow me
          to tell you a little bit about myself, I&#39;m currently working as a
          Senior Email Developer for Merkle Inc. I have been a professional
          developer for 6 years but I&#39;ve been developing software and
          building PC&#39;s and electronics for the last 16 years. Front-end
          development is my preferred workspace but I am capable of doing full
          stack work. I follow the motto that you should work to live, not live
          to work and so I try to find opportunities that support that
          lifestyle. When I&#39;m not at work I love to play PC games and board
          games. Working from home has allowed me to cultivate a growing
          collection of house plants. When time permits I love to get out into
          the garage and start a new woodworking project. If the weather is
          nice, you can find me outside with my partner and dogs going on a
          hike, although, you won&#39;t find me scaling Mount Rainier. Thank you
          for stopping by and please check out my portfolio of websites and
          email campaigns I have developed, designed or&nbsp;both.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

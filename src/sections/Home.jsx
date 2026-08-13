import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-xl-6 col-lg-12 profile-img mb-5 d-flex justify-content-center">
          <img src="https://i.imgur.com/HBh2xZE.png" alt="Brandon Harmon" />
        </div>
        <div className="bio-text col-xl-6 col-lg-12">
          Hello, I&#39;m Brandon Harmon and I&#39;m a Martech Developer. Allow
          me to tell you a little bit about myself, I started as a software
          developer doing front-end and full-stack development. In 2020 I made a
          career shift and began working in digital marketing. I have since used
          my experience as a software developer to help improve Martech stacks
          and workflows. I have also aquired many marketing, campaign design,
          and copy writing skills during this time. I follow the motto that you
          should work to live, not live to work and so I try to find
          opportunities that support that lifestyle. When I&#39;m not at work I
          love to play PC games and board games. Working from home has allowed
          me to cultivate a growing collection of house plants. When time
          permits I love to get out into the garage and start a new woodworking
          project. If the weather is nice, you can find me outside with my
          partner and dogs going on a hike, although, you won&#39;t find me
          scaling Mount Rainier. Thank you for stopping by and please check out
          my portfolio of websites and email campaigns I have developed,
          designed or&nbsp;both.
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
                <li>Marketo</li>
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
                <li>Iterable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import Emails from '../emails.json';
import EmailContainer from '../components/EmailContainer';

function Portfolio() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = Emails.Content;
  // const email1 = wrapper.firstChild.innerHTML;
  const email1 = Emails.Content;
  console.log(`in portfolio ${email1}`);
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <EmailContainer content={email1} />
          </div>
          <div className="col col-lg-6">
            <iframe
              src={`${process.env.PUBLIC_URL}/emails/UA_EM1.html`}
              height="800"
              width="550"
              title="UA Email 1"
            />
            {/* <EmailContainer /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

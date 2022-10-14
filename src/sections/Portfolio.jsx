import React from 'react';
import Emails from '../emails.json';
import EmailContainer from '../components/EmailContainer';

function Portfolio() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = Emails.Content;
  // const email1 = wrapper.firstChild.innerHTML;
  // const email1 = Emails.Content;

  const emails = [];

  Object.keys(Emails.UA_Emails).forEach((key) => {
    emails.push(Emails.UA_Emails[key]);
  });
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="row">
        {emails.map((e) => (
          <EmailContainer key={e.name} name={e.name} emailPath={e.path} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

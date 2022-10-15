import React from 'react';
import { Link } from 'react-router-dom';
import Emails from '../emails.json';
import EmailContainer from '../components/EmailContainer';

function Portfolio() {
  const emails = [];

  Object.keys(Emails.UA).forEach((key) => {
    emails.push(Emails.UA[key]);
  });
  return (
    <div>
      <Link to="/junk">Test Link</Link>
      <div className="row">
        {emails.map((e) => (
          <EmailContainer key={e.name} name={e.name} emailPath={e.path} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

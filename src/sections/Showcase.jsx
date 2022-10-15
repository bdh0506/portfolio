import React from 'react';
import { useLocation } from 'react-router-dom';

import Emails from '../emails.json';
import EmailContainer from '../components/EmailContainer';

function Showcase() {
  const emails = [];
  const location = useLocation();
  console.log(location.pathname);
  Object.keys(Emails.UA).forEach((key) => {
    emails.push(Emails.UA[key]);
  });
  return (
    <div>
      <h2>Showcase</h2>
      <div className="row">
        {emails.map((e) => (
          <EmailContainer key={e.name} name={e.name} emailPath={e.path} />
        ))}
      </div>
    </div>
  );
}

export default Showcase;

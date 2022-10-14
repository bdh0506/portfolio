import React from 'react';

const domain = '@yahoo.com';
const email = `brandon0506${domain}`;

function Footer() {
  return (
    <div>
      <div className="main-footer">
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `<a href="mailto:${email}">${email}</a>`,
          }}
        />
      </div>
    </div>
  );
}

export default Footer;

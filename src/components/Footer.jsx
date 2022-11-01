import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadButton from './ButtonMain';

const domain = '@yahoo.com';
const email = `brandon0506${domain}`;

function Footer() {
  return (
    <div className="main-footer /*fixed-bottom*/">
      <div className="row">
        <div className="col-xxl-12">
          <a
            className="me-3"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/brandon-harmon-b763a211b/"
          >
            <img
              src={`${process.env.PUBLIC_URL}/In-White-34.png`}
              alt="LinkedIn"
            />
          </a>
          <DownloadButton
            text="Resume&nbsp;&nbsp;"
            icon={<FontAwesomeIcon icon="fa-file-arrow-down" />}
            path={`${process.env.PUBLIC_URL}/Brandon_Harmon_Resume.pdf`}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-xxl-12">
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<a href="mailto:${email}">${email}</a>`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

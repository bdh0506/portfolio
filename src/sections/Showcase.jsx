import { React, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import projectData from '../project_data.json';
import EmailContainer from '../components/EmailContainer';

function Showcase() {
  const location = useLocation();
  const nav = useNavigate();
  const projects = [];
  const projectName = location.pathname.split('/').pop();
  const hasProject = Object.prototype.hasOwnProperty.call(
    projectData,
    projectName,
  );

  useEffect(() => {
    if (!hasProject) {
      nav('/Error404');
    }
  }, [hasProject]);

  if (hasProject) {
    Object.keys(projectData[projectName].emails).forEach((key) => {
      projects.push(projectData[projectName].emails[key]);
    });
  }

  return (
    <div className="container">
      <div className="row text-center mt-4">
        <h1>Emails</h1>
      </div>
      <div className="row">
        {projects.map((p) => (
          <EmailContainer key={p.name} name={p.name} emailPath={p.path} />
        ))}
      </div>
    </div>
  );
}

export default Showcase;

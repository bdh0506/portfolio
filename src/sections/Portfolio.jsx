import React from 'react';
import projectData from '../project_data.json';
import ProjectTile from '../components/ProjectTile';

function Portfolio() {
  const tiles = [];

  Object.keys(projectData).forEach((key) => {
    tiles.push(projectData[key]);
  });
  return (
    <div className="portfolio-body">
      <div className="container">
        <div className="row cs-light-ac text-center pt-4">
          <div className="col">
            <h1>Development Projects</h1>
          </div>
        </div>
        <div className="row">
          {tiles.map((t) => (
            <ProjectTile key={t.link} logoURL={t.logo} path={t.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

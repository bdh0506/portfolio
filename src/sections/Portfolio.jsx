import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projectData from '../project_data.json';
import ProjectTile from '../components/ProjectTile';

function Portfolio() {
  const tiles = [];

  function createTile(t) {
    let tile = '';
    const icon = <FontAwesomeIcon icon={t.logo} />;
    if (t.link === 'websites') {
      tile = <ProjectTile key={t.link} icon={icon} path={t.link} />;
    } else {
      tile = <ProjectTile key={t.link} logoURL={t.logo} path={t.link} />;
    }
    return tile;
  }

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
        <div className="row">{tiles.map((t) => createTile(t))}</div>
      </div>
    </div>
  );
}

export default Portfolio;

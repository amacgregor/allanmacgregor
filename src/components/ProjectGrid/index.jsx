import React from 'react'
import './style.scss'
import { replace } from 'gatsby';

class ProjectGrid extends React.Component {
  render() {
    const projects = this.props.data.githubViewer.repositories.nodes

    const gridBlock = (
      <div className="github-cards">
        {projects.map(repo => (
          <div class="github-card" data-github="Nexmo/nexmo-ruby">
            <h3>{repo.name}</h3>
            <div class="github-card__meta">
              {repo.languages.edges.map(lang => (
                <span><span class={"github-card__language-icon " + lang.node.name}>●</span> {lang.node.name}</span>
              ))}
            </div>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    )

    return <section id="projecGrid">
      <h2>Current Projects</h2>
      {gridBlock}
    </section>

  }
}

export default ProjectGrid
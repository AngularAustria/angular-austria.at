import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-projects',
  styleUrl: 'app-projects.scss',
})
export class AppProjects {
  public projectsList: Array<any> = [
    {
      projectUrl: '#',
      imgUrl: '../../assets/imgs/placeholder-projects.jpg',
      imgAlt: 'Project Preview Image',
      name: 'Lorem Ipsum Project',
      cta: 'Open',
    },
    {
      projectUrl: '#',
      imgUrl: '../../assets/imgs/placeholder-projects.jpg',
      imgAlt: 'Project Preview Image',
      name: 'Lorem Ipsum Project',
      cta: 'Open',
    },
    {
      projectUrl: '#',
      imgUrl: '../../assets/imgs/placeholder-projects.jpg',
      imgAlt: 'Project Preview Image',
      name: 'Lorem Ipsum Project',
      cta: 'Open',
    },
    {
      projectUrl: '#',
      imgUrl: '../../assets/imgs/placeholder-projects.jpg',
      imgAlt: 'Project Preview Image',
      name: 'Lorem Ipsum Project',
      cta: 'Open',
    },
    {
      projectUrl: '#',
      imgUrl: '../../assets/imgs/placeholder-projects.jpg',
      imgAlt: 'Project Preview Image',
      name: 'Lorem Ipsum Project',
      cta: 'Open',
    },
    {
      projectUrl: '#',
      imgUrl: '../../assets/imgs/placeholder-projects.jpg',
      imgAlt: 'Project Preview Image',
      name: 'Lorem Ipsum Project',
      cta: 'Open',
    },
  ];

  render() {
    return (
      <div class="app-projects">
        <div class="content__jumbotron">
          <div class="content__jumbotron-text wrapper--base">
            <h1>Open Source AT Projects</h1>
          </div>
        </div>
        <section class="content__projects wrapper--base">
          <nice-anim direction="up" duration={500} trigger-distance="10%">
            <div class="content__projects-boxes">
              {this.projectsList.map(projectList => (
                <a href={projectList.projectUrl} class="content__projects-box">
                  <img src={projectList.imgUrl} alt={projectList.imgAlt} />
                  <div class="content__projects-box-hover">
                    <h4>{projectList.name}</h4>
                    <span>{projectList.cta}</span>
                  </div>
                </a>
              ))}
            </div>
          </nice-anim>
        </section>
      </div>
    );
  }
}

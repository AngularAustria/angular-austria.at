import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-training',
  styleUrl: 'app-training.scss',
})
export class AppTraining {
  public trainingsList: Array<any> = [
    {
      imgUrl: '../../assets/imgs/ngGirls.jpg',
      imgAlt: 'ngGirls Logo Image',
      header: 'ngGirls',
      description:
        'ngGirls is an initiative that aims to introduce women to the world of technology and increase the diversity. Selected participants will be invited to a one-day workshop where, with the guidance of volunteer, experienced mentors, they will build and deploy their very first Web application with Angular, following an open-source tutorial. We’ve had more than 30 workshops around the world in the past two years.',
    },
    {
      imgUrl: '../../assets/imgs/angularCollege.jpg',
      imgAlt: 'angularCollege Logo Image',
      header: 'Angular College',
      description:
        'In this interactive seminar you will learn from well-known Angular insiders how to develop large and robust enterprise applications with Angular. Based on a practical case study and many examples, numerous architecture approaches and best practices will be discussed.',
    },
  ];

  render() {
    return (
      <div class="app-training">
        <div class="content__jumbotron">
          <img
            src="assets/imgs/trainings-bg.jpg"
            alt="Angular Meetup Group"
            class="content__jumbotron-img"
          />
          <div class="content__jumbotron-text wrapper--base">
            <h1>Our Training</h1>
          </div>
        </div>
        <section class="content__training wrapper--base">
          {this.trainingsList.map(trainingList => (
            <div class="content__training-info">
              <div class="content__training-box">
                <img
                  src={trainingList.imgUrl}
                  alt={trainingList.imgAlt}
                  loading="lazy"
                />
              </div>
              <div class="content__training-box">
                <nice-anim direction="up" duration={500} triggerDistance="10">
                  <h4>{trainingList.header}</h4>
                  <p>{trainingList.description}</p>
                </nice-anim>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-team',
  styleUrl: 'app-team.scss',
})
export class AppTeam {
  public teamMembersList: Array<any> = [
    {
      imgUrl: '../../assets/imgs/team/michael_hladky.jpg',
      imgAlt: 'Image of Michael Hladky',
      name: 'Michael Hladky',
      description:
        'Michael Hladky is a trainer, consultant, developer, meet-up organizer, moderator and OSS enthusiast. He loves to discover new technologies, and his main interests are Angular and Ionic. When he\'s not programming, he likes to travel the world.',
      twitterUrl: 'https://twitter.com/Michael_Hladky',
      linkedInUrl: 'https://at.linkedin.com/in/michael-hladky-519340148',
    },
    {
      imgUrl: '../../assets/imgs/team/michael_bromley.jpg',
      imgAlt: 'Image of Michael Bromley',
      name: 'Michael Bromley',
      description:
        'Michael has been working with Angular for over 5 years and is active in the open-source community. He is currently building an e-commerce framework with Angular, Node and GraphQL.',
      twitterUrl: 'https://twitter.com/michlbrmly',
      linkedInUrl: 'https://www.linkedin.com/in/michael-bromley-ab1704156/',
    },
    {
      imgUrl: '../../assets/imgs/team/marko_jurisic.jpg',
      imgAlt: 'Image of Marko Jurisic',
      name: 'Marko Jurisic',
      description:
        'Marko is a professional software craftsman, part time researcher and PhD student. He is an amateur musician and cyclist in his free time.',
      twitterUrl: 'https://twitter.com/JurisicMarko',
      linkedInUrl: 'https://at.linkedin.com/in/mjurisic',
    },
    {
      imgUrl: '../../assets/imgs/team/miroslav_jonas.jpg',
      imgAlt: 'Image of Miroslav Jonas',
      name: 'Miroslav Jonas',
      description:
        'Miro is a software developer interested in the frontend of things, speaker, co-founder of Angular Austria, co-organiser of Angular Vienna meetup and open source enthusiast. He likes spending free time outdoors doing different kinds of activities, wandering the world, with or without a camera.',
      twitterUrl: 'https://twitter.com/meeroslav',
      linkedInUrl: 'https://www.linkedin.com/in/miroslavjonas',
    },
  ];

  render() {
    return (
      <div class="app-team">
        <div class="content__jumbotron">
          <img src="assets/imgs/team-bg.jpg" alt="Angular Meetup Group" class="content__jumbotron-img"/>
          <div class="content__jumbotron-text wrapper--base">
            <h1>Our Team</h1>
          </div>
        </div>
        <section class="content__team wrapper--base">
          {this.teamMembersList.map(teamMemberList => (
            <div class="content__team-info">
              <div class="content__team-box">
                <img src={teamMemberList.imgUrl} alt={teamMemberList.imgAlt} loading="lazy" />
              </div>
              <div class="content__team-box">
                <nice-anim direction="up" duration={500}>
                  <h4>{teamMemberList.name}</h4>
                  <p>{teamMemberList.description}</p>
                  <ul class="content__team-social">
                    <li>
                      <a href={teamMemberList.twitterUrl}>
                        <svg>
                          <use xlinkHref="../../assets/imgs/sprite.svg#icon-twitter"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={teamMemberList.linkedInUrl}>
                        <svg>
                          <use xlinkHref="../../assets/imgs/sprite.svg#icon-linkedin"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nice-anim>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

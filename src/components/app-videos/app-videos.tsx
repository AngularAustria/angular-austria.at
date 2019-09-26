import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-videos',
  styleUrl: 'app-videos.scss',
})
export class AppVideos {
  public videosList: Array<any> = [
    {
      videoUrl: 'https://www.youtube.com/embed/GaJ71V28woY',
      tag: 'Angular Vienna',
      topic: 'Web Application Security for Frontend Devs',
      speaker: 'July 2019 | By Thomas Konrad',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/hozkdCsP2fs',
      tag: 'Angular Vienna',
      topic: 'Architecting large angular solutions',
      speaker: 'May 2019 | By Brecht Billiet',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/G1Fe7E1gZ8E',
      tag: 'Angular Vienna',
      topic: 'Sending the Angular app into deep, deep offline with Workbox',
      speaker: 'March 2019 | By Maxim Salnikov',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/svU48oFZ2nc',
      tag: 'Angular Vienna',
      topic: 'Angular, React, Vue and co. Harmoniously united',
      speaker: 'January 2019 | By Manfred Steyer',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/3xwxlHqrLsE',
      tag: 'Angular Vienna',
      topic: 'Reactive dynamic Forms',
      speaker: 'January 2019 | By Juri Strumpflohner',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/TBcAXgsVFtM',
      tag: 'Angular Vienna',
      topic: 'Structural Directives in Angular',
      speaker: 'August 2018 | By Vojtech Mašek',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/pER2U0fmzUw',
      tag: 'Angular Vienna',
      topic: 'The new CLI and angular.json',
      speaker: 'June 2018 | By David Müllerchen',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/sxQ8RnvLFPc',
      tag: 'Angular Vienna',
      topic: 'Compound Components',
      speaker: 'June 2018 | By David Leitner',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/HBFEz7f-nxk',
      tag: 'Angular Vienna',
      topic: 'RxJs schedulers in depth',
      speaker: 'May 2018 | By Michael Hladky',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/5jJMsfbtQ5g',
      tag: 'Angular Vienna',
      topic: 'Modules are not what you think they are',
      speaker: 'May 2018 | By Maxim Koretskyi',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/oZEmFfgSjeg',
      tag: 'Angular Vienna',
      topic: 'Use React tools for better Angular apps',
      speaker: 'April 2018 | By Martin Hochel',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/708el7zgGfY',
      tag: 'Angular Vienna',
      topic: 'Boost your web development efficiency',
      speaker: 'April 2018 | By Markus Hatvan',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/0Iy0tAmw3aM',
      tag: 'Angular Vienna',
      topic: 'ngUpgrade - From AngularJS to Angular',
      speaker: 'March 2018 | By Stefan Kerschbaumer',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/Doyn3oZPrY4',
      tag: 'Angular Vienna',
      topic: 'Reactive state of mind',
      speaker: 'February 2018 | By Miroslav Jonas',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/toRRQ1B5fUU',
      tag: 'Angular Vienna',
      topic: 'Building a UI Component Library in Angular',
      speaker: 'February 2018 | By Michael Bromley',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/j7gZWzPoTz8',
      tag: 'Angular Vienna',
      topic: 'Angular is on Fire(base)!',
      speaker: 'October 2017 | By Schmuela Jacobs',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/3-PDzFQ1rPg',
      tag: 'Angular Vienna',
      topic: 'Building Angular Libraries',
      speaker: 'October 2017 | By Manfred Steyer',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/NC4SyGnrjPs',
      tag: 'Angular Vienna',
      topic: 'Angular Animations',
      speaker: 'September 2017 | By Marko Jurišić',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/_MNDoDO4lv4',
      tag: 'Angular Vienna',
      topic: 'Through the Sound Barrier',
      speaker: 'September 2017 | By Manfred Steyer',
    },
  ];

  render() {
    return (
      <div class="app-videos">
        <div class="content__jumbotron">
          <img src="assets/imgs/videos-bg.jpg" alt="Angular Meetup Group" class="content__jumbotron-img"/>
          <div class="content__jumbotron-text wrapper--base">
            <h1>Angular Talks from our Meetup</h1>
          </div>
        </div>
        <section class="content__videos wrapper--base">
          <div class="content__videos-boxes">
            {this.videosList.map(videoList => (
              <nice-anim direction="up" duration={500}>
              <div class="content__videos-box">
                <iframe src={videoList.videoUrl} frameBorder="0" allowFullScreen></iframe>
                <span class="tag">{videoList.tag}</span>
                <h4>{videoList.topic}</h4>
                <span>{videoList.speaker}</span>
              </div>
              </nice-anim>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

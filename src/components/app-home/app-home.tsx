import { Component, h } from '@stencil/core';

interface WWDSEntry {
  imgUrl: string;
  imgAlt: string;
  header: string;
  description: string;
}

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  public wwdsList: WWDSEntry[] = [
    {
      imgUrl: '../../assets/imgs/photo-connect.jpg',
      imgAlt: 'Connect People Image',
      header: 'Conntect',
      description: 'We connect people & organizations',
    },
    {
      imgUrl: '../../assets/imgs/photo-support.jpeg',
      imgAlt: 'Support People Image',
      header: 'Support',
      description: 'We support meetups & events',
    },
    {
      imgUrl: '../../assets/imgs/photo-organize.jpg',
      imgAlt: 'SOrganize Image',
      header: 'Organize',
      description: 'We organize workshops & conferences',
    },
  ];

  render() {
    return (
      <div class="app-home">
        <div class="content__jumbotron__big">
          <img
            src="assets/imgs/home-bg.jpg"
            alt="Angular Meetup Group"
            class="content__jumbotron__big-img"
          />
          <div class="content__jumbotron__big-text wrapper--base">
            <h1>
              Angular Austria <br />
              Association
            </h1>
            <h3>
              The non-profit association supporting the Angular & Frontend
              developer community in Austria and beyond
            </h3>
          </div>
        </div>
        {/*    <section class="content__about wrapper--base">
              <nice-anim direction="up" duration={500}>
                  <h2>About us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper eget duis at. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Nisi porta lorem mollis aliquam ut porttitor. Mattis enim ut tellus elementum.</p>
              </nice-anim>
          </section>*/}
        <section class="content__wwd wrapper--base">
          <nice-anim direction="up" duration={500} triggerDistance="10">
            <h2>What we do</h2>
            <div class="content__wwd-boxes">
              {this.wwdsList.map(wwdList => (
                <div class="content__wwd-box">
                  <img
                    src={wwdList.imgUrl}
                    alt={wwdList.imgUrl}
                    loading="lazy"
                  />
                  <h4>{wwdList.header}</h4>
                  <span>{wwdList.description}</span>
                </div>
              ))}
            </div>
          </nice-anim>
        </section>
        <section class="content__upcoming">
          <div class="content__upcoming-container">
            <nice-anim direction="up" duration={500} triggerDistance="10">
              <div class="content__upcoming-info wrapper--base">
                <h2>Upcoming Events</h2>
                <app-meetup-widget
                  queryParams="upcoming"
                  pageCount="1"
                ></app-meetup-widget>
                <a
                  href="https://www.meetup.com/Angular-Vienna/events/"
                  class="btn"
                >
                  Show More
                </a>
              </div>
            </nice-anim>
          </div>
        </section>
        <section class="content__sponsors wrapper--base">
          <nice-anim direction="up" duration={500} triggerDistance="10">
            <h2>Our Sponsors</h2>
            <span>
              Our community support activities would not be possible without the
              support of our sponsors:
            </span>
            <div class="content__sponsors-logos">
              <a href="https://www.anexia-it.com/">
                <img
                  src="../../assets/imgs/sponsors/anexia.svg"
                  alt="Anexia Logo"
                />
              </a>
              <a href="https://www.apa-it.at/">
                <img
                  src="../../assets/imgs/sponsors/apa-it.png"
                  alt="Apa IT Logo"
                />
              </a>
              <a href="https://www.oebb.at/">
                <img src="../../assets/imgs/sponsors/oebb.svg" alt="OBB Logo" />
              </a>
              <a href="https://www.apc.co.at/">
                <img src="../../assets/imgs/sponsors/apc.png" alt="APC Logo" />
              </a>
              <a href="https://25th-floor.com/">
                <img
                  class="small_logo"
                  src="../../assets/imgs/sponsors/25th-floor.svg"
                  alt="25th Floor Logo"
                />
              </a>
              <a href="https://www.lean-coders.at/">
                <img
                  class="small_logo"
                  src="../../assets/imgs/sponsors/lean-coders.svg"
                  alt="Lean-Coders Logo"
                />
              </a>
            </div>
          </nice-anim>
        </section>
      </div>
    );
  }
}

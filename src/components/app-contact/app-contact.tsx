import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss',
})
export class AppContact {
  render() {
    return (
      <div class="app-contact">
        <div class="content__jumbotron">
          <img src="assets/imgs/contact-bg.jpg" alt="Angular Meetup Group" class="content__jumbotron-img"/>
          <div class="content__jumbotron-text wrapper--base">
            <h1>Contact us</h1>
          </div>
        </div>
        <section class="content__contact wrapper--base">
          <div class="content__contact-info">
            <nice-anim direction="up" duration={500} trigger-distance="10%">
              <h2>Location</h2>
              <span>Neustiftgasse 79</span>
              <span>1070 Vienna</span>
            </nice-anim>
          </div>
          <div class="content__contact-info">
            <nice-anim direction="up" duration={500}>
              <h2>E-Mail</h2>
              <span>
                <a href="mailto:info@angular-austria.at">info@angular-austria.at</a>
              </span>
            </nice-anim>
          </div>
          <div class="content__contact-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0607720048097!2d16.345207215340448!3d48.20544535441105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07ed31aecd2d%3A0x610638818c0cb0ce!2sNeustiftgasse+79%2C+1070+Wien!5e0!3m2!1sde!2sat!4v1565597587786!5m2!1sde!2sat"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    );
  }
}

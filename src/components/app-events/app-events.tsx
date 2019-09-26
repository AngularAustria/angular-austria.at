import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-events',
  styleUrl: 'app-events.scss',
})
export class AppEvents {
  render() {
    return (
      <div class="app-events">
        <div class="content__jumbotron">
          <img
            src="assets/imgs/photo-organize.jpg"
            alt="Angular Meetup Group"
            class="content__jumbotron-img"
          />
          <div class="content__jumbotron-text wrapper--base">
            <h1>Angular Vienna Meetup</h1>
          </div>
        </div>
        <section class="content__upcoming-events">
          <nice-anim direction="up" duration={500} triggerDistance="5">
            <div class="content__upcoming-events-info wrapper--base">
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
        </section>
        <section class="content__past">
          <nice-anim direction="up" duration={500} triggerDistance="5">
            <div class="content__past-events-info wrapper--base">
              <h2>Past Events</h2>
              <app-meetup-widget
                queryParams="past"
                pageCount="1"
                displayOrder={true}
              ></app-meetup-widget>
              <a
                href="https://www.meetup.com/Angular-Vienna/events/past"
                class="btn"
              >
                Show More
              </a>
            </div>
          </nice-anim>
        </section>
      </div>
    );
  }
}

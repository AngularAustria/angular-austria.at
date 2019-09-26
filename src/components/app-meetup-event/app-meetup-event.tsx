import { Component, Host, h, Prop } from '@stencil/core';

export interface MeetupEvent {
  name: string;
  link: string;
  description?: string;
  local_date?: string;
  local_time?: string;
  yes_rsvp_count?: string;
  venue: {
    name?: string;
  }
  text_format: string;
}

@Component({
  tag: 'app-meetup-event',
  styleUrl: 'app-meetup-event.scss',
  shadow: false
})
export class AppMeetupEvent {

  @Prop()
  public eventData: MeetupEvent;

  render() {
    return (
      <Host>
        <div class="meetup__card">
          <span class="meetup__card--date">{this.eventData.local_date.toLocaleString()} - {this.eventData.local_time}</span>
          <h3>{this.eventData.name}</h3>
          <span class="meetup__card--attendees">{this.eventData.yes_rsvp_count} attendees</span>
          <span class="meetup__card--venue">
            <svg>
              <title>Location Pin</title>
              <use xlinkHref="../../assets/imgs/sprite.svg#location-pin"></use>
            </svg>
            {this.eventData.venue.name}
          </span>
          <p innerHTML={this.eventData.description}></p>
          <slot></slot>
        </div>
      </Host>
    );
  }

}

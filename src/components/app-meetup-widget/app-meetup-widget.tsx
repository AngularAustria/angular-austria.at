import { Component, Host, h, Prop, State, Build } from '@stencil/core';

import { MeetupEvent } from '../app-meetup-event/app-meetup-event';

@Component({
  tag: 'app-meetup-widget',
  shadow: true,
})
export class AppMeetupWidget {
  @Prop()
  public groupName = 'Angular-Vienna';

  @Prop()
  public queryParams = '';

  @Prop()
  public pageCount = '';

  @Prop()
  public displayOrder = false;

  @Prop()
  public textFormat = '';

  @State()
  public loading = false;

  @State()
  public events: MeetupEvent[] = null;

  public componentWillLoad() {
    this.loading = true;
    const url: string = `api/${this.groupName}/events?&page=${this.pageCount}&status=${this.queryParams}&desc=${this.displayOrder}`;

    return Build.isBrowser ? fetch(url)
      .then(response => response.json())
      .then(data => {
        this.events = data as MeetupEvent[];
        this.loading = false;
      })
      .catch(error => {
        console.error('Could not load data', error);
        this.loading = false;
      }) : null;
  }

  public render() {
    return (
      <Host>
        <div>{this.loading ? <span>loading</span> : this.events ? this.events.map((eventData) => {
          return <app-meetup-event eventData={eventData}></app-meetup-event>;
        }) : <span>could not load data</span>}</div>
        <slot></slot>
      </Host>
    );
  }
}

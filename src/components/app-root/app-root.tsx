import { Component, h, Host, Build } from '@stencil/core';
import 'nice-anim';
import { NiceAnimConfig, SSRMode } from 'nice-anim';

if (!Build.isBrowser) {
  NiceAnimConfig.getInstance().ssrMode = SSRMode.Rehydrate;
}

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  render() {
    return (
      <Host>
        <app-header-nav></app-header-nav>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={1}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/home" component="app-home" />
              <stencil-route url="/jobs" component="app-jobs" />
              <stencil-route url="/videos" component="app-videos" />
              <stencil-route url="/team" component="app-team" />
              <stencil-route url="/events" component="app-events" />
              <stencil-route url="/contact" component="app-contact" />
              <stencil-route url="/training" component="app-training" />
              <stencil-route url="/privacy" component="app-privacy" />
              <stencil-route url="/imprint" component="app-imprint" />
              <stencil-route component="app-404" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <app-slackinfo></app-slackinfo>
        <app-footer></app-footer>
      </Host>
    );
  }
}

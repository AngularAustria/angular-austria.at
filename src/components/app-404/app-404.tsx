import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-404',
  styleUrl: 'app-404.scss'
})
export class App404 {
  render() {
    return (
      <div class="app-404">
        <section class="content__notfound wrapper--base">
          <div class="content__notfound-info">
            <h2>404 - Page Not Found</h2>
            <img src="../../assets/imgs/404graf.svg" alt="404 Illustration"/>
            <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
            <stencil-route-link url="/">&larr; Go back to our site</stencil-route-link>
          </div>
        </section>
      </div>
    );
  }
}

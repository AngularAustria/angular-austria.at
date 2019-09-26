import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
})
export class AppFooter {
  render() {
    return (
      <div class="app-footer">
        <div class="content__footer">
          <div class="content__footer-text wrapper--base">
            <div class="content__footer-info">
              <stencil-route-link url="/home">
                <img
                  class="logo"
                  src="../../assets/imgs/logo.svg"
                  alt="Angular Austria Logo"
                />
                <span>
                  Angular
                  <br />
                  Austria
                  <br />
                  Association
                </span>
              </stencil-route-link>
              <span class="info_text">
                Angular Austria - Verein zur Förderung und Unterstützung des
                JavaScript Frameworks Angular
              </span>
              <span class="info_text">
                Neustiftgasse 79, 1070 Wien
                <br />
                <a href="mailto:info@angular-austria.at">
                  info@angular-austria.at
                </a>
              </span>
              <span class="info_text">
                © 2019 Angular Austria Association. Build by{' '}
                <a href="https://www.lean-coders.at/">[Lean-Coders GmbH]</a>
              </span>
            </div>
            <div class="content__footer-links">
              <h5>Useful Links</h5>
              <ul class="links-nav">
                <li>
                  <stencil-route-link url="/jobs">Jobs</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/team">Team</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/events">Events</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/contact">
                    Contact
                  </stencil-route-link>
                </li>
              </ul>
            </div>
            <div class="content__footer-social">
              <h5>Social Media</h5>
              <ul class="links-nav">
                <li>
                  <a href="https://www.facebook.com/AngularAustria/">
                    <svg>
                      <title>Facebook</title>
                      <use xlinkHref="../../assets/imgs/sprite.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/angularaustria">
                    <svg>
                      <title>Twitter</title>
                      <use xlinkHref="../../assets/imgs/sprite.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="http://angularaustria.slack.com">
                    <svg>
                      <title>Slack</title>
                      <use xlinkHref="../../assets/imgs/sprite.svg#icon-slack"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="content__footer-legal">
              <h5>Legal</h5>
              <ul class="links-nav">
                <li>
                  <stencil-route-link url="/privacy">
                    Privacy
                  </stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/imprint">
                    Imprint
                  </stencil-route-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

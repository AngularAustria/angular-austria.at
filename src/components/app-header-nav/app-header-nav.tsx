import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-header-nav',
  styleUrl: 'app-header-nav.scss',
})
export class AppHeaderNav {
  @State() toggle: boolean = false;

  toggleComponent() {
    this.toggle = !this.toggle;
  }

  render() {
    return (
      <div class="app-header-nav">
        <nav class="user-nav">
          <stencil-route-link url="/home">
            <img class="logo" src="../../assets/imgs/logo.svg" alt="Angular Austria Logo" />
          </stencil-route-link>
          <ul>
            <li class="user-nav__nav-box">
              <stencil-route-link url="/home" activeClass="active">
                Home
              </stencil-route-link>
            </li>
            <li class="user-nav__nav-box">
              <stencil-route-link url="/jobs" activeClass="active">
                Jobs
              </stencil-route-link>
            </li>
            <li class="user-nav__nav-box">
              <stencil-route-link url="/videos" activeClass="active">
                Videos
              </stencil-route-link>
            </li>
            <li class="user-nav__nav-box">
              <stencil-route-link url="/training" activeClass="active">
                Training
              </stencil-route-link>
            </li>
            <li class="user-nav__nav-box">
              <stencil-route-link url="/team" activeClass="active">
                Team
              </stencil-route-link>
            </li>
            <li class="user-nav__nav-box">
              <stencil-route-link url="/events" activeClass="active">
                Events
              </stencil-route-link>
            </li>
            <li class="user-nav__nav-box">
              <stencil-route-link url="/contact" activeClass="active">
                Contact
              </stencil-route-link>
            </li>
          </ul>
        </nav>
        <nav class="user-nav-mobile" onClick={this.toggleComponent.bind(this)}>
          <stencil-route-link url="/home">
            <img class="logo" src="../../assets/imgs/logo.svg" alt="Angular Austria Logo" />
          </stencil-route-link>
          <input class="user-nav-mobile__menu-dropdown" id="user-nav-mobile__menu-dropdown" type="checkbox" />
          <label class="user-nav-mobile__menu-dropdown-label">
            <svg class="user-nav-mobile__menu-icon">
              <use xlinkHref="../../assets/imgs/sprite.svg#icon-menu"></use>
            </svg>
          </label>
          <ul class={this.toggle ? 'active' : 'inactive'}>
            <li class="user-nav-mobile__nav-box">
              <stencil-route-link url="/home" activeClass="active">
                Home
              </stencil-route-link>
            </li>
            <li class="user-nav-mobile__nav-box">
              <stencil-route-link url="/jobs" activeClass="active">
                Jobs
              </stencil-route-link>
            </li>
            <li class="user-nav-mobile__nav-box">
              <stencil-route-link url="/videos" activeClass="active">
                Videos
              </stencil-route-link>
            </li>
            <li class="user-nav-mobile__nav-box">
              <stencil-route-link url="/training" activeClass="active">
                Training
              </stencil-route-link>
            </li>
            <li class="user-nav-mobile__nav-box">
              <stencil-route-link url="/team" activeClass="active">
                Team
              </stencil-route-link>
            </li>
            <li class="user-nav-mobile__nav-box">
              <stencil-route-link url="/events" activeClass="active">
                Events
              </stencil-route-link>
            </li>
            <li class="user-nav-mobile__nav-box">
              <stencil-route-link url="/contact" activeClass="active">
                Contact
              </stencil-route-link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-slackinfo',
  styleUrl: 'app-slackinfo.scss',
})
export class AppSlackinfo {
  render() {
    return (
      <div class="app-slackinfo">
        <div class="content__slackinfo wrapper--base">
          <h2>Join us on</h2>
          <a href="#">
            <img src="../../assets/imgs/icon-slack_full.svg" alt="Full Slack Icon" />
          </a>
          <p>Join our slack channel to unlock the full community power!</p>
        </div>
      </div>
    );
  }
}

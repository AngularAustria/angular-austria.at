import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-imprint',
  styleUrl: 'app-imprint.scss',
})
export class AppImprint {
  render() {
    return (
      <div class="app-imprint">
        <div class="content__jumbotron">
          <div class="content__jumbotron-text wrapper--base">
            <h1>Imprint</h1>
          </div>
        </div>
        <section class="content__imprint">
          <div class="content__imprint-info wrapper--base">
            <h2>Legal Disclosure</h2>
            <h4>Information in accordance with Section 5 TMG</h4>
            <p>
              Angular Austria Association
              <br />
              Neustiftgasse 79
              <br />
              1070 Wien
            </p>
            <p>Represented by:<br />
              Michael Hladky, Miroslav Jonas, Michael Bromley, Marko Jurisic</p>
            <p>Contact Information:<br />
              E-Mail: <a href="mailto:info@angular-austria.at">info@angular-austria.at</a><br />
              Internet address: <a href="https://angular-austria.at/">https://angular-austria.at</a></p>
            <p>Register entry:<br />
              Entry in: Vereinsregister<br />
              Register Number: 1406516882<br />
              Register Court: Finanzamt Wien<br/>
              Tax identification number: ATU73222906</p>
            <p>Graphics and Image Sources:<br />
              <a href="https://unsplash.com/">https://unsplash.com</a><br />
              <a href="https://www.freepik.com/">https://www.freepik.com</a>
            </p>
            <h4>Disclaimer</h4>
            <p>Accountability for content:<br />
              The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).</p>
            <p>Accountability for links: <br />
              Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>
            <p>Copyright:
              Our web pages and their contents are subject to Austrian copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.</p>
          </div>
        </section>
      </div>
    );
  }
}

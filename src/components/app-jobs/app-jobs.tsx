import { Component, h } from '@stencil/core';

export interface Company {
  name: string,
  jobs: Job[]
}
interface Job {
  url: string,
  description: string
}

@Component({
  tag: 'app-jobs',
  styleUrl: 'app-jobs.scss',
})
export class AppJobs {
  public jobsList: Company[] = [
    {
      name: 'ÖBB',
      jobs: [
        {
        url: 'https://oebb.csod.com/ats/careersite/search.aspx?site=1&c=oebb',
        description: 'Software Developer .NET /HTML5 / AngularJS'
        }
      ]
    },
    {
      name: 'Anexia',
      jobs: [
        {
        url: 'https://www.anexia-it.com/de/unternehmen/karriere/full-stack-developer-mfd/',
        description: 'Full Stack Developer (m/w/d)'
        },
        {
        url: 'https://www.anexia-it.com/de/unternehmen/karriere/python-developer-mwd/',
        description: 'Python Developer (m/w/d)'
        }
      ],
    },
    {
      name: 'APA IT',
      jobs: [
        {
          url: 'https://www.apa-it.at/Site/jobs/javascript_frontend_developer.de.html',
          description: 'JavaScript Frontend Developer (m/w)'
        },
        {
          url: 'https://www.apa-it.at/Site/jobs/Fullstack_Developer_fuer_Webprojekte.de.html',
          description: 'Fullstack Developer für Webprojekte (m/w)'
        }
      ],
    },
    {
      name: 'APC Business Services',
      jobs: [
        {
          url: 'https://apc.co.at/project-managers.php?positionID=6033&hv=1e988437751cfea66e72c5847f0fb0cb',
          description: 'Junior Frontend Developer für Industry 4.0 und AI Applikationen (w/m)'
        },
        {
          url: 'https://apc.co.at/project-managers.php?positionID=5982&hv=4e3858e1425d69ba4f65101101d7f49c',
          description: 'Frontend EntwicklerIn (w/m)'
        }
      ],
    },
    {
      name: 'Lean-Coders',
      jobs: [
        {
        url: 'https://www.lean-coders.at/#/jobs',
        description: 'Software Developer (VZ/TZ) - Junior bis Senior Level'
        }
      ]
    }
  ];

  render() {
    return (
      <div class="app-jobs">
        <div class="content__jumbotron">
          <img src="assets/imgs/jobs-bg.jpg" alt="Angular Meetup Group" class="content__jumbotron-img"/>
          <div class="content__jumbotron-text wrapper--base">
            <h1>
              Angular and Frontend Jobs <br />
              from our Sponsors
            </h1>
          </div>
        </div>
        <section class="content__jobs wrapper--base">
          {this.jobsList.map(jobList => (
            <div class="content__jobs-info">
              <nice-anim direction="up" duration={500}>
                <h4>{jobList.name}</h4>
                  {jobList.jobs.map(job => (
                    <a href={job.url}>{job.description}</a>
                  ))}
              </nice-anim>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

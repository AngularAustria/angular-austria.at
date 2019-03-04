# angular-austria.at

This is the source of the Angular Austria Association website. It is built with [Hugo](https://gohugo.io/).

## Build

TypeScript and Sass source files are located in the `/assets` directory. They are compiled by running webpack via:

```bash
$ yarn watch
# or
$ yarn build
```

This will compile the sources and output to the `/public` directory, from which Hugo will publish them to the root of the generated site.

## Videos

The data for the list of videos is defined in the [./data/videos.json](./data/videos.json) file. To add / edit the list, just update the json file and commit and push the changes to trigger a deploy.

## Deployment

Pushing any change to the `master` branch will trigger a build on Netlify.

## Credits

* Landing page icons made by [Freepik](https://www.freepik.com/) from [www.flaticon.com](https://www.flaticon.com) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)
* Landing page "connect" Photo by Dylan Gillis on Unsplash 
* Landing page "organize" Photo by The Climate Reality Project on Unsplash
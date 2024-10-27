# Cartoon Beats cover art utility

This is a React app to help me protoype and lay out cover art for [Cartoon Beats Reality](https://cartoonbeats.com/releases/) releases, and wrangle DJ mix playlist metadata for [posting radio shows online](https://cartoonbeats.com/beats-reality-radio/).

Also includes support for parsing Traktor NML (XML) files and converting to easily editable yaml file, which can then be input to a component that lays out a cover art grid image and tracklist.

## cheat sheet
### Add & design a cover image for a release
1. Add the background image to `src/images`.
2. Make a new React component for the cover. e.g duplicate one of the js files in `src/components/covers`.
3. Add the cover to the router, so you can preview:
   - Add link in `Home` component in `App.js`.
   - Choose a unique url slug and register in `App()` router in `App.js`.
4. Edit the component to customise the cover design, colours, and layout.

### Run the web app to preview the cover
1. `npm start` will open the app in a new browser window - http://localhost:3000/
2. This renders the `Home` component, a preview of each cover.
3. Click a cover to view it.
4. Use browser zoom to zoom in and out. It is rendered really large so we get a high-resolution export.

### Render (export) the cover to a file
1. Ensure the web app is running and the cover design looks how you want.
2. Use `render` script, specifying the cover router slug, for example:
  - `npm run render -- photicreflex`
3. The rendered image is saved to `renders` folder.

--

This is deployed on Netflify, though I now use it locally.

### deployment

Deployed on Netlify: https://cbr-coverart.netlify.app/

Though I just run it locally.

### development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

-  `npm start`
-  `npm test`
-  `npm run build`

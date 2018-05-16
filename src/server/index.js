import WebServer from './web.server'

let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('☀ The sun started shining!')
  })
  .catch(err => {
    console.error(err)
    console.error('☁ Failed to start web server (no sun today)')
  });

const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\404.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\app.js"))),
  "component---src-pages-boldpledge-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\boldpledge.js"))),
  "component---src-pages-boldpledgecommitment-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\boldpledgecommitment.js"))),
  "component---src-pages-boldseries-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\boldseries.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\index.js"))),
  "component---src-pages-mastercoachdetail-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\mastercoachdetail.js"))),
  "component---src-pages-mastercoaches-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\mastercoaches.js"))),
  "component---src-pages-membership-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\membership.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\page-2.js"))),
  "component---src-pages-story-js": hot(preferDefault(require("E:\\D\\ReactJs Projects\\Freelance\\bold backuo\\src\\pages\\story.js")))
}


const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('main', '/')
routes.add('preproc', '/preproc/:path')
routes.add('mlalgo', '/mlalgo/:path')
routes.add('procOptions', '/procOptions')
routes.add('algoOptions', '/algoOptions')

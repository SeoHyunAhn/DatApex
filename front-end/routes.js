const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('preproc', '/preproc/:path')
routes.add('about', '/about-us/:foo(bar|baz)')

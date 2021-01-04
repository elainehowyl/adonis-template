'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/about-us', () => 'About Us')

Route.get('view-record/:record_id', ({params}) => {
  return `view-record ${params.record_id}`
})

// Route.get('special', () => 'Special Route').as('special')


// Route.get('special', ({response}) => {
//   setTimeout(()=> {
//     return response.route('/about-us')
//   }, 3000)
// }).as('special')

Route.get('special', ({response}) => {
  "Redirecting..."
  return response.route('/about-us')
}).as('special')


Route.get('/sightings', 'SightingController.index')

Route.get('/sightings/about', 'SightingController.about')

Route.get('view-record/:record_id', ({params}) => {
  return `view-record ${params.record_id}`
})


// Route.get('/sightings/details/:detail_id/view', ({request, params}) => {
//   request.params.detail_id
// })


Route.get('sightings/details/:detail_id/view', 'SightingController.details')

Route.get('sightings/location/:location_id', 'SightingController.location')

// route.on is for rendering static page, meaning, just for display
// Route.on('/sightings/about').render('sighting-index')

// Route.get('/sightings/about', ({ view }) => {
//   return view.render('sighting-index')
// })


// FORM HANDLING:
Route.get('sightings/details/create', 'SightingController.create')
Route.post('sightings/details/create', 'SightingController.processCreate')







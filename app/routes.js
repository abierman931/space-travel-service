//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Run this code when a form is submitted to 'destination-answer'
router.post('/destination-answer', function (req, res) {

  // Make a variable and give it the value from 'travelDestination'
  var travelDestination = req.session.data['travelDestination']

  // Check whether the variable matches a condition
  if (travelDestination == "The Moon"){
    // Send user to next page
    res.redirect('/the-moon/name')
  } else {
    // Send user to ineligible page
    res.redirect('/mars/name')
  }

})

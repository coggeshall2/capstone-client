'use strict'
const events = require('./events')
const authEvents = require('./auth/events')
const modals = require('./modals')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  authEvents.addHandlers()

  $('#birthday').on('submit', events.onCreateFamily)
  $('#baby-firsts').on('submit', events.onCreateFirsts)
  $('#favorites').on('submit', events.onCreateFavorites)
  // $('#trails-update').on('submit', events.onUpdateTrail)
  // $('#trails-create').on('submit', events.onCreateTrail)
})

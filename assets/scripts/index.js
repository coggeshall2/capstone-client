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

  $('#family-index').on('submit', events.onFamiliesIndex)
  $('#family-show').on('submit', events.onGetFamily)
  $('#family-delete').on('submit', events.onDestroyFamily)
  $('#family-update').on('submit', events.onUpdateFamily)
  $('#family-create').on('submit', events.onCreateFamily)
})

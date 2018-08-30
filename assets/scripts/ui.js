const store = require('./store')

const onIndexSuccess = function(data){
  // empty content element
  $('#content').html('')
  // console.table(data.memories)
  // loop through API response data
  data.memories.forEach(memory => {
    // build HTML element with data
    const memoryHTML = (`
      <h4>Given Name: ${data.memory.given_name}</h4>
      <h4>Family Name: ${data.memory.family_name}</h4>
      <p>Birth Date: ${data.memory.birth_date}</p>
      <p>Birth Weight: ${data.memory.birth_weight}</p>
      <p>Birth Length: ${data.memory.birth_length}</p>
      <p>Birth weight: ${data.memory.birth_weight}</p>
      <p>Hospital Name: ${data.memory.hospital_name}</p>
      <p>Doctor Name: ${data.memory.doctor_name}</p>
      <p>Other Memory: ${data.memory.other_memory}</p>
      <br>
    `)
    // append memoryHTML to content
    $('#content').append(memoryHTML)
    $('#memories-index-message').text('Successfully Completed Task, scroll down for results')
    $('#memories-index-message').css('background-color', 'green')
    $('#memories-index-message').fadeOut(10000)
    // console.log('Successfully completed. Data is :', data)
  })
}

const onGetSuccess = function (data) {
          $('#content').html('')
      // console.table(data.memories)
      // loop through API response data
      // build HTML element with data
        const memoryHTML = (`
          <h4>Given Name: ${data.memory.given_name}</h4>
          <h4>Family Name: ${data.memory.family_name}</h4>
          <p>Birth Date: ${data.memory.birth_date}</p>
          <p>Birth Weight: ${data.memory.birth_weight}</p>
          <p>Birth Length: ${data.memory.birth_length}</p>
          <p>Birth weight: ${data.memory.birth_weight}</p>
          <p>Hospital Name: ${data.memory.hospital_name}</p>
          <p>Doctor Name: ${data.memory.doctor_name}</p>
          <p>Other Memory: ${data.memory.other_memory}</p>
          <br>
        `)
        // append trailHTML to content
        $('#content').append(memoryHTML)
        $('#memories-show-message').text('Successfully Completed Task, scroll down for results')
        $('#memories-show-message').css('background-color', 'green')
        $('#memories-show-message').fadeOut(10000)
        console.log('Successfully completed. Data is :', data)
    }

  // reset form
  $('#memories-show').trigger("reset")


const onDestroySuccess = function (){

  $('#content').html("Memory Successfully Deleted!")
  $('#memories-delete-message').text('Successfully Deleted Memory')
  $('#memories-delete-message').css('background-color', 'green')
  $('#memories-delete-message').fadeOut(10000)
  // console.log('Successfully run. Data is :', data)

  // reset form
  $('#memories-delete').trigger("reset")
}

const onUpdateSuccess = function (data) {
  $('#content').html('')
// console.table(data.memories)
// loop through API response data
// build HTML element with data
const memoryHTML = (`
  <h4>Given Name: ${data.memory.given_name}</h4>
  <h4>Family Name: ${data.memory.family_name}</h4>
  <p>Birth Date: ${data.memory.birth_date}</p>
  <p>Birth Weight: ${data.memory.birth_weight}</p>
  <p>Birth Length: ${data.memory.birth_length}</p>
  <p>Birth weight: ${data.memory.birth_weight}</p>
  <p>Hospital Name: ${data.memory.hospital_name}</p>
  <p>Doctor Name: ${data.memory.doctor_name}</p>
  <p>Other Memory: ${data.memory.other_memory}</p>
  <br>
`)
// append memoryHTML to content
$('#content').append(memoryHTML)
$('#memories-update-message').text('Successfully Update Memory')
$('#memories-update-message').css('background-color', 'green')
$('#memories-update-message').fadeOut(10000)
// console.log('Successfully completed. Data is :', data)
}

const onCreateSuccess = function (data) {
  $('#content').html('You created a new memory!')
  $('#memories-create-message').text('Successfully Created New Memory')
  $('#memories-create-message').css('background-color', 'green')
  $('#memories-create-message').fadeOut(10000)
  // console.log('Successfully run. Data is :', data)
  // reset form
  $('#memories-create').trigger("reset")
}

const onFailure = function(data){
  // log the error
  // console.error(data)

  // display error to user
  $('#content').html('Something went wrong, please try again.')
  $('#messages').text('Error on submit')
  $('#messages').css('background-color', 'red')
  // console.error('Failure when command ran. Error is :', error)
}

module.exports = {
  onIndexSuccess,
  onGetSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onFailure
}

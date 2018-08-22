const store = require('./store')

// const onIndexSuccess = function(data){
//   // empty content element
//   $('#content').html('')
//   // console.table(data.trails)
//   // loop through API response data
//   data.trails.forEach(trail => {
//     // build HTML element with data
//     const trailHTML = (`
//       <h4>Trail Name: ${trail.trail_name}</h4>
//       <p>Trail ID: ${trail.id}</p>
//       <p>Location: ${trail.location}</p>
//       <p>Distance: ${trail.distance}</p>
//       <p>Elevation gain: ${trail.elevation_gain}</p>
//       <p>Trail type: ${trail.trail_type}</p>
//       <p>Skill level: ${trail.skill_level}</p>
//       <br>
//     `)
//     // append trailHTML to content
//     $('#content').append(trailHTML)
//     $('#trails-index-message').text('Successfully Completed Task, scroll down for results')
//     $('#trails-index-message').css('background-color', 'green')
//     $('#trails-index-message').fadeOut(10000)
//     // console.log('Successfully completed. Data is :', data)
//   })
// }

// const onGetSuccess = function (data) {
//           $('#content').html('')
//       // console.table(data.trails)
//       // loop through API response data
//       // build HTML element with data
//         const trailHTML = (`
//           <h4>Trail Name: ${data.trail.trail_name}</h4>
//           <p>Location: ${data.trail.location}</p>
//           <p>Distance: ${data.trail.distance}</p>
//           <p>Elevation gain: ${data.trail.elevation_gain}</p>
//           <p>Trail type: ${data.trail.trail_type}</p>
//           <p>Skill level: ${data.trail.skill_level}</p>
//           <br>
//         `)
//         // append trailHTML to content
//         $('#content').append(trailHTML)
//         $('#trails-show-message').text('Successfully Completed Task, scroll down for results')
//         $('#trails-show-message').css('background-color', 'green')
//         $('#trails-show-message').fadeOut(10000)
//         console.log('Successfully completed. Data is :', data)
//     }
//
//   // reset form
//   $('#trails-show').trigger("reset")


// const onDestroySuccess = function (){
//
//   $('#content').html("Trail Successfully Deleted!")
//   $('#trails-delete-message').text('Successfully Deleted Trail')
//   $('#trails-delete-message').css('background-color', 'green')
//   $('#trails-delete-message').fadeOut(10000)
//   // console.log('Successfully run. Data is :', data)
//
//   // reset form
//   $('#trails-delete').trigger("reset")
// }

// const onUpdateSuccess = function (data) {
//   $('#content').html('')
// console.table(data.trails)
// loop through API response data
// build HTML element with data
// const trailHTML = (`
//   <h4>Trail Name: ${data.trail.trail_name}</h4>
//   <p>Location: ${data.trail.location}</p>
//   <p>Distance: ${data.trail.distance}</p>
//   <p>Elevation gain: ${data.trail.elevation_gain}</p>
//   <p>Trail type: ${data.trail.trail_type}</p>
//   <p>Skill level: ${data.trail.skill_level}</p>
//   <br>
// `)
// // append trailHTML to content
// $('#content').append(trailHTML)
// $('#trails-update-message').text('Successfully Update Trail')
// $('#trails-update-message').css('background-color', 'green')
// $('#trails-update-message').fadeOut(10000)
// // console.log('Successfully completed. Data is :', data)
// }

const onCreateFamilySuccess = function (data) {
  $('#content-family').html('You created a new memory!')
  $('#family-display-message').text('Successfully Created New Trail')
  $('#family-display-message').css('background-color', 'green')
  $('#family-display-message').fadeOut(10000)
  // console.log('Successfully run. Data is :', data)
  // reset form
  $('#families-create').trigger("reset")
}

const onIndexSuccess = function(data){
  // empty content element
  $('#content-family').html('')
  console.table(data.families)
  // loop through API response data
  data.families.forEach(family => {
    // build HTML element with data
    const familyHTML = (`
      <h3>Babies Given Name</h3>
      <div><p>${data.family.given_name}<p></div>
      <h3>Babies Family Name</h3>
      <div><p>${data.family.family_name}<p></div>
      <h3>Babies Birth Date</h3>
      <div><p>${data.family.birth_date}<p></div>
      <h3>Babies Birth Weight</h3>
      <div><p>${data.family.birth_weight}<p></div>
      <h3>Babies Birth Length</h3>
      <div><p>${data.family.birth_length}<p></div>
      <h3>Babies Place of Birth</h3>
      <div><p>${data.family.hospital_name}<p></div>
      <h3>Babies Delivery Doctor's Name/h3>
      <div><p>${data.family.doctor_name}<p></div>
      <h3>Precious Memories of the Birth</h3>
      <div><p>${data.family.memory}<p></div>
      <br>
      `)
    // append trailHTML to content
    $('#content-family').append(familyHTML)
    $('#family-display-message').text('Successfully Completed Task, scroll down for results')
    $('#family-display-message').css('background-color', 'green')
    $('#family-display-message').fadeOut(10000)
    console.log('Successfully completed. Data is :', data)
  })
}

const onGetSuccess = function (data) {
          $('#content-family').html('')
      // console.table(data.trails)
      // loop through API response data
      // build HTML element with data
        const familyHTML = (`
          <h3>Babies Given Name</h3>
          <div><p>${data.family.given_name}<p></div>
          <h3>Babies Family Name</h3>
          <div><p>${data.family.family_name}<p></div>
          <h3>Babies Birth Date</h3>
          <div><p>${data.family.birth_date}<p></div>
          <h3>Babies Birth Weight</h3>
          <div><p>${data.family.birth_weight}<p></div>
          <h3>Babies Birth Length</h3>
          <div><p>${data.family.birth_length}<p></div>
          <h3>Babies Place of Birth</h3>
          <div><p>${data.family.hospital_name}<p></div>
          <h3>Babies Delivery Doctor's Name/h3>
          <div><p>${data.family.doctor_name}<p></div>
          <h3>Precious Memories of the Birth</h3>
          <div><p>${data.family.memory}<p></div>
          <br>
        `)
        // append trailHTML to content
        $('#content').append(trailHTML)
        $('#family-display-message').text('Successfully Completed Task, scroll down for results')
        $('#family-display-message').css('background-color', 'green')
        $('#family-display-message').fadeOut(10000)
        console.log('Successfully completed. Data is :', data)
    }

  // reset form
  $('#familiess-show').trigger("reset")

const onCreateFirstsSuccess = function (data) {
  $('#content-firsts').html('')
      // console.table(data.firsts)
      // loop through API response data
      // build HTML element with data
        const firstsHTML = (`
          <h3>Babies First Smile</h3>
          <div><p>${data.firsts.smile}<p></div>
          <h3>Babies First Laugh</h3>
          <div><p>${data.firsts.laugh}<p></div>
          <h3>Babies First Time Rolling Over</h3>
          <div><p>${data.firsts.roll_over}<p></div>
          <h3>Babies First Time Sitting Up</h3>
          <div><p>${data.firsts.sitting_up}<p></div>
          <h3>Babies First Tooth</h3>
          <div><p>${data.firsts.tooth}<p></div>
          <h3>Babies First Kisses</h3>
          <div><p>${data.firsts.kisses}<p></div>
          <h3>Babies First Time Crawling/h3>
          <div><p>${data.firsts.crawling}<p></div>
          <h3>Babies First Foods</h3>
          <div><p>${data.firsts.foods}<p></div>
          <h3>Babies First Time Standing</h3>
          <div><p>${data.firsts.standing}<p></div>
          <h3>Babies First Time Waving Bye-Bye</h3>
          <div><p>${data.firsts.waving}<p></div>
          <h3>Babies First Steps</h3>
          <div><p>${data.firsts.walking}<p></div>
          <h3>Babies First Words</h3>
          <div><p>${data.firsts.words}<p></div>
          <h3>Babies First Time Saying Mama and Dada</h3>
          <div><p>${data.firsts.mama_dada}<p></div>
          <h3>Babies First Haircut</h3>
          <div><p>${data.firsts.haircut}<p></div>
          <h3>Babies First Birthday</h3>
          <div><p>${data.firsts.birthday}<p></div>
          <h3>Other Precious First Memories</h3>
          <div><p>${data.firsts.other}<p></div>
          <br>
        `)
        // append familyHTML to content
        $('#content-firsts').append(firstsHTML)
  $('#firsts-display-message').html('You created a new memory!')
  $('#firsts-display-message').text('Successfully Created New Memory')
  $('#firsts-display-message').css('background-color', 'green')
  $('#firsts-display-message').fadeOut(10000)
  // console.log('Successfully run. Data is :', data)
  // reset form
  $('#firsts-create').trigger("reset")
}

const onCreateFavoritesSuccess = function (data) {
  console.log('Favorites data is ' (data))
  $('#content-favorites').html('')
      // console.table(data.favorites)
      // loop through API response data
      // build HTML element with data
        const favoritesHTML = (`
          <h3>Babies Favorite Foods</h3>
          <div><p>${data.favorites.foods}<p></div>
          <h3>Babies Favorite Songs/Lullabyes</h3>
          <div><p>${data.favorites.songs}<p></div>
          <h3>Babies Favorite Toys</h3>
          <div><p>${data.favorites.toys}<p></div>
          <h3>Other Babies Favorites</h3>
          <div><p>${data.favorites.other}<p></div>
          <br>
        `)
        // append familyHTML to content
        $('#content-favorites').append(favoritesHTML)
  $('#favorites-display-message').html('You created a new memory!')
  $('#favorites-display-message').text('Successfully Created New Memory')
  $('#favorites-display-message').css('background-color', 'green')
  $('#favorites-display-message').fadeOut(10000)
  // console.log('Successfully run. Data is :', data)
  // reset form
  $('#favorites-create').trigger("reset")
}

const onFailure = function(data){
  // log the error
  // console.error(data)

  // display error to user
  $('#family-display-message').html('Something went wrong, please try again.')
  $('#family-display-message').text('Error on submit')
  $('#family-display-message').css('background-color', 'red')
  // console.error('Failure when command ran. Error is :', error)
}

module.exports = {
  // onIndexSuccess,
  // onGetSuccess,
  // onDestroySuccess,
  // onUpdateSuccess,
  onCreateFamilySuccess,
  onIndexSuccess,
  onGetSuccess,
  onCreateFirstsSuccess,
  onCreateFavoritesSuccess,
  onFailure
}

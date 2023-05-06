// Session List Updater
let sessions = lightdm.sessions
let num_ses = sessions.length
let current_session = 0
const session = document.getElementById("session")


session.innerHTML = sessions[current_session].name
function changeSession() {
  if (current_session < num_ses-1) {
    current_session = current_session + 1
  } else {
    current_session = 0
  }
  session.innerHTML = sessions[current_session].name
}


// Authentication handler
const form = document.querySelector("form#login")

function getArrayForm(inputs) {
  if (!inputs) return {}
  var data = {}
  inputs.forEach(x => {
    data[x.name] = x.value
  })
  return data
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  var inputs = form.querySelectorAll("input")
  var data = getArrayForm(inputs)
  if (Object.keys(data).length === 0) return

  lightdm.cancel_authentication()
  lightdm.authenticate(data.user)
  await wait(100)
  lightdm.respond(data.password)
  await wait(100)
  lightdm.start_session(sessions[current_session].key)
})
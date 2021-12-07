const socket = io()

const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')

chat.addEventListener('submit', event => {
  event.preventDefault(),
  socket.emit('chat', Input.value),
  Input.value = ''
})

const chatWindow = document.querySelector('.chat-window')

const renderMessage = message => {
    const div = document.createElement('div')
    div.classList.add('render-message')
    div.innerText = message
    chatWindow.appendChild(div)
  }

socket.on('chat', message => {
    console.log('From server: ', message)
    renderMessage(message)
  })

// const getCommonInterests = async () => {
//   const interests1 = await axios.post("http://localhost:5000/events", {
//     "event": "getProfile",
//     "profileId": "1"
//   }).catch((err) => {
//     console.log(err);
//   });

//   const interests2 = await axios.post("http://localhost:5000/events", {
//     "event": "getProfile",
//     "profileId": "2"
//   }).catch((err) => {
//     console.log(err);
//   });

//   const common_interests = await axios.post("http://localhost:5000/events", {
//     "event": "getCommonInterests",
//     "interests1": interests1.data[0].interests,
//     "interests2": interests2.data[0].interests
//   }).catch((err) => {
//     console.log(err);
//   });
  
//   document.getElementById("interests").innerHTML = "You're common interests are " + common_interests.data;
// }
// getCommonInterests();
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBIBV_WULRCbh_ZMECzN4oa60L6-EdzW-U",
  authDomain: "lootbox-61fd1.firebaseapp.com",
  databaseURL: "https://lootbox-61fd1.firebaseio.com",
  projectId: "lootbox-61fd1",
  storageBucket: "",
  messagingSenderId: "649467894075",
  appId: "1:649467894075:web:17661ab53162f81a"
};
firebase.initializeApp(config);

// create a reference to messages collection
const messagesRef = firebase.database().ref("messages");

// forms working
// listen via id
document.getElementById("contact-form").addEventListener("submit", submitForm);

// submits the for,
function submitForm(e) {
  e.preventDefault();
  const name = getValues("Name");
  const company = getValues("Company");
  const email = getValues("E-mail");
  const phone = getValues("Phone");
  const subject = getValues("Message");
  console.log(name);
  console.log(company);
  console.log(email);
  console.log(phone);
  console.log(subject);
  // saves the message in firebase
  saveMessage(name, company, email, phone, subject);
  // show alert that message has been sent
  document.getElementById("Name").value = "";
  document.getElementById("Company").value = "";
  document.getElementById("Phone").value = "";
  document.getElementById("E-mail").value = "";
  document.getElementById("Message").value =
    "Thanks for Contacting we will get back to you :)";
}
// function to get form values
function getValues(id) {
  return document.getElementById(id).value;
}

//saves message to firebase
function saveMessage(name, email, phone, company, subject) {
  const newMessage = messagesRef.push();
  newMessage.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: subject,
    date: new Date().toDateString(),
    time: new Date().toTimeString()
  });
}

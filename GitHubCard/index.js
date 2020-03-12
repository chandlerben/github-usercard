
/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardsElement = document.querySelector('.cards')
axios.get(`https://api.github.com/users/chandlerben`)
  .then(response => {
    const myData = response.data
    cardsElement.appendChild(cardCreation(myData))

  })
  .catch(error => {
    console.log(`There was an error: ${error}`)
  })


/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/
const followersUsernames = [
  `tetondan`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell`]

followersUsernames.forEach(element => {
  axios.get(`https://api.github.com/users/${element}`)
    .then(response => {
      const userData = response.data;
      cardsElement.appendChild(cardCreation(userData))
    })
})
/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreation(arg) {
  // Element Creation
  const mainDiv = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const heading = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followerCount = document.createElement('p');
  const followingCount = document.createElement('p');
  const bio = document.createElement('p');
  // Class Adding
  mainDiv.classList.add('card');
  cardInfo.classList.add('card-info');
  heading.classList.add('name');
  username.classList.add('username');
  // Element Content
  userImg.src = arg.avatar_url;
  heading.textContent = arg.name;
  username.textContent = arg.login;
  location.textContent = `Location: ${arg.location}`;
  const ProfileLink = arg.html_url;
  profile.innerHTML = `Profile: ${ProfileLink.link(arg.html_url)}`;
  followerCount.textContent = `Followers: ${arg.followers}`
  followingCount.textContent = `Followers: ${arg.following}`
  bio.textContent = `Bio: ${arg.bio}`
  // Nest Children
  mainDiv.appendChild(userImg)
  mainDiv.appendChild(cardInfo)
  cardInfo.appendChild(heading)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followerCount)
  cardInfo.appendChild(followingCount)
  cardInfo.appendChild(bio)

  return mainDiv
}



/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function createGithubCard(giturl) {
  const gitCard = document.createElement('div'),
    cardImg = document.createElement('img'),
    cardInfo = document.createElement('div')
  userName = document.createElement('h3')
  cardUserName = document.createElement('p'),
    cardLocation = document.createElement('p'),
    cardProfile = document.createElement('p'),
    cardProfileLink = document.createElement('a'),
    cardFollowers = document.createElement('p'),
    cardFollowing = document.createElement('p'),
    cardBio = document.createElement('p');

  cardImg.src = giturl.avatar_url;
  userName.textContent = giturl.name;
  cardUserName.textContent = giturl.login;
  cardLocation.textContent = `Location: ${giturl.location}`;
  cardProfileLink.href = giturl.html_url;
  cardProfileLink.textContent = giturl.html_url;
  cardProfile.textContent = "Profile: ";
  cardFollowers.textContent = `Followers: ${giturl.followers}`;
  cardFollowing.textContent = `Following: ${giturl.following}`;
  cardBio.textContent = `Bio: ${giturl.bio}`;

  card.append(cardImg);
  card.append(cardInfo);
  cardInfo.append(userName);
  cardInfo.append(cardUserName);
  cardInfo.append(cardLocation);
  cardInfo.append(cardProfile);
  cardInfo.append(cardFollowers);
  cardInfo.append(cardFollowing);
  cardInfo.append(cardBio)
  cardProfile.append(cardProfileLink)

  // followersImg.src = giturl.avatar_url
  // userName.textContent = giturl.name
  // cardInfo.append(userName)


  // Array.from(giturl.forEach(value => {

  //   let pTag = document.createElement('p')
  //   pTag.textContent = value

  //   cardInfo.append(pTag)


  // })

  // console.log(pTag)
  // console.log(cardInfo)
  userName.classList.add('name')
  cardInfo.classList.add('card-info')
  gitCard.classList.add('card')
  cardUserName.classList.add('username');


  console.log(cardInfo)

  //   gitCard.append(followersImg)
  //   gitCard.append(cardInfo)
  return gitCard
}
const card = document.querySelector('.cards')




// axios
axios.get("https://api.github.com/users/dr3apap")
  .then(response => {
    console.log(response)
    createGithubCard(response.data)



  })
  .catch(error => {
    console.log('The data was not returned', error)

  })



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

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

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

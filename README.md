# Acciojob_Weekly_Contest_F4_22.04.2023
- This is a SPA project built in ReactJS with the help of TailwindCSS.
- Deployed Link: https://shubham-lolusare.github.io/Acciojob_Weekly_Contest_F4_22.04.2023/

# Task
- Execute dummy authentication using api given at https://dummyjson.com/docs/auth
- Make a login ui and a profile page, the login takes only username and password and has a login button.
- Take the username and password from the user and then on click of the log in button send a post request at the api given in the link above.
- The post request should look like this-
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username:${usernameState},
      password:${passwordState},
    })
  })
  .then(res => res.json())
  .then(console.log);
- If the response is 200 OK, then save the token and the id in local storage and send the user to profile page.
- Inside the profile page , make a useeffect which sends a fetch request at https://dummyjson.com/users/${id} , where id is the id you saved in local storage.
- Save the user object in a useState and display all of the information you receive.
- Use any one of the usernames and passwords given below to actually log in and get a successful response, if the response is not 200 OK or successful then show the error provided by the api in the frontend on login.
- Dummy Credentials to get a successful response-
  Username - atuny0 , Password - 9uQFF1Lh
  Username - hbingley1 , password - CQutx25i8r
  Username - rshawe2 , password - OWsTbMUgFc
- You can get more valid usernames and password from- https://dummyjson.com/users
- If its an invalid username or password the login api will automatically show an error.

# Marking Scheme
- Login UI (10 points)
- Profile Page UI (10 points)
- Authentication UI (30 points)
- Profile Page (40 points)
- Deployment (10 points)

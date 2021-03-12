console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email , password){
          return new Promise ( (resolve,reject) => {
                    setTimeout(() => {
                              if (usersDB[email]!==undefined){
                                        console.log("Now  we have the data of the user", email);
                                        resolve( {userEmail: email} );        
                              }else{
                                        reject("User not found! ");
                              }
                    }, 3000);
          })
}

function getUserVideos(email){
          return new Promise((resolve,reject) =>{
                    setTimeout(() => {
                              if (usersDB[email].length>0){
                                        resolve(usersDB[email]);
                              }else{
                                        reject("Video not found!");
                              }
                    }, 2000);
          })
}

function videoDetails(video){
          new Promise((resolve,reject) =>{
                    setTimeout(() => {
                              if (video.title!=undefined){
                                        resolve(video.title); 
                              }else{
                                        reject("Video Title not found! ");
                              }
                    }, 2000);   
          })
}

function displayError(errorMessage){
          console.error(new Error(errorMessage));
}

const getPassedUsersFirstVideoTitle = (user) => {
          loginUser(  user , 1234 )
                    .then( (user) => {
                              console.log("user: ",  user);
                              return getUserVideos(user.userEmail);
                    })
                    .then( (videos) => {
                              console.log("videos : ", videos);
                              return videoDetails(videos[0]);
                    })
                    .then( (title) => console.log(title))
                    .catch( (err) => displayError(err));
}



console.log("Finish");
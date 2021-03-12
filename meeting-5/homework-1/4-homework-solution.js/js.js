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
                              console.log(video);
                              if (video.title!==undefined){
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

const getPassedUsersFirstVideoTitle = async (user) => {
          try{
                    let User= await loginUser( user,1234);
                    console.log("user : ",User);
                    let videos=await getUserVideos(User.userEmail);
                    console.log("videos : " , videos);
                    let title=await videoDetails(videos[0]);
                    console.log(title);     
          } catch (err){ 
                    displayError(err);
          }
}


console.log("Finish");
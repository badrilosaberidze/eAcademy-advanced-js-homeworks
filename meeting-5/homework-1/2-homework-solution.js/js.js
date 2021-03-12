console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email , password , callback , Ecallback){
          setTimeout(() => {
                    if (usersDB[email]!=undefined){
                              console.log("Now we have the data of the user" , email);
                              callback( { userEmail: email } );     
                    }else{
                              Ecallback(" User not found! ");
                    }
          }, 3000);
}

function getUserVideos(email , callback , Ecallback){
          setTimeout(() => {
                    if (usersDB[email].length>0){
                              callback(usersDB[email]); 
                    }else{
                              Ecallback(" Video not found! ");
                    }  
          }, 2000);
}

function videoDetails(video , callback , Ecallback){
          setTimeout(() => {
                    if (video.title!=undefined){
                              callback(video.title); 
                    }else{
                              Ecallback("Video Title not found! ");
                    }
          }, 2000);
}

function displayError(errorMessage){
          console.error(new Error(errorMessage));
}

const getPassedUsersFirstVideoTitle = (user) => {
          return loginUser( user  , 1234 , ( email ) =>{
                    console.log("user : " , user);
                    getUserVideos(email.userEmail, ( videos ) =>{
                              console.log("videos : ", videos );
                              videoDetails(videos[0] , ( title ) =>{
                                        console.log(title);
                              },(error) => displayError(error))
                    },(error) => displayError(error))
          },(error) => displayError(error))
}



console.log("Finish");
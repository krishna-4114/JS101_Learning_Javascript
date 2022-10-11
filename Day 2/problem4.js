let database_username = "xyz@gmail.com";
let database_pass = "123@";

user_name = "xyz@gmail.com";
pass = "123@";

if (database_username==user_name){
  if(database_pass==pass){
    console.log("successfully logedin");
  }
  else{
    console.log("wrong password");
  }
}else{
  console.log("wrong credential");
}
// Add your code here 'http://localhost:3000/dogs'

// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);

//   })
// });
// .
// .
// .
// .
// .
// .
// .
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  // method: "POST" is missing from the object below
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

function submitData(userName,userEmail){
    const user = {
        name: userName,
        email: userEmail,
    };
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      };
    return fetch("http://localhost:3000/users",configurationObject)
        .then(function (response){
            return response.json();
        })
        .then(function(data) {
            // here
            
            let user = document.createElement('h1');
            let id = document.createElement('h1');
            let email = document.createElement('h2');
            user.textContent = data.name;
            id.textContent = data.id;
            email.textContent = data.email;
            document.body.appendChild(id);
            document.body.appendChild(user);
            document.body.appendChild(email);
            
        })
        .catch(function(error){
            alert("ERROR FETCHING USERS");
            let err = document.createElement('h1');
            err.textContent = error.message;
            document.body.appendChild(err);
        })
    }


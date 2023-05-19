document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var data = {
      email: email,
      password: password
    };
    
    fetch("https://substantial-condition-production.up.railway.app/api/v1/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(responseData) {
      if (responseData.message === "User logged in successfully") {
        // Save the access token in local storage
        localStorage.setItem("accessToken", responseData.accessToken);
        
         // Save logged in user details in localStorage
      localStorage.setItem("user", JSON.stringify({
        email: email
      }));
        // Redirect to another page or perform any other action
        window.location.href = "index.html";
      } else {
        alert(responseData.message);
      }
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
  });
  
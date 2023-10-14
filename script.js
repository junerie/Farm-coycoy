$(document).ready(function(){
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      $(".navbar-collapse").collapse('hide');
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
  
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  })

  // Google map Fetch Debug need improvement
  function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

    // database 
    const { MongoClient } = require('mongodb');

    const uri = 'mongodb+srv://vicoyjunerie33:@l03e1t3Vlog23@cluster0.rxi3t9g.mongodb.net/';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('my_database');
const collection = db.collection('order');



collection.insertOne(data, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Data inserted successfully');
  }
});


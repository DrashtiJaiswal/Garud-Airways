document.getElementById("flightForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      const origin = document.getElementById("origin").value;
      const destination = document.getElementById("destination").value;
      const departureDate = document.getElementById("departureDate").value;
  
      const apiKey = "YOUR_SKYSCANNER_API_KEY";  // Get this from Skyscanner Developer Portal
      const apiUrl = `https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/${origin}/${destination}/${departureDate}?apiKey=${apiKey}`;
  
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              displayResults(data);
          })
          .catch(error => console.error("Error fetching flights:", error));
  });
  
  function displayResults(data) {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
  
      if (!data.Quotes || data.Quotes.length === 0) {
          resultsDiv.innerHTML = "<p>No flights found.</p>";
          return;
      }
  
      data.Quotes.forEach(quote => {
          resultsDiv.innerHTML += `
              <div class="flight">
                  <p>Price: $${quote.MinPrice}</p>
                  <p>Airline: ${quote.OutboundLeg.CarrierIds}</p>
                  <p>Departure: ${quote.OutboundLeg.DepartureDate}</p>
              </div>
              <hr>
          `;
      });
  }
  
// Sample Data for Hotels (12 Hotels Now)
const experiences = [
      { id: 1, title: "Grand Elite Hotel", description: "Luxury stay with sea view.", price: 220, coverImg: "h1.jpg", stats: { rating: 4.9, reviewCount: 120 }, location: "Maldives", openSpots: 5 },
      { id: 2, title: "Skyline View Resort", description: "Infinity pool overlooking the city.", price: 180, coverImg: "h2.jpg", stats: { rating: 4.7, reviewCount: 85 }, location: "Dubai", openSpots: 8 },
      { id: 3, title: "Ocean Breeze Suites", description: "Beachside suite with breathtaking views.", price: 150, coverImg: "h3.jpg", stats: { rating: 4.8, reviewCount: 95 }, location: "Bali", openSpots: 3 },
      { id: 4, title: "Mountain Escape Lodge", description: "Serene mountain cabin.", price: 130, coverImg: "h4.jpg", stats: { rating: 4.6, reviewCount: 60 }, location: "Switzerland", openSpots: 10 },
      { id: 5, title: "The Royal Heritage", description: "Palace-themed hotel.", price: 250, coverImg: "h5.jpg", stats: { rating: 4.9, reviewCount: 110 }, location: "India", openSpots: 2 },
      { id: 6, title: "Seaside Serenity Hotel", description: "Wake up to the ocean breeze.", price: 200, coverImg: "h6.jpg", stats: { rating: 4.7, reviewCount: 78 }, location: "Greece", openSpots: 4 },
  
      // Additional 6 hotels for "Explore More"
      { id: 7, title: "Sunset Bay Resort", description: "Stunning oceanfront hotel.", price: 195, coverImg: "h7.jpg", stats: { rating: 4.8, reviewCount: 72 }, location: "Thailand", openSpots: 6 },
      { id: 8, title: "Glacier Peaks Lodge", description: "Scenic mountain retreat.", price: 170, coverImg: "h8.jpg", stats: { rating: 4.7, reviewCount: 65 }, location: "Canada", openSpots: 7 },
      { id: 9, title: "Safari Bliss", description: "Luxury lodge in the wild.", price: 210, coverImg: "h9.jpg", stats: { rating: 4.9, reviewCount: 90 }, location: "South Africa", openSpots: 3 },
      { id: 10, title: "Tropical Paradise", description: "Exotic getaway with crystal-clear beaches.", price: 240, coverImg: "h10.jpg", stats: { rating: 5.0, reviewCount: 88 }, location: "Hawaii", openSpots: 5 },
      { id: 11, title: "Nordic Haven", description: "Relax in a peaceful Nordic retreat.", price: 185, coverImg: "h11.jpg", stats: { rating: 4.6, reviewCount: 55 }, location: "Norway", openSpots: 4 },
      { id: 12, title: "Urban Chic Suites", description: "Modern city hotel with elegance.", price: 225, coverImg: "h12.jpg", stats: { rating: 4.8, reviewCount: 76 }, location: "New York", openSpots: 9 }
  ];
  
  // Function to Render Cards (6 initially, then 12 after clicking Explore More)
  let showAll = false;
  function renderCards() {
      const container = document.getElementById("card-container");
      container.innerHTML = ""; // Clear previous content
  
      const displayedHotels = showAll ? experiences : experiences.slice(0, 6); // Show 6 first, all after clicking
  
      displayedHotels.forEach(item => {
          const card = document.createElement("div");
          card.classList.add("card");
  
          card.innerHTML = `
              <img src="${item.coverImg}" alt="${item.title}">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <p class="rating">⭐ ${item.stats.rating} (${item.stats.reviewCount} reviews)</p>
              <p class="price">$${item.price} per night</p>
              <p><strong>Location:</strong> ${item.location}</p>
              <p><strong>Open Spots:</strong> ${item.openSpots > 0 ? item.openSpots : "Sold Out"}</p>
              <button class="book-btn">Book Now</button>  <!-- ✅ "Book Now" button -->
          `;
  
          container.appendChild(card);
      });
  
      // Hide Explore More button after showing all
      document.getElementById("explore-btn").style.display = showAll ? "none" : "block";
  }
  
  // Load More Function
  function loadMore() {
      showAll = true;
      renderCards();
  }
  
  // Run Function on Page Load
  document.addEventListener("DOMContentLoaded", () => {
      renderCards();
  });
  
  function filterCards() {
      const searchValue = document.getElementById("search-bar").value.toLowerCase();
      const searchCategory = document.getElementById("search-category").value;
      const container = document.getElementById("card-container");
      container.innerHTML = ""; // Clear previous content
  
      // Filter hotels based on selected category
      const filteredHotels = experiences.filter(hotel => {
          if (searchCategory === "title") {
              return hotel.title.toLowerCase().includes(searchValue);
          } else if (searchCategory === "location") {
              return hotel.location.toLowerCase().includes(searchValue);
          } else if (searchCategory === "price") {
              return hotel.price.toString().includes(searchValue);
          }
      });
  
      // Display filtered hotels
      filteredHotels.forEach(item => {
          const card = document.createElement("div");
          card.classList.add("card");
  
          card.innerHTML = `
              <img src="${item.coverImg}" alt="${item.title}">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <p class="rating">⭐ ${item.stats.rating} (${item.stats.reviewCount} reviews)</p>
              <p class="price">$${item.price} per night</p>
              <p><strong>Location:</strong> ${item.location}</p>
              <p><strong>Open Spots:</strong> ${item.openSpots > 0 ? item.openSpots : "Sold Out"}</p>
              <button class="book-btn">Book Now</button>
          `;
  
          container.appendChild(card);
      });
  
      // Show "No results" message if no hotels match search
      if (filteredHotels.length === 0) {
          container.innerHTML = "<p class='no-results'>No hotels found.</p>";
      }
  }
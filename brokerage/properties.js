// Properties JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Sample property data (in a real app, this would come from the server)
  const properties = [
    {
      id: 1,
      title: "Beautiful Family House",
      type: "house",
      transaction: "sale",
      price: 3500000,
      location: "Hirmata Mentina",
      bedrooms: 4,
      bathrooms: 2,
      area: "200 sqm",
      description:
        "Spacious family home with garden and garage. Perfect for a growing family.",
      image: "images/property1.jpg",
    },
    {
      id: 2,
      title: "Modern Apartment",
      type: "apartment",
      transaction: "rent",
      price: 15000,
      location: "Hirmata Mentina",
      bedrooms: 2,
      bathrooms: 1,
      area: "90 sqm",
      description:
        "Modern apartment with great views and amenities. Close to shops and transport.",
      image: "images/property2.jpg",
    },
    {
      id: 3,
      title: "Commercial Space",
      type: "commercial",
      transaction: "sale",
      price: 7500000,
      location: "Hirmata Mentina",
      area: "300 sqm",
      description:
        "Prime commercial space in the heart of the business district. Great for retail or offices.",
      image: "images/property3.jpg",
    },
    {
      id: 4,
      title: "Vacant Land",
      type: "land",
      transaction: "sale",
      price: 2500000,
      location: "Hirmata Mentina",
      area: "500 sqm",
      description:
        "Flat, cleared land ready for development. Great investment opportunity.",
      image: "images/property4.jpg",
    },
  ];

  // Display properties
  const propertyGrid = document.getElementById("propertyGrid");
  if (propertyGrid) {
    properties.forEach((property) => {
      const propertyCard = document.createElement("div");
      propertyCard.className = "property-card";

      propertyCard.innerHTML = `
                <div class="property-image" style="background-image: url('${
                  property.image
                }')"></div>
                <div class="property-details">
                    <h3>${property.title}</h3>
                    <div class="property-price">${
                      property.transaction === "rent"
                        ? property.price.toLocaleString() + " ETB/month"
                        : property.price.toLocaleString() + " ETB"
                    }</div>
                    <div class="property-meta">
                        <span>${property.location}</span>
                        ${
                          property.bedrooms
                            ? `<span>${property.bedrooms} beds</span>`
                            : ""
                        }
                    </div>
                    <p class="property-description">${property.description}</p>
                    <div class="property-actions">
                        <a href="#" class="btn">View Details</a>
                    </div>
                </div>
            `;

      propertyGrid.appendChild(propertyCard);
    });
  }

  // Search form handling
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const propertyType = document.getElementById("propertyType").value;
      const transactionType = document.getElementById("transactionType").value;
      const priceRange = document.getElementById("priceRange").value;
      const location = document.getElementById("location").value;

      // In a real application, this would filter properties from the server
      console.log("Search filters:", {
        propertyType,
        transactionType,
        priceRange,
        location,
      });

      // For demo purposes, just show an alert
      alert(
        "Search functionality would filter properties based on your criteria in a real application."
      );
    });
  }
});

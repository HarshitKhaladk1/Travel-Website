const data = {
  Japan: [{
    name: 'Tokyo, Japan',
    price: '$500',
    img: 'https://th.bing.com/th/id/OIP.vpdcRmpqDguXiFGpTQojwgHaE8?rs=1&pid=ImgDetMain',
    desc: 'Experience tech and tradition in Japan.',
  }],
  Australia: [{
    name: 'Sydney, Australia',
    price: '$500',
    img: 'https://kiswa.net/themes/star-travel/demo/demo-ltr/images/tour-list-3.jpg',
    desc: 'Beautiful beaches and city life.',
  }],
  UK: [{
    name: 'London, UK',
    price: '$300',
    img: 'https://kiswa.net/themes/star-travel/demo/demo-ltr/images/tour-list-2.jpg',
    desc: 'Explore culture.',
  }],
  India: [{
    name: 'Mumbai , India',
    price: '$300',
    img: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/bbc886323ff07d295157ea35f423e121-gateway-of-india.jpg',
    desc: 'Explore the rich history and culture.',
  }],
  France: [{
    name: 'Paris , France',
    price: '$200',
    img: 'https://www.chooseparisregion.org/sites/default/files/news/6---Tour-Eiffel_AdobeStock_644956457_1920_72dpi.jpg',
    desc: 'The City of Light offers an enchanting mix of art, history.',
  }],
  Indonesia: [{
    name: 'Bali , Indonesia',
    price: '$200',
    img: 'https://media.digitalnomads.world/wp-content/uploads/2021/01/20120709/bali-for-digital-nomads.jpg',
    desc: 'Experience the lush jungles, serene beaches, and vibrant culture of Bali.',
  }],
};

function showCities() {
  const country = document.getElementById('country').value;
  const cardContainer = document.getElementById('cards');
  cardContainer.innerHTML = '';
  if (data[country]) {
    data[country].forEach((city, index) => {
      cardContainer.innerHTML += `
        <div class="card">
          <img src="${city.img}" alt="${city.name}">
          <a class="prise">${city.price}</a>
          <h4>${city.name}</h4>
          <p>${city.desc}</p>
          <div class="review-content">
            <div class="review">
              <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
              <a>(20 Review)</a>
            </div>
            <div class="days">
              <i class="fa fa-clock-o"></i>
              <a>5 Days</a>
            </div>
          </div>
          <button onclick="openBooking('${city.name}', '${city.price}')">Book Trip</button>
        </div>
      `;
    });
  }
}

let selectedTrip = {};

function openBooking(destination, price) {
  selectedTrip = { destination, price };
  document.getElementById('bookingForm').style.display = 'block';
}

function submitBooking() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const aadhaar = document.getElementById("aadhaar").value;
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").value;
  const travelClass = document.getElementById("class").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;
  
  const billSection = document.getElementById("bill");
  
  if (!name || !address || !aadhaar || !email) {
    alert("Please fill all booking form fields.");
    return;
  }
  
  const billHTML = `
    <h2>🧾 Booking Confirmation</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Aadhaar:</strong> ${aadhaar}</p>
    <p><strong>Destination:</strong> ${country}</p>
    <p><strong>Class:</strong> ${travelClass}</p>
    <p><strong>Adults:</strong> ${adults} | <strong>Children:</strong> ${children}</p>
    <p>📅 Booking Date: ${new Date().toLocaleDateString()}</p>
    <p>✅ Your booking has been successfully submitted.</p>
  `;
  
  sessionStorage.setItem("userBill", billHTML);
  billSection.innerHTML = billHTML;
  document.getElementById("bookingForm").style.display = "none";
  billSection.style.display = "block";
}

function showSavedBill() {
  const bill = sessionStorage.getItem("userBill");
  const popup = document.getElementById("savedBillPopup");
  if (bill) {
    popup.innerHTML = bill + '<br><br><button onclick="closeBillPopup()">Close</button>';
    popup.style.display = "block";
  } else {
    alert("No bill found! Please complete a booking first.");
  }
}

function closeBillPopup() {
  document.getElementById("savedBillPopup").style.display = "none";
}

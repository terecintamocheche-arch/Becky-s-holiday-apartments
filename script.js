// Becky's Holiday Apartments JavaScript

console.log("Welcome to Becky's Holiday Apartments!");

// ==============================
// BECKY'S HOLIDAY APARTMENTS
// BOOKING LOCAL STORAGE
// ==============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const booking = {

            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            apartment: document.getElementById("apartment").value,
            checkin: document.getElementById("checkin").value,
            checkout: document.getElementById("checkout").value,
            message: document.getElementById("message").value

        };

        localStorage.setItem("booking", JSON.stringify(booking));

        alert("Booking saved successfully!");

        bookingForm.reset();

    });

}

window.addEventListener("load", function(){

    const booking = JSON.parse(localStorage.getItem("booking"));

    if(booking){

        document.getElementById("name").value = booking.name || "";
        document.getElementById("email").value = booking.email || "";
        document.getElementById("phone").value = booking.phone || "";
        document.getElementById("apartment").value = booking.apartment || "";
        document.getElementById("checkin").value = booking.checkin || "";
        document.getElementById("checkout").value = booking.checkout || "";
        document.getElementById("message").value = booking.message || "";

    }

});

const clearBooking = document.getElementById("clearBooking");

if(clearBooking){

    clearBooking.addEventListener("click", function(){

        localStorage.removeItem("booking");

        bookingForm.reset();

        alert("Saved booking cleared!");

    });

}
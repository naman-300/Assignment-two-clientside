document.addEventListener("DOMContentLoaded", function() {
    const studentIdElement = document.getElementById("myStudentId");
    const customNumberInput = document.getElementById("customNumber");
    const changeCustomColorBtn = document.querySelector(".custColor");
    const changeRandomColorBtn = document.querySelector(".randColor");
    const imageSelect = document.getElementById("imageSelect");
    const displayedImage = document.getElementById("images");

    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Adding images

    // Function to change background color based on input value
    function changeBackgroundColor(value) {
        let color;
        if (value < 0 || value > 100) {
            color = "red";
        } else if (value >= 0 && value <= 20) {
            color = "green";
        } else if (value > 20 && value <= 40) {
            color = "blue";
        } else if (value > 40 && value <= 60) {
            color = "orange";
        } else if (value > 60 && value <= 80) {
            color = "purple";
        } else if (value > 80 && value <= 100) {
            color = "yellow";
        }
        document.body.style.backgroundColor = color;
    }

    // Event listener for "Change custom color" button
    changeCustomColorBtn.addEventListener("click", function() {
        const inputValue = customNumberInput.value;
        if (inputValue !== "" && !isNaN(inputValue)) {
            const value = parseInt(inputValue);
            studentIdElement.textContent = "200552575"; 
            changeBackgroundColor(value);
        } else {
            alert("Please enter a valid number.");
        }
    });

    // Event listener for "Change random color" button
    changeRandomColorBtn.addEventListener("click", function() {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        studentIdElement.textContent = "200552575"; 
        changeBackgroundColor(randomValue);
    });

    // Populate select options with image names
    images.forEach(image => {
        const option = document.createElement("option");
        option.text = image;
        imageSelect.add(option);
    });

    // Event listener for image select change
    imageSelect.addEventListener("change", function() {
        const selectedImage = imageSelect.value;
        displayedImage.src = `img/${selectedImage}`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    const btns = document.querySelectorAll(".numericKeys");
    const allClearBtn = document.querySelector(".allClear");

    let value = 0;

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            const textContent = btn.textContent;
            value = parseFloat(textContent); // Convert text content to a float
            display.textContent += textContent; // Append text content directly to display
        });
    });

    allClearBtn.addEventListener("click", () => {
        display.textContent = "";
        value = 0; // Reset value to 0
    });
});

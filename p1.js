// ===== Payment Method Toggle =====
const methods = document.querySelectorAll(".method");

methods.forEach(method => {
    method.addEventListener("click", () => {
        methods.forEach(m => m.classList.remove("active"));
        method.classList.add("active");
    });
});


// ===== Card Number Formatting =====
const cardInput = document.querySelector('input[placeholder="XXXX XXXX XXXX XXXX"]');

if (cardInput) {
    cardInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "").substring(0, 16);
        let formatted = value.match(/.{1,4}/g);
        e.target.value = formatted ? formatted.join(" ") : "";
    });
}


// ===== Expiry Date Formatting (MM/YY) =====
const expiryInput = document.querySelector('input[placeholder="MM / YY"]');

if (expiryInput) {
    expiryInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "").substring(0, 4);

        if (value.length >= 3) {
            e.target.value = value.substring(0, 2) + " / " + value.substring(2);
        } else {
            e.target.value = value;
        }
    });
}


// ===== Simple CVV Lock (numbers only) =====
const cvvInput = document.querySelector('input[placeholder="CVV"]');

if (cvvInput) {
    cvvInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 4);
    });
}


// ===== Fake Pay Button Action (UI only) =====
const payBtn = document.querySelector(".pay-btn");

if (payBtn) {
    payBtn.addEventListener("click", () => {
        payBtn.innerHTML = "Processing...";
        payBtn.disabled = true;

        setTimeout(() => {
            payBtn.innerHTML = "Payment Successful ✓";
            payBtn.style.background = "#10b981";
        }, 1500);
    });
}
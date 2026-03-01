document.addEventListener("DOMContentLoaded", function () {
    // Skapa notis-element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #0055aa;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 9999;
    `;
    document.body.appendChild(notification);

    function showNotification(message) {
        notification.textContent = message;
        notification.style.opacity = '1';
        setTimeout(() => {
            notification.style.opacity = '0';
        }, 2500);
    }

    // Add to cart knappar
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            showNotification("✓ Produkt tillagd i varukorgen!");
        });
    });

    // Nyhetsbrev
    var newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            if (!name || !email) {
                showNotification("⚠️ Fyll i namn och e-post!");
            } else {
                showNotification("✓ Tack för din prenumeration!");
            }
        });
    }
});
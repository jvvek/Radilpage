document.addEventListener("DOMContentLoaded", () => {

    // Wszystkie elementy oprócz nav
    const elements = document.querySelectorAll(
        "section, footer, .product, .kontakt-main, .main-head, .products-main"
    );

    elements.forEach(el => {
        el.classList.add("animate");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => {
        observer.observe(el);
    });

});
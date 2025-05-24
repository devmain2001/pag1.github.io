document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM cargado completamente");

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (!menuToggle || !menu) {
        console.error("❌ No se encontraron uno o ambos elementos:");
        if (!menuToggle) console.warn("⚠️ .menu-toggle no encontrado");
        if (!menu) console.warn("⚠️ .menu no encontrado");
        return;
    }

    console.log("✅ Elementos encontrados. Asignando evento...");

    menuToggle.addEventListener('click', function () {
        console.log("🖱️ Botón clickeado. Alternando clase 'active'");
        menu.classList.toggle('active');
    });
});
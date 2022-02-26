const SIDEBAR_EL = document.getElementById("sidebar");

/**
 * sidebar collapse handler
 */
document.getElementById("btn-collapse").addEventListener("click", () => {
    SIDEBAR_EL.classList.toggle("collapsed");
});

/**
 * sidebar toggle handler (on break point )
 */
document.getElementById("btn-toggle").addEventListener("click", () => {
    SIDEBAR_EL.classList.toggle("toggled");
});

/**
 * toggle sidebar on overlay click
 */
document.getElementById("overlay").addEventListener("click", () => {
    SIDEBAR_EL.classList.toggle("toggled");
});

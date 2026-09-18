// mermaid-init.js - Chi dung khi bat MERMAID OFFLINE (xem README muc "Mermaid offline").
// Khi dung ban mermaid.min.js vendored (thay vi CDN cua Material), file nay
// khoi tao va render cac khoi .mermaid, tuong thich ca khi dieu huong dong.
(function () {
  function render() {
    if (!window.mermaid) return;
    try {
      window.mermaid.initialize({ startOnLoad: false, theme: "default" });
      window.mermaid.run({ querySelector: ".mermaid" });
    } catch (e) {
      console.error("[mermaid-init]", e);
    }
  }
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(render); // Material: chay lai moi lan doi trang
  } else {
    document.addEventListener("DOMContentLoaded", render);
  }
})();

import { Workbox } from "workbox-window";

export default function registerServiceWorker() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("sw.js");
    wb.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        if (confirm("New app update is available, click ok to refresh")) {
          window.location.reload();
        }
      }
    });

    wb.register();
  }
}

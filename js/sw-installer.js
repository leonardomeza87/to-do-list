export default function serviceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((reg) => console.log("Successful service worker registration", reg))
      .catch((err) => {
        console.warn("Error trying to register service worker", err);
      });
  }
}

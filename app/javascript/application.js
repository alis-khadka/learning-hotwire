// Entry point for the build script in your package.json

import "@hotwired/turbo-rails"
import "./controllers"

// Turbo.session.drive = false
// Turbo.setProgressBarDelay(0.5)

window.addEventListener("turbo:frame-render", (e) => {
    console.log("turbo:frame-render", e)
})

window.addEventListener("turbo:frame-load", (e) => {
    console.log("turbo:frame-load", e)
})

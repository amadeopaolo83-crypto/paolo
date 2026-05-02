// MESSAGGI DAL DRIVER
function send(type) {
  fetch("https://ntfy.sh/pitwall-fox-flatsix", {
    method: "POST",
    body: JSON.stringify({ type, from: "driver" }),
    headers: { "Content-Type": "application/json" }
  });
}

// MESSAGGI DAL BOX
function sendMessage(type) {
  fetch("https://ntfy.sh/pitwall-fox-flatsix", {
    method: "POST",
    body: JSON.stringify({ type, from: "box" }),
    headers: { "Content-Type": "application/json" }
  });
}

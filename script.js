const iframe = document.querySelector("iframe");
const button = document.querySelector("button");
const serverLogger = document.querySelector("ul");
console.log(button);

const player = VdoPlayer.getInstance(iframe);

let lastTotalPlayed = 0;
button.addEventListener("click", async function () {
  const totalPlayed = await player.api.getTotalPlayed();
  console.log({ totalPlayed });
  const totalPlayedDelta = totalPlayed - lastTotalPlayed;
  sendToServer(totalPlayedDelta);
  lastTotalPlayed = totalPlayed;
});

function sendToServer(totalPlayedDelta) {
  // this will recive the delta time, how much user has played from the last time event received
  const li = document.createElement("li");
  li.innerText = totalPlayedDelta;
  serverLogger.appendChild(li);
}

// Random quotes
const sleepQuotes = [
  "“Sleep is the best meditation.” – Dalai Lama",
  "“Early to bed, early to rise makes a man healthy, wealthy, and wise.” – Benjamin Franklin",
  "“A good laugh and a long sleep are the best cures in the doctor’s book.” – Irish Proverb",
  "“Sleep is the golden chain that ties health and our bodies together.” – Thomas Dekker",
  "“Man should forget his anger before he lies down to sleep.” – Gandhi"
];

// Sleep challenges
const sleepChallenges = [
  "🚫 No screens 30 minutes before bed tonight.",
  "🥤 Avoid caffeine after 4pm today.",
  "🛌 Go to bed 15 minutes earlier than usual.",
  "🌞 Get 15 minutes of sunlight in the morning.",
  "📖 Read 5 pages of a book instead of scrolling before bed."
];

// Random sleep tips
const sleepTips = [
  "Dark, quiet, and cool rooms help you sleep better 🌙",
  "Short naps (20 min) boost energy without grogginess ⚡",
  "Natural sunlight in the morning improves sleep rhythm ☀️",
  "Exercise during the day for deeper sleep 🏃‍♂️"
];

function calculateCycles() {
  const bedtimeInput = document.getElementById("bedtime").value;
  const resultsDiv = document.getElementById("results");
  const quoteDiv = document.getElementById("quote");
  const challengeDiv = document.getElementById("challenge");

  if (!bedtimeInput) {
    resultsDiv.innerHTML = "<p>Please select your bedtime ⏰</p>";
    return;
  }

  const [hours, minutes] = bedtimeInput.split(":").map(Number);
  let bedtime = new Date();
  bedtime.setHours(hours);
  bedtime.setMinutes(minutes);

  const cycleMinutes = 90;
  const suggestions = [];

  for (let i = 3; i <= 6; i++) {
    let wakeUp = new Date(bedtime.getTime() + i * cycleMinutes * 60000);
    let timeStr = wakeUp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    let hoursSlept = (i * cycleMinutes) / 60;

    suggestions.push({ cycle: i, time: timeStr, hours: hoursSlept });
  }

  let html = "<h2>Recommended Wake-Up Times:</h2>";
  suggestions.forEach(s => {
    html += `
      <div class="time-card">
        <span>After ${s.cycle} cycles (~${s.hours.toFixed(1)} hrs)</span>
        <strong>${s.time}</strong>
      </div>
      <div class="quality">${getSleepQuality(s.hours)}</div>
    `;
  });

  if (hours >= 1 && hours <= 4) {
    html += `<p class="note">⚠️ Going to bed this late may harm your natural rhythm. Aim for 10–11pm for better rest.</p>`;
  }

  resultsDiv.innerHTML = html;

  // Show random quote & challenge
  const randomQuote = sleepQuotes[Math.floor(Math.random() * sleepQuotes.length)];
  const randomChallenge = sleepChallenges[Math.floor(Math.random() * sleepChallenges.length)];
  quoteDiv.innerHTML = `💬 Quote: ${randomQuote}`;
  challengeDiv.innerHTML = `🎯 Challenge: ${randomChallenge}`;
}

// Nap calculator
function calculateNap() {
  const resultsDiv = document.getElementById("results");
  const quoteDiv = document.getElementById("quote");
  const challengeDiv = document.getElementById("challenge");

  const now = new Date();
  const shortNap = new Date(now.getTime() + 20 * 60000);
  const fullCycleNap = new Date(now.getTime() + 90 * 60000);

  let html = "<h2>Quick Nap Options:</h2>";
  html += `
    <div class="time-card">
      <span>Power Nap (20 min)</span>
      <strong>${shortNap.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</strong>
    </div>
    <div class="time-card">
      <span>Full Cycle Nap (90 min)</span>
      <strong>${fullCycleNap.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</strong>
    </div>
  `;

  resultsDiv.innerHTML = html;

  const randomQuote = sleepQuotes[Math.floor(Math.random() * sleepQuotes.length)];
  const randomChallenge = sleepChallenges[Math.floor(Math.random() * sleepChallenges.length)];
  quoteDiv.innerHTML = `💬 Quote: ${randomQuote}`;
  challengeDiv.innerHTML = `🎯 Challenge: ${randomChallenge}`;
}

// Sleep quality indicator
function getSleepQuality(hours) {
  if (hours < 5) return "⚠️ Poor sleep – you might feel tired.";
  if (hours >= 5 && hours < 7) return "🙂 Fair sleep – you’ll be okay.";
  if (hours >= 7 && hours <= 9) return "✅ Great sleep – optimal rest!";
  return "😴 Too much sleep – you may feel groggy.";
}

// Mood tracker
function trackMood(mood) {
  document.getElementById("mood-result").innerText = `You felt: ${mood}`;
}

// Star background generator
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${2 + Math.random() * 3}s`;
  starsContainer.appendChild(star);
}

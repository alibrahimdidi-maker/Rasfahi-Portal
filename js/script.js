// Current Date
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', dateOptions);

// Prayer Times Fetcher
async function getPrayerTimes() {
    try {
        const date = new Date();
        const timestamp = Math.floor(date.getTime() / 1000);
        // Male' Coordinates: 4.1755, 73.5093
        const response = await fetch(`https://api.aladhan.com/v1/timings/${timestamp}?latitude=4.1755&longitude=73.5093&method=1`);
        const data = await response.json();
        const timings = data.data.timings;

        document.getElementById('fajr-time').textContent = timings.Fajr;
        document.getElementById('sunrise-time').textContent = timings.Sunrise;
        document.getElementById('dhuhr-time').textContent = timings.Dhuhr;
        document.getElementById('asr-time').textContent = timings.Asr;
        document.getElementById('maghrib-time').textContent = timings.Maghrib;
        document.getElementById('isha-time').textContent = timings.Isha;

        document.getElementById('prayer-loading').style.display = 'none';
        document.getElementById('prayer-content').style.display = 'block';
    } catch (error) {
        console.error("Error fetching times:", error);
        document.getElementById('prayer-loading').textContent = "Error loading times";
    }
}
getPrayerTimes();
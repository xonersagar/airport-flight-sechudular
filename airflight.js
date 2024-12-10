
// JavaScript to handle flight search functionality

function searchFlights() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const resultsDiv = document.getElementById('results');

    if (!source || !destination || !date) {
        resultsDiv.innerHTML = '<p>Please fill in all fields to search for flights.</p>';
        return;
    }

    resultsDiv.innerHTML = `
        <h3>Search Results</h3>
        <p>Flights from <strong>${source}</strong> to <strong>${destination}</strong> on <strong>${date}</strong>:</p>
        <ul>
            <li>Flight 101 - Departure: 10:00 AM - Arrival: 12:00 PM</li>
            <li>Flight 202 - Departure: 2:00 PM - Arrival: 4:00 PM</li>
        </ul>
    `;
}

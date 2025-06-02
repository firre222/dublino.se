// Set the date we're counting down to (June 6, 2024 at 18:00 UTC)
const countDownDate = new Date("June 6, 2025 18:00:00 UTC").getTime();

// Function to update the countdown display
function updateCountdown() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results with smooth transitions
    const updateElement = (id, value) => {
        const element = document.getElementById(id);
        if (element && element.textContent !== value) {
            element.style.transform = 'scale(1.1)';
            element.textContent = value.toString().padStart(2, '0');
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        }
    };

    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);

    // If the countdown is finished, display the stream message
    if (distance < 0) {
        clearInterval(countdownTimer);
        const timer = document.getElementById('timer');
        timer.style.animation = 'fadeIn 0.5s ease-out';
        timer.innerHTML = `
            <div class="event-live">
                <h3>The event has started!</h3>
                <p>Watch live on Summit's stream</p>
                <a href="https://www.twitch.tv/summit1g" class="stream-link" target="_blank">
                    Join the Stream
                </a>
            </div>
        `;
    }
}

// Update the countdown immediately
updateCountdown();

// Update the countdown every 1 second
const countdownTimer = setInterval(updateCountdown, 1000);

// Add smooth scroll behavior for the "Learn More" button
document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.querySelector('a[href="#details"]');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const detailsSection = document.getElementById('details');
            detailsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}); 
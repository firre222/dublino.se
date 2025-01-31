// Create the announcement bar HTML content dynamically
const createAnnouncementBar = () => {
  const bar = document.createElement('div');
  bar.className = 'announcement-bar';
  bar.id = 'announcement-bar';

  bar.innerHTML = `
    <div class="message">
      We're aware of the fullscreen bug and are working to fix it!
    </div>
    <button class="close-btn" id="close-btn">×</button>
  `;

  // Append the bar to the body
  document.body.insertBefore(bar, document.body.firstChild);

  // Add the styles for the announcement bar dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    /* Announcement Bar */
    .announcement-bar {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #ff9800;
      color: white;
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
      font-weight: bold;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
    }

    .announcement-bar .message {
      flex: 1;
    }

    .announcement-bar .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 0 10px;
      font-weight: bold;
    }

    .announcement-bar .close-btn:hover {
      color: #ff5722;
    }

    /* Body padding to ensure content isn't hidden when bar is visible */
    body.announcement-visible {
      padding-top: 50px; /* Adjust this value based on the height of your announcement bar */
    }
  `;
  document.head.appendChild(style);

  // Set the height of the bar dynamically and adjust the body's padding accordingly
  const barHeight = bar.offsetHeight;

  // Function to close the announcement bar
  const closeBtn = document.getElementById('close-btn');
  const announcementBar = document.getElementById('announcement-bar');

  closeBtn.addEventListener('click', () => {
    announcementBar.style.display = 'none';  // Hide the bar
    document.body.classList.remove('announcement-visible'); // Remove padding-top from the body
  });

  // Initially show the announcement bar and add padding to the body
  document.body.classList.add('announcement-visible');
};

// Run the function to create the bar when the DOM is ready
document.addEventListener('DOMContentLoaded', createAnnouncementBar);


//NÄR DU SKA SÄTTA UT ANNOUCEMENT, GÖR DÅ SÅHÄR:

//1. Sätt <script src="/anmt.js"></script> i HTML och ändra text.

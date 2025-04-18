const createAnnouncementBar = () => {
  const bar = document.createElement('div');
  bar.className = 'announcement-bar';
  bar.id = 'announcement-bar';

  bar.innerHTML = `
    <div class="message">
      We are experiencing some problems with our servers atm. We're working on the problem and will find a solution in a short period of time.
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
      position: fixed;
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
      margin-left: 10px;
    }

    .announcement-bar .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      margin-right: 10px;
      font-weight: bold;
    }

    .announcement-bar .close-btn:hover {
      color: #ff5722;
    }

    /* Ensure content below the bar is not hidden */
    body.announcement-visible {
      margin-top: 40px; /* Adjust this value based on the height of your announcement bar */
    }
  `;
  document.head.appendChild(style);

  // Function to close the announcement bar
  const closeBtn = document.getElementById('close-btn');
  const announcementBar = document.getElementById('announcement-bar');

  closeBtn.addEventListener('click', () => {
    announcementBar.style.display = 'none';  // Hide the bar
    document.body.classList.remove('announcement-visible'); // Remove the top margin from the body
  });

  // Initially show the announcement bar and add the top margin to the body
  document.body.classList.add('announcement-visible');
};

// Run the function to create the bar when the DOM is ready
document.addEventListener('DOMContentLoaded', createAnnouncementBar);


//NÄR DU SKA SÄTTA UT ANNOUCEMENT, GÖR DÅ SÅHÄR:

//1. Sätt <script src="/anmt.js"></script> i HTML och ändra text.
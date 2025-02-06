const originalTitle = document.title;
let counter = 0;
let titleInterval;

const titles = ["Come back!", "We need you!"];

function changeTitle() {
    document.title = titles[counter % titles.length];
    counter++;
}

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        titleInterval = setInterval(changeTitle, 2000);
    } else {
        document.title = originalTitle;
        clearInterval(titleInterval);
        counter = 0;
    }
});

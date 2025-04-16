(function () {
  const games = [
    { link: "/dublinospel/caseclicker/", img: "/images/caseclicker.webp", alt: "Case Clicker 2" },
    { link: "/dublinospel/slope/", img: "/images/slope.png", alt: "Slope" },
    { link: "/dublinospel/elasticman/", img: "https://ubg77.github.io/updatefaqs/elasticman/logo.png", alt: "elasticman", mobile: true },
    { link: "/dublinospel/stack/", img: "https://webglmath.github.io/rainbow-stacker/logo.png", alt: "stack", mobile: true },
    { link: "/dublinospel/driftboss/", img: "https://webglmath.github.io/drift-boss/logo.png", alt: "drift-boss", mobile: true },
    { link: "/dublinospel/StickmanHook/", img: "https://webglmath.github.io/stickmanhook/logo.png", alt: "stickmanhook", mobile: true },
    { link: "/dublinospel/Bitlife/", img: "https://slope-game.github.io/new3623/bitlife-life-simulator/logo.png", alt: "BitLife", mobile: true },
    { link: "/dublinospel/subsurfers/", img: "/images/SubwayLogo.png", alt: "Subway Surfers", mobile: true },
    { link: "/dublinospel/drivemad/", img: "https://slope-game.github.io/img/drive-mad.png", alt: "drivemad", mobile: true },
    { link: "/dublinospel/tunnelrush/", img: "https://slope-game.github.io/rungame/tunnel-rush/logo.png", alt: "Tunnel Rush" },
    { link: "/dublinospel/golfinity/", img: "https://slope-game.github.io/img/golfinity.png", alt: "Golfinity" },
    { link: "/dublinospel/MonkeyMart/", img: "https://slope-game.github.io/img/mk.png", alt: "Monkey Mart" },
    { link: "/dublinospel/CookieClicker/", img: "https://th.bing.com/th/id/OIP.kT1zZ0sy8S8UxLgeHg4DJQHaHa?rs=1&pid=ImgDetMain", alt: "Cookie Clicker" },
    { link: "/dublinospel/wordle/", img: "https://i.etsystatic.com/47001806/r/il/cd52b9/5731274756/il_fullxfull.5731274756_ojun.jpg", alt: "Wordle" },
    { link: "/dublinospel/idlemining/", img: "https://ubg77.github.io/fix/idle-mining-empire/logo.png", alt: "Idle Mining Empire", mobile: true },
  ];

  const containerId = "logos";
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    container.className = "logos";
    document.body.appendChild(container);
  }

  games.forEach(game => {
    const wrapper = document.createElement(game.mobile ? "div" : "a");
    if (game.mobile) wrapper.className = "mobile-logo";

    const link = document.createElement("a");
    link.href = game.link;

    const img = document.createElement("img");
    img.src = game.img;
    img.alt = game.alt;

    link.appendChild(img);

    if (game.mobile) {
      const span = document.createElement("span");
      span.className = "hover-text";
      span.textContent = "Mobile Supported";
      link.appendChild(span);
    }

    wrapper.appendChild(link);
    container.appendChild(wrapper);
  });
})();

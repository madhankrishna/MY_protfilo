const projects=[
    {
        number: 1,
        name: "Article-Preview",
        imgLink: "articlepreview.png",
        demo:"https://articlepreview-comp.netlify.app/",
    },
    {
        number: 2,
        name: "Clock",
        imgLink: "clock.png",
        demo:"https://clock-theme.netlify.app/",
    },
    {
        number: 3,
        name: "Cookies",
        imgLink: "cookies.png",
        demo:"https://cookies-check.netlify.app/",
    },
    {
        number: 4,
        name: "Detect-Browser",
        imgLink: "detectbrowser.png",
        demo:"https://detect-browsers.netlify.app/"
    },
    {
        number: 5,
        name: "Drag & Drop",
        imgLink: "draganddrop.png",
        demo:"https://draganddropanimg.netlify.app/",
    },
    {
        number: 6,
        name: "FAQ",
        imgLink: "faq.png",
        demo:"https://accordionfaq.netlify.app/",
    },
    {
        number: 7,
        name: "Ip-Address-Tracker",
        imgLink: "ipaddrestracker.png",
        demo:"https://ip-address-trackers.netlify.app/",
    },
    {
        number: 8,
        name: "User-Fliter",
        imgLink: "liveuserfilter.png",
        demo:"https://live-fliter.netlify.app/",
    },
    {
        number: 9,
        name: "Pokedex",
        imgLink: "pokedex.png",
        demo:"https://pokemons-dex.netlify.app/",
    },
    {
        number: 10,
        name: "Github-User",
        imgLink: "searchgithubuser.png",
        demo:"https://searchgithubuserss.netlify.app/",
    },
    {
        number: 11,
        name: "Product-Card",
        imgLink: "shoecard.png",
        demo:"https://shoecard.netlify.app/",
    },
    {
        number: 12,
        name: "Spilt-Landing-Page",
        imgLink: "split-landing-page.png",
        demo:"https://split-landing-pageeee.netlify.app/",
    },
    {
        number: 13,
        name: "Todo",
        imgLink: "todo-list.png",
        demo:"https://todosnewapp.netlify.app/",
    },
    {
        number: 14,
        name: "Testmonials",
        imgLink: "testmonial.png",
        demo:"https://testmonials-slider.netlify.app/",
    },
    {
        number: 15,
        name: "Twitter-Box",
        imgLink: "twitterbox.png",
        demo:"https://tweetbox.netlify.app/",
    },
    {
        number: 16,
        name: "Weather-App",
        imgLink: "weather.png",
        demo:"https://check-weather-app.netlify.app/",
    },
]

console.log("heloo");

const projectsEl = document.getElementById("projects");

projects.forEach((project)=>{
    projectEl = document.createElement("div");
    projectEl.innerHTML = `
        <img src="./images/${project.imgLink}" alt="${project.name}" />
        <div class="content">
            <h4>${project.name}</h4>
            <a
                href="${project.demo}"
                target="_blank"
                class="btn btn-primary"
                >Live Demo</a
            >
        </div>
    `;
    projectsEl.appendChild(projectEl);

})
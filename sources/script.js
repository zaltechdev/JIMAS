function pageAnim (prev,next) {
    setTimeout(() => {
        $(prev).removeClass("opacity-1")
        $(prev).addClass("opacity-0")
        setTimeout(() => {
            $(prev).removeClass("flex")
            $(prev).addClass("hidden")
            $(next).removeClass("hidden")
            $(next).addClass("flex")
            setTimeout(() => {
                $(next).removeClass("opacity-0")
                $(next).addClass("opacity-1")
            },200)
        },200)
    },300)
}

function dashboardSlider(){
    const container = document.getElementById("img-scroller-dashboard");
    const items = document.querySelectorAll(".dashboard-img-scrolls");
    var currentIndex = 0;
    var scrollDirection = "right";

    setInterval(() => {
        if (scrollDirection === "right") {
            currentIndex++;
            if (currentIndex >= items.length) {
                scrollDirection = "left";
                currentIndex = items.length - 1;
            }
        } else {
            currentIndex--;
            if (currentIndex < 0) {
                scrollDirection = "right";
                currentIndex = 0;
            }
        }
        container.scrollTo({
            left: items[currentIndex].offsetLeft,
            behavior: "smooth"
        });
    },5000)
}

$(document).ready(function () {

    function route(){
        switch(location.hash){
            case "#login" : pageAnim(".pages","#login"); break;
            case "#register" : pageAnim(".pages","#register"); break;
            case "#dashboard" : pageAnim(".pages","#dashboard"); dashboardSlider(); break;
            case "#jimpitan" : pageAnim(".pages","#jimpitan"); break;
            case "#permodalan" : pageAnim(".pages","#permodalan"); break;
            case "#permodalan2" : pageAnim(".pages","#permodalan2"); break;
            case "#galeri" : pageAnim(".pages","#galeri"); break;
            case "#pemberdayaan" : pageAnim(".pages","#pemberdayaan"); break;
            case "#infobisnis" : pageAnim(".pages","#infobisnis"); break;
            case "#eksporimpor" : pageAnim(".pages","#eksporimpor"); break;
            case "#logistik" : pageAnim(".pages","#logistik"); break;
            case "#konsultasi" : pageAnim(".pages","#konsultasi"); break;
            default : pageAnim(".pages","#loader"); setTimeout(() => {pageAnim(".pages","#login")},2000)
        }
    }

    route()

    $(window).on("hashchange",function () {
        route()
    })
    
});
$(document).ready(function () {
    console.log("JQuery ready");
    $("#hide-sidebar").click(function (e) {
        console.log("clicked");
        e.preventDefault();
        let sidebar = $("#detail-sidebar");
        let iconSidebar = $("#icon-sidebar");
        sidebar.toggleClass("hide-sidebar");
        iconSidebar.toggleClass("show-sidebar");
    });    

    $("#show-sidebar").click(function (e) {
        e.preventDefault();
        let sidebar = $("#detail-sidebar");
        let iconSidebar = $("#icon-sidebar");
        sidebar.toggleClass("hide-sidebar");
        iconSidebar.toggleClass("show-sidebar");
    });

});
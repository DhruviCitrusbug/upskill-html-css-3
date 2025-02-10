$(document).ready(function () {
    
    function handleSidebarCollapse() {
        let sidebar = $("#detail-sidebar");
        let iconSidebar = $("#icon-sidebar");
    
        if ($(window).width() <= 766) {
            sidebar.addClass("hide-sidebar");
            iconSidebar.addClass("show-sidebar");
        } else {
            sidebar.removeClass("hide-sidebar");
            iconSidebar.removeClass("show-sidebar");
        }
    }

    handleSidebarCollapse();

    $(window).resize(function () {
        handleSidebarCollapse();
    });

    $("#hide-sidebar").click(function (e) {
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

    $(".detail-sidebar-item").click(function (e) {
        console.log("clicked");
        e.preventDefault();
        let subMenu = $(this).next(".detail-sidebar-sub-items");
        $(this).toggleClass("more-info");
        subMenu.toggleClass("more-info");
    });

});
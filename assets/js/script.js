$(document).ready(function () {
    
    function handleSidebarCollapse() {
        let sidebar = $("#detail-sidebar");
        let iconSidebar = $("#icon-sidebar");
    
        if ($(window).width() <= 991) {
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
        e.preventDefault();
        let subMenu = $(this).next(".detail-sidebar-sub-items");
        $(this).toggleClass("more-info");
        subMenu.toggleClass("more-info");
    });

    $(".main-content-navbar a").click(function (e) {
        $(".main-content-navbar a").removeClass("active");
        $(this).addClass("active");
        let targetId = $(this).attr("href");
        if (targetId.startsWith("#") && targetId.length > 1) {
            let targetOffset = $(targetId).offset().top - 80; // Adjust for fixed navbar
            $("html, body").animate({ scrollTop: targetOffset }, 500);
        }
    });


    $(".objectives-type-item-wrapper").click(function (e) {
        console.log("clicked")
        e.preventDefault();
        let parentClass = $(this).closest(".objectives-table-body-row");
        let subMenu = parentClass.next(".objectives-table-sub-detail");
        $(this).toggleClass("more-info");
        subMenu.toggleClass("more-info");
    });

    $("#prioritizedTaskDropdown").click(function (e) {
        e.preventDefault();
        let PrioritizedTaskTable = $(".prioritized-task-table");
        if(PrioritizedTaskTable.is(":visible")) {
            PrioritizedTaskTable.hide();
            $(this).css("transform", "rotate(0deg)");
        } else {
            PrioritizedTaskTable.show();
            $(this).css("transform", "rotate(180deg)");
        }
    });

    $("#KPIDropdown").click(function (e) {
        e.preventDefault();
        let KpiTable = $(this).parent().parent().find(".kpi-item-table");
        if(KpiTable.is(":visible")) {
            KpiTable.hide();
            $(this).css("transform", "rotate(0deg)");
        } else {
            KpiTable.show();
            $(this).css("transform", "rotate(180deg)");
        }
    });

    $("#KPIDropdown2").click(function (e) {
        e.preventDefault();
        let KpiTable = $(this).parent().parent().find(".kpi-item-table");
        if(KpiTable.is(":visible")) {
            KpiTable.hide();
            $(this).css("transform", "rotate(0deg)");
        } else {
            KpiTable.show();
            $(this).css("transform", "rotate(180deg)");
        }
    });

    $("#CostPerLead").click(function (e) {
        e.preventDefault();
        let currentRow = $(this).parent();
        let subRows = currentRow.next(".kpi-table-sub-rows");
        if(subRows.is(":visible")) {
            subRows.hide();
            $(currentRow).toggleClass("open");
        } else {
            subRows.show();
            $(currentRow).toggleClass("open");
        }
    });

    $("#CostPerLead2").click(function (e) {
        e.preventDefault();
        let currentRow = $(this).parent();
        let subRows = currentRow.next(".kpi-table-sub-rows");
        if(subRows.is(":visible")) {
            subRows.hide();
            $(currentRow).toggleClass("open");
        } else {
            subRows.show();
            $(currentRow).toggleClass("open");
        }
    });

});
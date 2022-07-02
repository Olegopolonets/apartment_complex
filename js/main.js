$(document).ready(function () {
    let currentFloor = 2;
    let currentFlat = 30;
    let currentLink = 40;
    let counterUp = $(".counter-up");
    let counterDown = $(".counter-down");
    let floorPath = $(".home-image path");
    let modal = $(".modal");
    let modalCloseButton = $(".modal-close-button");
    let viewFlatsButton = $(".view-flats");
    let flatsPath = $(".flats path");
    let flatLink = $(".flat-list a");

    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor")
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

    /*

    flatsPath.on("mouseover", function () {
        flatLink.removeClass("active");
        currentFlat = $(this).attr("data-flat");
        console.log(currentFlat);
    });

    if (currentFlat == currentLink) {
        $(".number-flat").text(currentFlat);
        //  flatLink.toggleClass("active");
        console.log("12345");
    } else {
        console.log('qwda');
    }

    flatLink.on("mouseover", function () {
        flatLink.removeClass("active");
        currentLink = $(this).attr("data-link");
        console.log(currentLink);
        flatLink.addClass("active");
    });

    */

    floorPath.on("click", toggleModal);

    modalCloseButton.on("click", toggleModal);

    viewFlatsButton.on("click", toggleModal);

    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            let usCurrentFloor = currentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2, useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor= ${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            let usCurrentFloor = currentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2, useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor")
            $(`[data-floor= ${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })

    function toggleModal() {
        modal.toggleClass("is-open");
    }
});
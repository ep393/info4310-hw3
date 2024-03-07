var selections = {
    // "
}


const createCircleIcon = function (src, color) {
    return `<div class="icon-parent" style="background-color: ${color}">`
        + `<img class="icon" src=${src}>`
        + `</div>`
}

const createCuisineIcon = function (div, divID, category, color) {
    let src = foodCategoryIcons[category]

    iconParentDiv = div.append("div")
        .attr("class", "icon-parent-container")

    iconDiv = iconParentDiv.append("div")

    iconDiv.attr("class", "icon-parent")
        .style("background-color", color)
        .attr("category", category)
        .append("img")
        .attr("class", "icon")
        .attr("src", src)

    iconParentDiv.append("div")
        .attr("class", "icon-label")
        .text(category)


    iconDiv.on("click", function () {
        drawCuisineFilter(category, divID)
    })
}

const drawCuisineFilter = function (categorySelection, divID) {
    const div = d3.select(divID)
    console.log(categorySelection)
    // div.classed("icons-disappear-container", true)

    var n = 0;

    if (categorySelection == "default") {

        div.selectAll(".icon-parent-container")
            .classed("icon-disappear", true)
            .remove()
        div.classed("icons", true)
        for (let i in foodCategoriesTopLevel) {
            let category = foodCategoriesTopLevel[i]
            let color = colors["category3"][i]
            createCuisineIcon(div, divID, category, color)
            n++;
        }
        const icons = d3.selectAll(".icon-parent-container")
        const totalWidth = parseInt(div.style('width'))
        const expandRatio = 3
        const initWidth = totalWidth / (n + (expandRatio - 1))

        console.log(initWidth)
        icons.each(function () {
            d3.select(this)
                .style("min-width", `${initWidth}px`)
                .style("max-width", `${initWidth}px`)
        })
    } else if (foodCategoriesTopLevel.includes(categorySelection)) {
        div.selectAll(".icon-parent-container")
            .classed("icon-disappear", true)
            .remove()
        div.classed("icons", true)
        let categories = foodCategories[categorySelection]
        for (let category in categories) {
            let color = "red" // colors["category3"][i]
            createCuisineIcon(div, divID, category, color)
            n++;
        }
        const icons = d3.selectAll(".icon-parent-container")
        const totalWidth = parseInt(div.style('width'))
        const expandRatio = 3
        const initWidth = totalWidth / (n + (expandRatio - 1))

        console.log(initWidth)
        icons.each(function () {
            d3.select(this)
                .style("min-width", `${initWidth}px`)
                .style("max-width", `${initWidth}px`)
        })
    } else {
        console.log("final level???")
    }


}

drawCuisineFilter("default", "#cuisine-filter-container .filter-contents");


// change!
var drag = d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);

function dragstarted(event, d) {
    d3.select(this).raise().attr("stroke", "black");
}

function dragged(event, d) {
    d3.select(this).attr("cx", event.x).attr("cy", event.y);
}



function dragended(event, d) {
    var dropZone = d3.select("svg#map").node().getBoundingClientRect();
    d3.select(this).attr("stroke", null);
    if (event.x >= dropZone.x && event.x <= dropZone.x + dropZone.width &&
        event.y >= dropZone.y && event.y <= dropZone.y + dropZone.height) {
        console.log("Pin dropped in the zone!");
        // add drop pin logic if possible?
    }
}
d3.select("#pin").call(drag);

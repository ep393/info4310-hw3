let mapIframe = d3.select("iframe").node()
let iframeDoc = mapIframe.contentDocument || mapIframe.contentWindow.document;
const createCircleIcon = function (src, color) {
    return `<div class="icon-parent" style="background-color: ${color}">`
        + `<img class="icon" src=${src}>`
        + `</div>`
}

const createCuisineIcon = function (div, divID, category, color) {
    let src = foodCategoryIcons[category]
    if (src == "") {
        src = foodCategoryIcons["Unknown"]
    }

    let categoriesForFilter = null
    if (foodCategoriesTopLevel.includes(category)) {
        categoriesForFilter = foodCategoryTopToBottom[category]
    } else if (foodSubCategories.includes(category)) {
        categoriesForFilter = foodCategorySubToBottom[category]
    }

    let iconParentDiv = div.append("div")
        .attr("class", "icon-parent-container")

    let iconDiv = iconParentDiv.append("div")


    iconDiv.attr("class", "icon-parent")
        .style("background-color", color)
        .attr("category", category)
        .append("img")
        .attr("class", "icon")
        .attr("src", src)

    iconParentDiv.append("div")
        .attr("class", "icon-label")
        .text(category)

    iconDiv.on("mouseover", function () {
        let iframeDoc = mapIframe.contentDocument || mapIframe.contentWindow.document;
        let circles = d3.select(iframeDoc).selectAll(".plot-circle")
        // console.log(circles)
        circles
            .each(function (d, i) {
                d3.select(this)
                    .transition()
                    .style("fill", "grey")
                    .style("opacity", .7)
                    .attr("z-index", 0)
            })
            .filter(function(d) {
                categories = d['categories_json'].toLowerCase()

                return categoriesForFilter.some(subStr => categories.includes(subStr))
                // console.log(categories)
                // console.log(category)
            })
            .each(function () {
                d3.select(this)
                    .transition()
                    .style("fill", "steelblue")
                    .attr("z-index", 1)
                    .style("opacity", 1)
            })
    })


    iconDiv.on("mouseout", function () {
        let iframeDoc = mapIframe.contentDocument || mapIframe.contentWindow.document;
        let circles = d3.select(iframeDoc).selectAll(".plot-circle")
        circles.each(function () {
            d3.select(this)
                .transition()
                .style("opacity", 1)
                .style("fill", "steelblue")
                .attr("z-index", 0)
        })
    })

    iconDiv.on("click", function () {
        let iframeDoc = mapIframe.contentDocument || mapIframe.contentWindow.document;
        let circles = d3.select(iframeDoc).selectAll(".plot-circle")

        d3.selectAll(".icon-parent").style("filter", "brightness(50%)")
        d3.select(this).style("filter", "brightness(100%)")

        if (foodCategoriesTopLevel.includes(category)) {
            drawCuisineFilter(category, divID)
            circles
                .classed("cuisine-filter-out", true)
                .filter(function (d) {
                    categories = d['categories_json'].toLowerCase()
                    return categoriesForFilter.some(subStr => categories.includes(subStr))
                })
                .classed("cuisine-filter-out", false)
        } else if (foodSubCategories.includes(category)) {
            circles
                .classed("cuisine-filter-out", true)
                .filter(function (d) {
                    categories = d['categories_json'].toLowerCase()
                    return categoriesForFilter.some(subStr => categories.includes(subStr))
                })
                .classed("cuisine-filter-out", false)
        }
    })
}

const drawCuisineFilter = function (categorySelection, divID) {
    const div = d3.select(divID)
    // console.log(categorySelection)
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
        let iframeDoc = mapIframe.contentDocument || mapIframe.contentWindow.document;
        let circles = d3.select(iframeDoc).selectAll(".plot-circle")

        circles.classed("cuisine-filter-out", false)

        const icons = d3.selectAll(".icon-parent-container")
        const totalWidth = parseInt(div.style('width'))
        const totalheight = parseInt(div.style('height'))
        const expandRatio = 1.5
        const initWidth = totalWidth / 3 // / (n + (expandRatio - 1))

        // console.log(initWidth)
        icons.each(function () {
            d3.select(this)
                .style("min-width", `${initWidth}px`)
                .style("max-width", `${initWidth}px`)
                .style("min-height", `${initWidth}px`)
                .style("max-height", `${initWidth}px`)
        })
    } else if (foodCategoriesTopLevel.includes(categorySelection)) {
        div.selectAll(".icon-parent-container")
            .classed("icon-disappear", true)
            .remove()
        div.classed("icons", true)
        let categories = foodCategories[categorySelection]
        for (let category in categories) {
            let color = "rgba(255,10,10,0.41)" // colors["category3"][i]
            createCuisineIcon(div, divID, category, color)
            n++;
        }
        const icons = d3.selectAll(".icon-parent-container")
        const totalWidth = parseInt(div.style('width'))
        const expandRatio = 1.5
        const columns = 3;
        const initWidth = totalWidth / (columns + (expandRatio - 1))

        // console.log(initWidth)
        icons.each(function () {
            d3.select(this)
                // .style("flex-basis", "50%")
                .style("min-width", `${initWidth}px`)
                .style("max-width", `${initWidth}px`)
                .style("min-height", `${initWidth}px`)
                .style("max-height", `${initWidth}px`)
        })
    } else {
        console.log("final level???")
    }


}

drawCuisineFilter("default", "#cuisine-filter-container .filter-contents");

const updateRatingFilter = function (value) {
    ratingSlider = d3.select("#rating-filter")
    ratingText = d3.select("#rating-value")

    ratingSlider.property("value", value)
    ratingText.text(value)

    let iframeDoc = mapIframe.contentDocument || mapIframe.contentWindow.document;
    let circles = d3.select(iframeDoc).selectAll(".plot-circle")

    circles.classed("rating-filter-out", true)

    circles.filter(function (d) {
        return parseFloat(d['rating']) >= value;
    }).classed("rating-filter-out", false)

}

const updateDistanceFilter = async function (value) {
    let distanceSlider = d3.select("#distance-filter")
    let distanceText = d3.select("#distance-value")


    distanceSlider.property("value", value)
    distanceText.text(value)

    let iframeDoc = mapIframe.contentDocument || mapIframe.contentWindow.document;
    let circles = d3.select(iframeDoc).selectAll(".plot-circle")
    let distanceIndicator = d3.select(iframeDoc).select("#distance-indicator")
    let currentLocation = d3.select(iframeDoc).select(".special-circle")

    let x = currentLocation.attr("cx")
    let y = currentLocation.attr("cy")

    distanceIndicator.attr("r", value)
    circles.classed("distance-filter-out", true)

    circles.filter(function (d) {
        let dx = x - d3.select(this).attr("cx")
        let dy = y - d3.select(this).attr("cy")
        let dist = Math.sqrt(dx*dx + dy*dy)
        return dist <= value;
    }).classed("distance-filter-out", false)


    distanceSlider.on("mouseover", function () {
        distanceIndicator
            .transition()
            .attr("opacity", "40%")
    }).on("mouseout", function () {
        distanceIndicator
            .transition()
            .attr("opacity", "0%")

    })
}


d3.select("iframe").on("load", function () {
    updateDistanceFilter(400)

    // let iframeDoc = this.contentDocument || this.contentWindow.document;
    // console.log("HIIII")
    // if (iframeDoc.readyState === 'complete') {
    //     let distanceIndicator = d3.select(iframeDoc).select("#distance-indicator")
    //     let distanceSlider = d3.select("#distance-filter")
    //
    //     distanceSlider.on("mouseover", function () {
    //         distanceIndicator
    //             .transition()
    //             .attr("opacity", "40%")
    //     }).on("mouseout", function () {
    //         distanceIndicator
    //             .transition()
    //             .attr("opacity", "0%")
    //
    //     })
    // }
})

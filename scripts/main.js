getFishData().then(
    () => {
        console.log("inside", fishCollection)
        fishList()
    }
)
console.log("outside", fishCollection)

getLocationData().then(
    () => {
        console.log("inside", fishLocations)
        locationList()
    }
)
console.log("outside", fishLocations)

getTipData().then(
    () => {
        console.log("inside", tipCollection)
        tipList()
    }
)
console.log("outside", tipCollection)
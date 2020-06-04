const fishCollection = [
    {
        species: "Parrot Fish",
        length: 8,
        name: "Angus",
        location: "Sea of Google",
        food: "Popcorn",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg"
    },
    
    {
        species: "Koi",
        length: 8,
        name: "Dem Kois Brad and Chad",
        location: "Sea of Google",
        food: "Beer",
        picture: "https://cdn.pixabay.com/photo/2019/11/10/19/51/koi-4616569_960_720.jpg"
    },

    
    {
        species: "Clown Fish",
        length: 2, 
        name: "Nemo",
        location: "Lost",
        food: "Circus Peanuts",
        picture: "https://m.economictimes.com/thumb/msid-72258617,width-1200,height-900,resizemode-4,imgsize-797254/nemo-clownfish_istock.jpg"
    },
    
    {
        species: "Sea Bass",
        length: 11,
        name: "Bubble Bass",
        location: "Bikini Bottom",
        food: "Pickles",
        picture: "https://media.istockphoto.com/photos/black-rockfish-picture-id1199812081?b=1&k=6&m=1199812081&s=170667a&w=0&h=Tt19nyCJ9Byo6pALtnmcg3F6ekIz3KVJxXiCiOEHz2A="
    },
    
    {
        species: "Dolphin",
        length: 365,
        name: "Big Fella",
        location: "Sea of Google",
        food: "Pufferfish",
        picture: "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875__340.jpg"

    }



]

const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

const soldierFish = () => {
    const soliderFishArray = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soliderFishArray.push(fish)
        }
    }

    return soliderFishArray
}

const fishPlebs = () => {
    const plebs = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            plebs.push(fish)
        }
    }

    return plebs
}

// reformat and organize!

const albums = 
{
    linen: {
        eightEight: 129,
        tenTen: 179,
        twelveTwelve: 229
    },

    silk: {
        eightEight: 149,
        tenTen: 199,
        twelveTwelve: 249
    },

    leather: {
        eightEight: 199,
        tenTen: 249,
        twelveTwelve: 299
    },
}

let weddingArray = []
let albumOrders = []
let allDates, allPackages, totalIncome, totalExpenses
let divBelowText = document.getElementById("outputs")

function albumCostFunc(type, size) {  
    let cogs = albums[type][size]
    albumOrders.push(cogs)
}

const showWeddingDates = (arrayOfData, placeToShowData) => { //This should be universally able to add innerHTML from an array.
    placeToShowData.innerHTML = ''
    for (let i = 0; i < arrayOfData.length; i++) {
       placeToShowData.innerHTML += (arrayOfData[i] + '<br>')
    }
}

function Client(clientName, packagePrice, albumIncluded, typeOfAlbum, sizeOfAlbum, weddingDate) {
    this.clientName = clientName
    this.packagePrice = packagePrice
    this.albumIncluded = albumIncluded
        
        if ( this.albumIncluded === false ) {
            this.typeOfAlbum = 'No Album Included'
            this.sizeOfAlbum = 'No Album Included'

        } else { 
            this.typeOfAlbum = typeOfAlbum
            this.sizeOfAlbum = sizeOfAlbum
            albumCostFunc(this.typeOfAlbum, this.sizeOfAlbum)
        }

    this.weddingDate = weddingDate 
}

function newWedding( names, package, doTheyGetAlbum, typeAlbum, sizeAlbum, weddingDate ) {
    let wedding = new Client(names, package, doTheyGetAlbum, typeAlbum, sizeAlbum, weddingDate)
    
    weddingArray.push(wedding)
   
    allDates = weddingArray.map(client => client.weddingDate + ' : ' + client.clientName).sort()
    allPackages = weddingArray.map(package => package.packagePrice)
    totalIncome = allPackages.reduce( (a, b) => a + b, 0)
    totalExpenses = albumOrders.reduce((a, b) => a + b, 0)


    showWeddingDates(allDates, divBelowText)
    
}

const submitButton = document.getElementById("submit-info").addEventListener('click', function getWebInput(getClientName, getPackagePrice, getAlbumIncluded, getTypeAlbum, getAlbumSize, getWeddingDate) {

    getClientName = document.getElementById("client-names").value
    getWeddingDate = document.getElementById("wedding-date").value

    packagePriceAsString = document.getElementById("package-price").value
    getPackagePrice = Number(packagePriceAsString)
    
    albumIncludedAsString = document.getElementById("album-included").value


    if (albumIncludedAsString === "true") {
        getAlbumIncluded = true
    } else {
        getAlbumIncluded = false
    }
   
    getTypeAlbum = document.getElementById("type-album").value
    getAlbumSize = document.getElementById("size-album").value
    

    newWedding(getClientName, getPackagePrice, getAlbumIncluded, getTypeAlbum, getAlbumSize, getWeddingDate)

    getClientName = ''
    getWeddingDate
    packagePriceAsString
    albumIncludedAsString
    getTypeAlbum
    getAlbumSize 
    
})





//const totalAlbumCost = albumOrders.reduce( (acc, cur) => { return cur + acc } )


// 1. We also need a way for us to say, if this date already exists, let us know and don't create it.


    // newWedding('Mark Collins & Susan Suttan', 2995, false, 'x', 'x', '2020/02/14')
    // newWedding('John Adams & Tom Markoff', 5095, false, 'x', 'x', '2020/03/31')
    // newWedding('Amanda Struss & Todd Armanah', 3995, false, 'x', 'x', '2020/03/13')
    // newWedding('Mike Gaven & Lisa Baker', 6095, true, 'leather', 'twelveTwelve', '2020/03/20')
    // newWedding('John Engram & Leslie Todd', 5995, false, 'x', 'x', '2020/01/01')
    // anewWedding('Michal & Susan', 5995, false, 'x', 'x', '2020/12/31')

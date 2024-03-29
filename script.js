/*----------------------------------------- PRODUCT LISTING -------------------------------*/
// prepare an empty array to store fragrances
var arrFragrances = [];

// define fragrance object constructor
function fragrance(id, name, description, price, sale, img, stock) {
    this.id = id;
    this.name = name;
    this.desc = description;
    this.price = price;
    this.sale = sale;
    this.img = img;
    this.stock = stock;
}

// function to create 6 default fragrances into the arrFragrance array
function createFragrances() {
    arrFragrances.push(new fragrance('P110', 'DAVIDOFF ECHO EDP', 'Warm and full of depth, Echo leaves the skin feeling invigorated. Echo is for the trendsetter and long lasting for all day wear.', 110.0, 79.0, 'p110.png', 20));
    arrFragrances.push(new fragrance('P111', 'BVLGARI ROSE EDP', 'BVLGARI SPLENDIDA ROSE is a seductive Rose bouquet evoking the Italian romance between BVLGARI and women.', 180.0, 119.0, 'p111.png', 20));
    arrFragrances.push(new fragrance('P112', 'SALVATORE FERRAGAMO SIGNORINA', 'An explosion of blooming flowers, energy and lightheartedness.', 170.0, 81.0, 'p112.png', 20));
    arrFragrances.push(new fragrance('P113', 'CHRISTIAN DIOR MISS DIOR EDT', 'Charming and effervescent, Miss Dior EDT is a luminous floral chypre scent with a hint of springtime.', 180.0, 159.0, 'p113.png', 20));
    arrFragrances.push(new fragrance('P114', 'AJMAL REGINA EDP', 'A sweet and fruity fragrance for women, Ajmal Regina was released to the public in 2016. Praline is the strongest note in this perfume.', 100.0, 56.0, 'p114.png', 20));
    arrFragrances.push(new fragrance('P115', 'CHRISTIAN DIOR SAUVAGE EDP', 'The powerful freshness of Sauvage exudes new sensual and mysterious facets, amply renewing itself with the signature of an ingenious composition.', 230.0, 189.0, 'p115.png', 20));
    arrFragrances.push(new fragrance('P116', 'CAROLINA HERRERA 212 SEXY EDP', 'A seductive blend of tangerine, bergamot, with florals. Subtle hints of cotton candy with musk will seduce anyone.', 140.0, 99.0, 'p116.png', 20));
    arrFragrances.push(new fragrance('P117', 'CHRISTIAN DIOR JADORE EDP', 'The incarnation of absolute femininity in an opulent fruity-floral bouquet. The sensual, curvaceous lines of its amphora bottle make this a legendary perfume.', 230.0, 185.0, 'p117.png', 20));
}

// function to create a single fragrance html code snippet
function createSingleFragranceHtml(id, name, desc, price, sale, img, stock) {
    var fragranceHtml = '<div id="p' + id + '" class="fragrance">' +
        '<img src="img/fragrances/' + img + '" />' +
        '<div class="fragrance-id">SKU:' + id + '</div>' +
        '<div class="fragrance-name">' + '<b>' + name + '</b>' + '</div>' +
        '<div class="fragrance-desc">' + desc + '</div>' +
        '<div class="fragrance-price" ><s>Price: SGD$ ' + price + '</s></div>' +
        '<div class="fragrance-saleprice" ><b>Price: SGD$ ' + sale + '</b></div>' +
        '<div class="fragrance-stock">Stock:' + stock + '</div>' +
        '<button id="btn_' + id + '" class="btn-add-fragrance" onClick="addFragranceToCartData(\'' + id + '\', ' + sale + ')">Add To Cart</button>' +
        '</div>';
    return fragranceHtml;
}


// execute the createFragrances function to create fragrances and populate array
createFragrances();
// arrFragrances now contains 6 fragrance objects
// The arrFragrances array should look something like this now -
/*
    [
        {
            id: 'p110';
            name = 'p110 product';
            desc = 'description for p110';
            price = 10.0;
            img = 'p110.png';
            stock = 20;
        },
        {
            id: 'p111';
            name = 'p111 product';
            desc = 'description for p111';
            price = 11.0;
            img = 'p111.png';
            stock = 20;
        },
        .... and 4 more ....
    ]
    Each fragrance object can be accessed using index, example: 
    
    arrFragrances[1] - will return 
    {
        id: 'p111';
        name = 'p111 product';
        desc = 'description for p111';
        price = 11.0;
        img = 'p111.png';
        stock = 20;
    }
    We can drill deeper to get values of the object properties - 
    arrFragrances[1].id - returns 'p111'
    arrFragrances[1].price - returns 11.0
    In the for loop below, we are accessing the fragrances properties to get the values and pass the values to createSingleFragranceHtml function
*/

// get a handle of fragrances html DIV from our html page
var allFragrancesContainer = document.getElementById('fragrances');

// allFragrancesContainer.innerHTML = createSingleFragranceHtml(arrFragrances[0].id, arrFragrances[0].name, arrFragrances[0].desc, arrFragrances[0].price, arrFragrances[0].img, arrFragrances[0].stock);

var allFragrancesHtml = ''; // prepare an empty string to store all fragrances html snippets which will be generated by the for loop
// Let's loop through arrFragrances and append each fragrance's html snippet string generated by the createSingleFragrance function to the allFragrancesHtml string
for (var i = 0; i < arrFragrances.length; i++) {
    // append each fragrance html snippet generated by the createSingleFragranceHtml function call
    // arrFragrances.length above is the total number of items in arrFragrances array
    // At each repetition process, it generates the html string using createSingleFragranceHtml and append it to allFragrancesHtml
    // Thus, allFragrancesHtml string growing longer after each repetition process of this loop
    allFragrancesHtml = allFragrancesHtml + createSingleFragranceHtml(arrFragrances[i].id, arrFragrances[i].name, arrFragrances[i].desc, arrFragrances[i].price, arrFragrances[i].sale, arrFragrances[i].img, arrFragrances[i].stock);
}

function listFragrances() {
    alert("Listing all fragrances from database ..... please wait a moment")

    allFragrancesContainer.innerHTML = allFragrancesHtml;
}

listFragrances();
// inject the allFragrancesHtml string into allFragrancesContainer div html element
// At this point, we should have a long string of html stored in allFragrancesHtml variable
// Injecting it into the index.html Document Object Model <div id="fragrances"></div> element using .innerHTML
//allFragrancesContainer.innerHTML = allFragrancesHtml;
/* ------------------------------------ END OF PRODUCT LISTING -------------------------- */



/* ------------------------------------ SHOPPING CART ----------------------------------- */

var shoppingCart = {} // prepare empty object to represent shopping cart data
// There is only 1 shopping cart, so we do not need an array.
// Instead, we just use a single object created using 'object literal notation' (https://www.w3schools.com/js/js_objects.asp)

// As we add products to shopping cart, this shoppingCart object would grow like in the shape below
// There are nested objects within the shoppingCart object

/*
    Imagine at some point after adding fragrances, shoppingCart object looks like this -
    NOTE - Javascript objects cannot have
    {
        p110: {
            qty: 2,
            unitCost: 11,
            subTotal: 22
        },
        p115: {
            qty: 1,
            unitCost: 21,
            subtTotal: 21
        }
    }
    The above represents our shoppingCart containing fragrances p110 (quantity - 2) and p115 (quantity - 1)
    Fragrance IDs are used as property keys.
    This makes it efficient to access shoppingCart data - we can easily access data like this - shoppingCart['p110'].subTotal
    NOTE - Javascript won't allow you to create duplication properties. The below example is NOT valid, and Javascript will show an error
    {
        p110: {
            qty: 1,
            unitCost: 11,
            subTotal: 22
        },
        p110: {
            qty: 1,
            unitCost: 11,
            subtTotal: 22
        }
    } 
*/

// function to generate the <tr><td> elements snippet  as a string, based on values in shoppingCart object
function renderShoppingCartToScreen() {
    // We want to be able to loop through each nested object within shoppingCart object. We know we can access using property names like so - shoppingCart['p110'], which would access the p110 nested object
    // So how can we loop? Here we go ...
    var fragranceIdsInCart = Object.keys(shoppingCart); // Returns the object property names in an array (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
    // fragranceIdsInCart is now an array containing fragrance IDs that is available in shoppingCart object as property names
    // example - ['p110', 'p112', 'p115']

    var tableRowsHtml = ''; // prepare and empty string as a placeholder to store <tr><td> strings we are going to generate next...
    for (var i = 0; i < fragranceIdsInCart.length; i++) {
        tableRowsHtml = tableRowsHtml +
            '<tr align="center">' +
            '<td>' + fragranceIdsInCart[i] + '</td>' +
            '<td>$' + shoppingCart[fragranceIdsInCart[i]].unitCost + '</td>' +
            '<td>' + shoppingCart[fragranceIdsInCart[i]].qty + '</td>' +
            '<td>$' + shoppingCart[fragranceIdsInCart[i]].subTotal + '</td>' +
            '<td><button onClick="deleteProduct(1)">Delete</button></td>' +
            '</tr>';
    }
    // After the loop, if there are fragrances in shoppingCart object, tableRowsHtml string would have been updated with <tr><td> elements
    // Now let's replace the table body with this updated string
    var tableBody = document.getElementById('cartTableBody');
    tableBody.innerHTML = tableRowsHtml;
}

// function to add fragrance to shoppingCartObject
function addFragranceToCartData(id, price) {
    // in this if-else block, we populate shoppingCart object
    if (shoppingCart[id] == undefined) { // if shoppingCart does not contain this fragrance, create the nested fragrance object
        shoppingCart[id] = {};
        shoppingCart[id].qty = 1;
        shoppingCart[id].unitCost = price;
        shoppingCart[id].subTotal = price;
    } else { // nested fragrance already exists in shopping cart, do not create a nested fragrance object. Update existing nested object instead
        shoppingCart[id].qty = shoppingCart[id].qty + 1;
        shoppingCart[id].subTotal = shoppingCart[id].qty * price;
    }

    // now render to screen
    renderShoppingCartToScreen();
}

// function to remove fragrance from shopping cart
function deleteFragranceFromCart(id) {
    delete shoppingCart[id];
}

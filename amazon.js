const adImage = document.querySelector('.AdImage');
const store = document.querySelector(".store");
let x = 1;
let timeoutId;
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const input = document.querySelector(".nav-middle input");
const prime = document.querySelector(".nav2 li:nth-of-type(9)")
const amazonPrime = document.querySelector(".amazon_prime");
const border = document.querySelector(".nav-middle");
const greyBg = document.querySelector(".grey-bg");
const allCategories = document.querySelector(".allCategories");
const all = document.querySelector(".nav-middle div:nth-of-type(1)");
const amazonLens = document.querySelector(".amazon-lens");
const squareImage = document.querySelector(".nav-middle div:nth-of-type(2)");
const X = document.querySelector(".amazon-lens div:nth-of-type(1)");

rightArrow.addEventListener("click", () => {
    x++;
    if (x === 7) {
        x = 1;
    }
    adImage.style.backgroundImage = `linear-gradient(to bottom, transparent 80%, rgb(235, 233, 233)), url(${x}.jpg)`;
    rightArrow.style.border = "2px solid white";
    setTimeout(() => {
        rightArrow.style.border = "2px solid transparent";
    }, 3000);
})

leftArrow.addEventListener("click", () => {
    x--;
    if (x === 0) {
        x = 6;
    }
    adImage.style.backgroundImage = `linear-gradient(to bottom, transparent 80%, rgb(235, 233, 233)), url(${x}.jpg)`;
    leftArrow.style.border = "2px solid white";
    setTimeout(() => {
        leftArrow.style.border = "2px solid transparent";
    }, 3000);
})

setInterval(()=>{
    x++;
    if (x === 7) {
        x = 1;
    }
    adImage.style.backgroundImage = `linear-gradient(to bottom, transparent 80%, rgb(235, 233, 233)), url(${x}.jpg)`;
},10000);

input.addEventListener("click", () => {
    setTimeout(() => {
        border.style.border = "3px solid orange"
        greyBg.style.display = 'block';
    }, 100);
})

prime.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    setTimeout(() => {
        amazonPrime.style.display = "block";
        greyBg.style.display = 'block';
    }, 100);
})

prime.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
        amazonPrime.style.display = "none";
        greyBg.style.display = 'none';
    }, 300);
})

amazonPrime.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    amazonPrime.style.cursor = 'pointer';
    amazonPrime.style.display = "block";
    greyBg.style.display = 'block';
})

amazonPrime.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
        amazonPrime.style.display = "none";
        greyBg.style.display = 'none';
    }, 300);
})

amazonPrime.addEventListener("click", () => {
    window.open("https://www.amazon.in/prime?ref=in-pr-tryprime-unrec-multi-benefit", '_blank')
})

all.addEventListener("click", () => {
    setTimeout(() => {
        all.style.borderColor = "orange";
        allCategories.style.display = "block";
    }, 100);
})

var allCategoriesList = document.querySelectorAll(".allCategories li");
var allChange = document.querySelector(".allChange");
var diff = 0;
var wide1;
var wide2;

allCategoriesList.forEach(function (li) {
    li.addEventListener("click", function () {
        if (li.textContent === "All Categories") {
            allChange.textContent = "All"
        } else {
            allChange.textContent = li.textContent;
        }
        greyBg.style.display = 'block';
        var iElement = document.createElement('i');
        iElement.className = 'fa-solid fa-caret-down';
        allChange.appendChild(iElement);

        diff = Math.floor(allChange.getBoundingClientRect().width) - 48;
        wide1 = 448 - diff;
        wide2 = Math.floor(allChange.getBoundingClientRect().width) + 1;
        input.style.width = wide1 + "px";
        all.style.width = wide2 + "px";
        if (li.textContent === "All Categories") {
            all.textContent = "All"
        } else {
            all.textContent = li.textContent;
        }
        var iElement1 = document.createElement('i');
        iElement1.className = 'fa-solid fa-caret-down';
        all.appendChild(iElement1);
        allChange.style.visibility = "hidden";
        setTimeout(() => {
            border.style.border = "3px solid orange"
            greyBg.style.display = 'block';
        }, 100);
        allCategories.style.display = "";
        input.focus();
    });
});


squareImage.addEventListener("click", () => {
    setTimeout(() => {
        amazonLens.style.display = "block";
        greyBg.style.display = 'block';
    }, 100);
})

greyBg.addEventListener("click", () => {
    if (amazonLens.style.display === "" || amazonLens.style.display === "none") {
        setTimeout(() => {
            border.style.border = '3px solid transparent';
            greyBg.style.display = 'none';
            allCategories.style.display = "";
        }, 100);
    }
})

store.addEventListener("click", () => {
    setTimeout(() => {
        allCategories.style.display = "none";
    }, 100);
})

X.addEventListener("click", () => {
    amazonLens.style.display = "none";
    greyBg.style.display = 'none';
})

function openFileInput() {
    var imageInput = document.getElementById('upload');

    imageInput.addEventListener('change', function () {
        var file = imageInput.files[0];
        console.log("File selected:", file.name);

        var image = document.querySelector(".imageUploading img");
        var image1 = document.querySelector(".imageUploading");
        image1.style.display = "block";
        image.src = URL.createObjectURL(file);

        setTimeout(() => {
            image.src = "";
            image1.style.display = "";
        }, 3000)
    });
};


const store1 = document.querySelector(".store1");
let headingLine, url1, text1, url2, text2, url3, text3, url4, text4, lastLine;

function createStore(headingLine, url1, text1, url2, text2, url3, text3, url4, text4, lastLine) {
    // Create the ul element with the specified class
    var ulElement = document.createElement('ul');
    ulElement.className = 'card list-none flex-col';

    // Create the li elements and append them to the ul element
    ulElement.appendChild(createLiElement(headingLine));

    // Create the li element with nested content and append it to the ul element
    var liElement = document.createElement('li');
    liElement.className = 'flex-row';

    var flexCol1 = createFlexCol(url1, text1);
    var flexCol2 = createFlexCol(url2, text2);

    liElement.appendChild(flexCol1);
    liElement.appendChild(flexCol2);

    ulElement.appendChild(liElement);

    // Repeat the process for the second row
    liElement = document.createElement('li');
    liElement.className = 'flex-row';

    flexCol1 = createFlexCol(url3, text3);
    flexCol2 = createFlexCol(url4, text4);

    liElement.appendChild(flexCol1);
    liElement.appendChild(flexCol2);

    ulElement.appendChild(liElement);

    // Add the last li element to the ul element
    ulElement.appendChild(createLiElement(lastLine));

    // Append the ul element to the body of the document
    store1.appendChild(ulElement);
}

// Helper function to create a li element with the specified text
function createLiElement(text) {
    var liElement = document.createElement('li');
    liElement.textContent = text;
    return liElement;
}

// Helper function to create a flex-col element with an img and span inside
function createFlexCol(imgSrc, spanText) {
    var divElement = document.createElement('div');
    divElement.className = 'flex-col';

    var imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = '';

    var spanElement = document.createElement('span');
    spanElement.textContent = spanText;

    divElement.appendChild(imgElement);
    divElement.appendChild(spanElement);

    return divElement;
}

createStore("Starting ₹99 | All your home improvement needs", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg", "Spin mops, wipes & more", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg", "Bathroom hardware & accessories", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg", "Hammers, screwdrivers & more", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg", "Extension boards, plugs & more", "Explore all");

createStore("Up to 75% off | Headphones", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg", "Up to 75% off | boAt", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg", "Up to 75% off | boult", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg", "Up to 75% off | Noise", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg", "Up to 75% off | Zebronics", "See all offers");


let searchProduct;

const search = document.querySelector(".nav-middle i[class='fa-solid fa-magnifying-glass']");
const inputForSearch = document.querySelector("input[placeholder='Search Amazon.in ']");

search.addEventListener("click", () => {
    let valueForSearch = inputForSearch.value;
    if (valueForSearch.trim() === "") {
        window.location.reload();
    }
    let y = valueForSearch.trim().split(/\s+/);
    let x = y[0] + "+";
    for (let i = 1; i < y.length; i++) {
        x = x + y[i] + "+";
    }
    let result = x.slice(0, -1);
    console.log(result);
    window.open(`https://www.amazon.in/s?k= ${result} &ref=nb_sb_noss`, "_blank")
})

inputForSearch.addEventListener('keypress', function (event) {
    let valueForSearch = inputForSearch.value;
    if (event.key === 'Enter' && valueForSearch.trim() === "") {
        window.location.reload();
    }
    else if (event.key === 'Enter' && valueForSearch.trim() !== "") {
        let y = valueForSearch.trim().split(/\s+/);
        let x = y[0] + "+";
        for (let i = 1; i < y.length; i++) {
            x = x + y[i] + "+";
        }
        let result = x.slice(0, -1);
        console.log(result);
        window.open(`https://www.amazon.in/s?k= ${result} &ref=nb_sb_noss`, "_blank")
    }
});
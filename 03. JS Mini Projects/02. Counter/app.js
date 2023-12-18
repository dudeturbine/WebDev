const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// takes a bit more effort to get REM size from the stylesheet becuase its calculated
// based on the root default font size (16 pixels)
const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
console.log(rootFontSize)
const initialFontSizePx = parseFloat(getComputedStyle(document.querySelector('#value')).fontSize);
console.log(initialFontSizePx)
const initialFontSizeRem = initialFontSizePx / rootFontSize;
console.log('Initial Font Size in rem:', initialFontSizeRem);
let count = initialFontSizeRem

// "for each" method performs actions on each node (we saw each node by logging btns above)
// this way we select all instead of one by one
btns.forEach(function (item) {
    // console.log(item);
    item.addEventListener('click', function (e) {
        // use event object to find out whicb button is clicked
        // console.log(e.currentTarget.classList);
        const item_classes = e.currentTarget.classList;
        if(item_classes.contains('decrease')) {
            count-=0.25;
        }
        else if(item_classes.contains('increase')){
            count+=0.25;
        }
        else{
            count = initialFontSizeRem;
        }
        // to find how to change the properties of value, select it in the html inspection and
        // look at properties, you can see all attributes there in the browser
        value.style.fontSize = count + 'rem'
        value.textContent = count
        console.log(value.style.fontSize)
    });
});
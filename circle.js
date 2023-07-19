//console.log(module)
const area = (r) => 3.14 * r * r;
const circumference = (r) => 2 * 3.14 * r;
module.exports.name ="Hello Sajib"
function display(){
    console.log("Do something In World!")
}

module.exports.some = area;
module.exports.circumference = circumference;
module.exports.display = display
//console.log(module)
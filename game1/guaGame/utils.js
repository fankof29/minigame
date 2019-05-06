var log = function(){
    return console.log.apply(console,arguments)
}

var e = function(e) {
    return document.querySelector(e)
}

var imageFromPath = function(path){
    var img = new Image()
    img.src = path
    return img
}
var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.h) {
        if (b.x > o.x && b.x < o.x + o.w) {
            return true
        }
    }
    return false
}

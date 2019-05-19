var paddle = function(game){
    var image = imageFromPath('./images/paddle.png')
    var o = {
        x:100,
        y:250,
        image:game.images.paddle,
        speed:15,
    }
    o.move = function(x){
      if(x < 0){
          x = 0;
      }
      if(x > (400-o.image.width)) {
          x = 400-o.image.width
      }
      o.x = x;
    }
    o.moveLeft = function(){
        o.move(o.x -= o.speed)
    }
    o.moveRight = function(){
       o.move( o.x += o.speed)
    }
    o.collide = function(ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                log('相撞')
                return true
            }
        }
        return false
    }
    return o;
}
function Circle(x, y, r, fixed){
    var options = {
        friction: 0, 
        restitution: 0.5,
        isStatic: fixed
    }
    this.body = Bodies.circle(x, y, r,options);
    this.r = r;
    Composite.add(composite, this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke(255);
        fill(127);
        ellipse(0,0,this.r * 2);
        pop();
    }

    this.isOffScreen = function(){
        var pos = this.body.position;
        return (pos.y > height + 100);
        }

    this.removeFromWorld = function(){
        Composite.remove(composite, this.body)
            }
    }

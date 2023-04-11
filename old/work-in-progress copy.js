const matterContainer = document.querySelector("#matterContainer");
const THICCNESS = 120;
const SVG_PATH_SELECTOR = "#matter-path";
const SVG_WIDTH_IN_PX = 100;
const SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH = 0.14;

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    Composite = Matter.Composite;
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Body = Matter.Body,
    Svg = Matter.Svg,
    Vector = Matter.Vector,
    Vertices = Matter.Vertices;



// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: matterContainer,
    engine: engine,
    options: {
        width: matterContainer.clientWidth,
        height: matterContainer.clientHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false
    }
});


render.options.wireframes = false; 

var ground = Bodies.rectangle(
    matterContainer.clientWidth /2, 
    matterContainer.clientHeight + THICCNESS / 2, 
    27184,
    THICCNESS, 
    { isStatic: true,
    render: {
        fillStyle: 'transparent',
        strokeStyle: 'transparent',
        lineWidth: 0

    }});

var leftWall = Bodies.rectangle(
    0 - THICCNESS / 2,
    matterContainer.clientWidth /2,
    THICCNESS,
    matterContainer.clientHeight * 5,
    {isStatic: true}
)

var rightWall = Bodies.rectangle(
    matterContainer.clientWidth + THICCNESS /2,
    matterContainer.clientHeight /2,
    THICCNESS,
    matterContainer.clientHeight * 5,
    {isStatic: true}
)

// add all of the bodies to the world
Composite.add(engine.world, [ground, leftWall, rightWall]);

let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse, 
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
})
mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

Composite.add(engine.world, mouseConstraint);







 // Detect clicks vs. drags
 let click = false;

 document.addEventListener('mousedown', () => click = true);
 document.addEventListener('mousemove', () => click = false);
 document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

 var bodies = engine.world.bodies;



 
 // Create a On-Mouseup Event-Handler
 Events.on(mouseConstraint, 'mouseup', function(event) {


   var mouseConstraint1 = event.source;
  

 
  
   if (!mouseConstraint1.bodyB) {
     


     for (i = 0; i < bodies.length; i++) { 
      var body = bodies[i];
      document.getElementById("matterContainer").style.backgroundColor = "#ffffff"
      body.parts ? body.parts.forEach(part => part.render.fillStyle="#222222") : body.render.fillStyle = '#222222';
      body.parts ? body.parts.forEach(part => part.render.strokeStyle="#222222") : body.render.strokeStyle = '#222222';
    
      

       var clicked = false;
       // Check if clicked or dragged
       if (click === true) {
       if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {

        for (i = 3; i < bodies.length; i++) { 
          bodies[i].render.fillStyle = '#FE0401';
          bodies[i].render.strokeStyle = '#FE5DCF';
          bodies[i].render.lineWidth = 3;
          }

        document.getElementById("matterContainer").style.backgroundColor = "#FE0401"
        body.parts ? body.parts.forEach(part => part.render.fillStyle="#FE5DCF")  : body.render.fillStyle = '#FE5DCF';
        body.parts ? body.parts.forEach(part => part.render.strokeStyle="#FE5DCF") : body.render.strokeStyle = '#FE5DCF';




       document.getElementById("popup").style.display = "block";
       document.getElementById("popup").innerHTML = body.id
       document.getElementById("popup").style.top= mouseConstraint.y
       document.getElementById("popup").style.left= mouseConstraint.x
       
      
var bodyUrl = body.url;
           var bodyID = body.id;
          //  console.log("Body.Url >> " + bodyUrl);
           // Hyperlinking feature
           if (bodyUrl != undefined) {
             //window.location.href = bodyUrl;
            //  window.open(bodyUrl, '_blank');
             document.getElementById("popup").style.display = "block";
            //  console.log("Hyperlink was opened");
             clicked = true;
             

           }
           break;
         }
       }
     }
   }
 });


// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

function handleResize(matterContainer){
    render.canvas.width = matterContainer.clientWidth;
    render.canvas.height = matterContainer.clientHeight;

    Matter.Body.setPosition(
        ground,
        Matter.Vector.create(
            matterContainer.clientWidth / 2,
            matterContainer.clientHeight + THICCNESS / 2
        )
    )

    Matter.Body.setPosition(
        rightWall,
        Matter.Vector.create(
            matterContainer.clientWidth + THICCNESS / 2,
            matterContainer.clientHeight / 2
        )
    );

    scaleBodies();
}



function scaleBodies() {
    const allBodies = Composite.allBodies(engine.world);

    allBodies.forEach((body) => {
        if(body.isStatic === true) return;
        const { min, max } = body.bounds;
        const bodyWidth = max.x - min.x;
        let scaleFactor = 
    (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
        bodyWidth;

        Body.scale(body, scaleFactor, scaleFactor);
    });
}



window.addEventListener("resize", () => handleResize(matterContainer))

function closePopUp(){
    document.getElementById("popup").style.display = "none";
}
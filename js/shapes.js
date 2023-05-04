const matterContainer = document.querySelector("#matterContainer");
const THICCNESS = 120;
const SVG_PATH_SELECTOR = "#matter-path";
const SVG_WIDTH_IN_PX = 100;
const SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH = 0.14;
let canvasWidth = matterContainer.clientWidth;
let canvasHeight = matterContainer.clientHeight;

let FRICTION = 0.4;
let FRICTION_AIR = 0.001;
let RESTITUTION = 0.2;


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
        background: "#1D1E1C",
        wireframes: false,
        pixelRatio: '2',
        showAngleIndicator: false,
    }
});


var ground = Bodies.rectangle(
    matterContainer.clientWidth / 2,
    matterContainer.clientHeight + THICCNESS / 2,
    27184,
    THICCNESS, {
        isStatic: true,
        render: {
            fillStyle: '#ff0000',
            strokeStyle: '#1D1E1C',
            lineWidth: 1

        }
    });

var leftWall = Bodies.rectangle(
    0 - THICCNESS / 2,
    matterContainer.clientWidth / 2,
    THICCNESS,
    matterContainer.clientHeight * 5, {
        isStatic: true,
        render: {
            fillStyle: '#1D1E1C',
            strokeStyle: '#1D1E1C',
            lineWidth: 1
        }
    }
)

var rightWall = Bodies.rectangle(
    matterContainer.clientWidth + THICCNESS / 2,
    matterContainer.clientHeight / 2,
    THICCNESS,
    matterContainer.clientHeight * 5, {
        isStatic: true,
        render: {
            fillStyle: '#1D1E1C',
            strokeStyle: '#1D1E1C',
            lineWidth: 1
        }
    }
)
var smallWall = Bodies.rectangle(
    0,
    matterContainer.clientHeight - 50,
    172,
   86, {
        isStatic: true,
        render: {
            fillStyle: '#1D1E1C',
            strokeStyle: '#1D1E1C',
            lineWidth: 1
        }
    }
)

// add all of the bodies to the world

var radius = 20

// create objects

// // art & design
var about = Bodies.rectangle(canvasWidth*4.4/5, 50, 140, 40, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    chamfer: {radius: 20},
    render: {
        // fillStyle: "#ff0000"
        sprite: {
            texture: 'https://vizknowledge.aalto.fi/images/shapes/about.svg',
        }
    },
    url: 'https://vizknowledge.aalto.fi/about.html'
})

var tickets = Bodies.rectangle(canvasWidth*0.7, 50, 152, 40, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    chamfer: {radius: 20},
    render: {
        sprite: {
            texture: 'https://vizknowledge.aalto.fi/images/shapes/tickets.svg',
        }
        // fillStyle: "#ff0000"
    },
    url: 'https://link.webropolsurveys.com/EventParticipation/EventPublic/400f27fb-eaaf-47ff-a09e-bdec3c8fec75?displayId=Fin2728547'
})

// var showcase = Bodies.rectangle(canvasWidth/2, 50, 196, 40, {
//     friction: FRICTION,
//     frictionAir: FRICTION_AIR,
//     restitution: RESTITUTION,
//     chamfer: {radius: 20},
//     render: {
//         sprite: {
//             texture: 'https://vizknowledge.aalto.fi/images/shapes/showcase.svg',
//         }
//         // fillStyle: "#ff0000"
//     },
//     url: 'https://drive.google.com/file/d/1Q1pAYY0RwmO1M-t4t25mXDZN9vRIci3C/view'
// })

// var workshops = Bodies.rectangle(canvasWidth/3, 50, 216, 40, {
//     friction: FRICTION,
//     frictionAir: FRICTION_AIR,
//     restitution: RESTITUTION,
//     chamfer: {radius: 20},
//     render: {
//         sprite: {
//             texture: 'https://vizknowledge.aalto.fi/images/shapes/workshops.svg',
//         }
//         // fillStyle: "#ff0000"
//     },
//     url: '../index.html'
// })

var speakers = Bodies.rectangle(canvasWidth, 50, 180, 40, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    chamfer: {radius: 20},
    render: {
        sprite: {
            texture: 'https://vizknowledge.aalto.fi/images/shapes/speakers.svg',
        }
        // fillStyle: "#ff0000"
    },
    url: 'https://vizknowledge.aalto.fi/#speakers'
})

// var program = Bodies.rectangle(canvasWidth/2, 50, 176, 40, {
//     friction: FRICTION,
//     frictionAir: FRICTION_AIR,
//     restitution: RESTITUTION,
//     chamfer: {radius: 20},
//     render: {
//         sprite: {
//             texture: 'https://vizknowledge.aalto.fi/images/shapes/program.svg',
//         }
//         // fillStyle: "#ff0000"
//     },
//     url: '../index.html'
// })

var instagram = Bodies.circle(canvasWidth/3, 50, 21, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    render: {
        sprite: {
            texture: 'https://vizknowledge.aalto.fi/images/shapes/inst.svg',
        }
    },
    url: 'https://www.instagram.com/vizknowledge/'
})
var facebook = Bodies.circle(canvasWidth/4, 50, 21, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    render: {
        sprite: {
            texture: 'https://vizknowledge.aalto.fi/images/shapes/fcbk.svg',
        }
    },
    url: 'https://www.facebook.com/vizknowledge/'
})

var twitter = Bodies.circle(canvasWidth/2, 50, 21, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    
    render: {
        sprite: {
            texture: 'https://vizknowledge.aalto.fi/images/shapes/twi.svg',
        }
    },
    url: 'https://twitter.com/vizknowledge/'
})

var vimeo = Bodies.circle(canvasWidth/3, 50, 21, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    
    render: {
        sprite: {
            texture: 'https://vizknowledge.aalto.fi/images/shapes/vim.svg',
        }
    },
    url: 'https://vimeo.com/vizknowledge/'
})


// add all of the bodies to the world
Composite.add(engine.world, [ground, leftWall, rightWall, smallWall, tickets, about, speakers, instagram, facebook, twitter, vimeo]);
//about,
// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 1,
            render: {
                visible: false
            }
        }
    });

Composite.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// Allow page scrolling in matter.js window
mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

// Detect clicks vs. drags
let click = false;

document.addEventListener('mousedown', () => click = true);
document.addEventListener('mousemove', () => click = false);
document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

// Create a On-Mouseup Event-Handler
Events.on(mouseConstraint, 'mouseup', function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            // Check if clicked or dragged
            if (click === true) {
                if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {
                    var bodyUrl = body.url;
                    console.log("Body.Url >> " + bodyUrl);
                    // Hyperlinking feature
                    if (bodyUrl != undefined) {
                        //window.location.href = bodyUrl;
                        window.open(bodyUrl, '_blank');
                        console.log("Hyperlink was opened");
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
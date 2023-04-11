let VKshapes = [];
let FRICTION = 0.4;
let FRICTION_AIR = 0.001;
let RESTITUTION = 0.2;

let aiTools = Bodies.rectangle(0, 0, 130, 130, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "aiTools",
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let investigativeJournalism = Bodies.rectangle(50, 0, 130, 130, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "investigativeJournalism",
    chamfer: {
        radius: [0, 60, 60, 60],
        quality: 100
    },
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let geopolitics = Bodies.circle(100, 0, 70, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "geopolitics",
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let environment = Bodies.rectangle(150, 0, 130, 130, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "environment",
    chamfer: {
        radius: [75, 0, 75, 0],
        quality: 100
    },
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let maps = Bodies.rectangle(200, 0, 130, 130, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "maps",
    chamfer: {
        radius: [75, 0, 0, 0],
        quality: 100
    },
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let inclusiveCircle01 = Bodies.circle(0, 0, 65, {  
    render: {
        fillStyle: "#222222"
    }
})
let inclusiveCircle02 = Bodies.circle(65, 0, 65, {
    render: {
        fillStyle: "#222222"
    }
})

let inclusive = Body.create({
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'inclusive',
    parts: [inclusiveCircle01, inclusiveCircle02]
})

//////////////////////////////////////////  

let policyMaking = Bodies.polygon(0, 0, 6, 75, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "policyMaking",
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let decisionMaking = Bodies.polygon(0, 0, 5, 75, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "decisionMaking",
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let geospatialData = Bodies.polygon(0, 0, 9, 75, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "geospatialData",
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let scrollytellingShape = Vertices.scale(Vertices.fromPath('0 0 50 80 100 0 50 20 0 0'), 1.5, 1.5);

let scrollytelling = Bodies.fromVertices(500, 0, scrollytellingShape, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    gravity: 0,
    id: "scrollytelling",
    render: {
        fillStyle: "#222222",
        strokeStyle: "#222222",
        lineWidth: 1
    }
})

//////////////////////////////////////////  

let dataJournalismShape = Vertices.scale(Vertices.fromPath('80 0 80 48 48 80 0 80 0 32 32 0 80 0'), 1.5, 1.5, 0);

let dataJournalism = Bodies.fromVertices(0, 0, dataJournalismShape, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "dataJournalism",
    render: {
        fillStyle: "#222222",
        strokeStyle: "#222222",
        lineWidth: 1
    }
})

//////////////////////////////////////////  

let humanCentredShape = Vertices.scale(Vertices.fromPath('80 22 40 0 0 22 0 80 80 80 80 22'), 1.5, 1.5, 0);

let humanCentered = Bodies.fromVertices(0, 0, humanCentredShape, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "humanCentered",
    render: {
        fillStyle: "#222222",
        strokeStyle: "#222222",
        lineWidth: 1
    }
})

//////////////////////////////////////////  

let dataHumanismShape = Vertices.scale(Vertices.fromPath('22.39 .15 34.39 .15 31.61 8.44 40 5.74 40 17.59 31.3 20.09 39.95 22.61 39.95 34.42 31.76 31.74 34.36 40 22.47 40 19.97 31.43 17.55 39.97 5.66 39.97 8.16 31.82 .08 34.29 .08 22.46 8.65 19.96 0 17.62 0 5.68 8.24 8.31 5.61 0 17.55 0 19.91 8.95 22.39 .15'), 3, 3, 0);

let dataHumanism = Bodies.fromVertices(0, 0, dataHumanismShape, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "dataHumanism",
    render: {
        fillStyle: "#222222",
        strokeStyle: "#222222",
        lineWidth: 1
    }
})

//////////////////////////////////////////  

let ethics = Bodies.rectangle(0, 0, 65, 125, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'ethics',
    chamfer: {
        radius: [58, 0, 0, 58],
        quality: 100
    },
    render: {
        fillStyle: "#222222",
    }
})

//////////////////////////////////////////  

let semiknowledgeCocreationRect01 = Bodies.rectangle(0, 0, 65, 125, {
    chamfer: {
        radius: [58, 0, 0, 58],
        quality: 100
    },
    render: {
        fillStyle: "#222222",
    }
})

let semiknowledgeCocreationRect02 = Bodies.rectangle(60, 0, 65, 125, {
    chamfer: {
        radius: [58, 0, 0, 58],
        quality: 100
    },
    render: {
        fillStyle: "#222222",
    }
})

let knowledgeCoCreation = Body.create({
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'knowledgeCoCreation',
    parts: [semiknowledgeCocreationRect01, semiknowledgeCocreationRect02]
})

//////////////////////////////////////////  

let ethicsBiasesRect01 = Bodies.rectangle(160, 0, 65, 125, {
    chamfer: {
        radius: [58, 0, 0, 58],
        quality: 100
    },
    render: {
        fillStyle: "#222222",
    }
})


let ethicsBiasesRect02 = Bodies.rectangle(100, 0, 65, 125, {
    chamfer: {
        radius: [0, 58, 58, 0],
        quality: 100
    },
    render: {
        fillStyle: "#222222",
    }
})

let ethicsBiases = Body.create({
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'ethicsBiases',
    parts: [ethicsBiasesRect01, ethicsBiasesRect02]
})

//////////////////////////////////////////  

let collaborativeNetworksCircle01 = Bodies.circle(0, 0, 38, {  
    render: {
        fillStyle: "#222222"
    }
})

let collaborativeNetworksCircle02 = Bodies.circle(50, 0, 38, {  
    render: {
        fillStyle: "#222222"
    }
})

let collaborativeNetworksCircle03 = Bodies.circle(50, 50, 38, {  
    render: {
        fillStyle: "#222222"
    }
})

let collaborativeNetworksCircle04 = Bodies.circle(0, 50, 38, {  
    render: {
        fillStyle: "#222222"
    }
})


let collaborativeNetworks = Body.create({
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'collaborativeNetworks',
    parts: [collaborativeNetworksCircle01, collaborativeNetworksCircle02, collaborativeNetworksCircle03, collaborativeNetworksCircle04]
})

//////////////////////////////////////////  


let accessibilityRect01 = Bodies.rectangle(700, 0, 40, 130, {  
    render: {
        fillStyle: "#222222"
    }
})

let accessibilityRect02 = Bodies.rectangle(700, 0, 40, 130, {  
    render: {
        fillStyle: "#222222"
    }
})

Body.rotate(accessibilityRect02, Math.PI/2)

let accessibility = Body.create({
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'accessibility',
    parts: [accessibilityRect01, accessibilityRect02]
})

//////////////////////////////////////////          

let accessibleKnowledgeRect01 = Bodies.rectangle(700, 0, 130, 60, {  
    chamfer: {
        radius: [0, 58, 0,58],
        quality: 100
    },
    render: {
        fillStyle: "#222222"
    }
})

let accessibleKnowledgeRect02 = Bodies.rectangle(700, 58, 130, 60, {  
    chamfer: {
        radius: [58, 0,58, 0],
        quality: 100
    },
    render: {
        fillStyle: "#222222"
    }
})

let accessibleKnowledge = Body.create({
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'accessibleKnowledge',
    parts: [accessibleKnowledgeRect01, accessibleKnowledgeRect02]
})

//////////////////////////////////////////  

let crisisTriangle01 = Bodies.trapezoid(400, 0, 70, 130, 1, {
    render: {
        fillStyle: "#222222",
    }
})

let crisisTriangle02 = Bodies.trapezoid(435,35, 70, 130, 1, {
    render: {
        fillStyle: "#222222",
    }
})

let crisisTriangle03 = Bodies.trapezoid(400, 70, 70, 130, 1, {
    render: {
        fillStyle: "#222222",
    }
})

let crisisTriangle04 = Bodies.trapezoid(365, 35, 70, 130, 1, {
    render: {
        fillStyle: "#222222",
    }
})


Body.rotate(crisisTriangle02, Math.PI/2)
Body.rotate(crisisTriangle03, Math.PI)
Body.rotate(crisisTriangle04, Math.PI*3/2)



let crisisReporting = Body.create({
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'crisisReporting',
    parts: [crisisTriangle01,crisisTriangle02,crisisTriangle03,crisisTriangle04]
})

Body.scale(crisisReporting, 0.8,0.8,0)

//////////////////////////////////////////  

let responsibleDataTriangle01 = Bodies.trapezoid(400, 0, 70, 70, 1, {
    render: {
        fillStyle: "#222222",
        strokeStyle: "222222",
        lineWidth: 1
    }
})

let responsibleDataTriangle02 = Bodies.trapezoid(400,47, 70, 70, 1, {
    render: {
        fillStyle: "#222222",
        strokeStyle: "222222",
        lineWidth: 1
    }
})


Body.rotate(responsibleDataTriangle02, Math.PI)


let responsibleData = Body.create({
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: 'responsibleData',
    parts: [responsibleDataTriangle01,responsibleDataTriangle02]
})

Body.scale(responsibleData, 1.3,1.3,0)

//////////////////////////////////////////          


let transparencyShape = Vertices.scale(Vertices.fromPath('20 0 0 80 80 80 60 0'), 1.4,1.4, 0);

let transparency = Bodies.fromVertices(500, 0, transparencyShape, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "transparency",
    render: {
        fillStyle: "#222222",
        strokeStyle: "#222222",
        lineWidth: 1
    }
})


//////////////////////////////////////////  

let energyTransitionShape = Vertices.scale(Vertices.fromPath('65 0 30 0 30 30 0 0 0 65 30 100 65 100 65 70 95 100 95 35'), 1.3,1.3, 0);

let energyTransition = Bodies.fromVertices(500, 0, energyTransitionShape, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "energyTransition",
    render: {
        fillStyle: "#222222",
        strokeStyle: "#222222",
        lineWidth: 1
    }
})

//////////////////////////////////////////  

let democracyShape = Vertices.scale(Vertices.fromPath('37 27 37 18 32 18 32 9 27 9 27 0 15 0 15 9 10 9 10 18 5 18 5 27 0 27 0 36 42 36 42 27'), 3,3, 0);

let democracy = Bodies.fromVertices(500, 0, democracyShape, {
    friction: FRICTION,
    frictionAir: FRICTION_AIR,
    restitution: RESTITUTION,
    id: "democracy",
    render: {
        fillStyle: "#222222",
        strokeStyle: "#222222",
        lineWidth: 1
    }
})

//////////////////////////////////////////  

VKshapes = [
    aiTools, 
    investigativeJournalism, 
    geopolitics, 
    environment,
    maps,
    inclusive,
    policyMaking,
    geospatialData,
    scrollytelling,
    dataJournalism,
    humanCentered,
    ethics,
    ethicsBiases,
    knowledgeCoCreation,
    decisionMaking,
    collaborativeNetworks,
    accessibility,
    accessibleKnowledge,
    crisisReporting,
    dataHumanism,
    responsibleData,
    transparency,
    energyTransition,
    democracy
  ]

  Composite.add(engine.world, VKshapes);



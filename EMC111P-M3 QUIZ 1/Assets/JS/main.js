//Creating the Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Lights
const directionalLight = new THREE.DirectionalLight( 0x000000, 0.5 );
scene.add( directionalLight );

const ambientLight = new THREE.AmbientLight( 0xE3CFA8 );
scene.add( ambientLight );

const light = new THREE.HemisphereLight( 0x232065, 0x080820, 1 );
scene.add( light );


//Textures
const doortexture = new THREE.TextureLoader().load('Assets/Textures/Golden Door.jpg');
const walltexture = new THREE.TextureLoader().load('Assets/Textures/Royal Wall.jpg');
const floortexture = new THREE.TextureLoader().load('Assets/Textures/Royal Floor.jpg');
const pillartexture = new THREE.TextureLoader().load('Assets/Textures/Pillar.jpg');
const balltexture = new THREE.TextureLoader().load('Assets/Textures/Pillar Light.jpg');
const vinestexture = new THREE.TextureLoader().load('Assets/Textures/Vines.jpg')

//Geometry Codes

//Floor
const floorgeometry = new THREE.BoxGeometry( 50, 38, 15 );
const floormaterial = new THREE.MeshLambertMaterial( {map: floortexture} );
const floor = new THREE.Mesh( floorgeometry , floormaterial );
scene.add( floor );

//Wall
const wallgeometry = new THREE.BoxGeometry( 50, 50, 1 );
const wallmaterial = new THREE.MeshLambertMaterial( {map: walltexture} );
const wall = new THREE.Mesh( wallgeometry , wallmaterial );
scene.add( wall );

//Golden Door
const doorgeometry = new THREE.BoxGeometry(10, 18, 1);
const doormaterial = new THREE.MeshLambertMaterial( {map: doortexture} );
const door = new THREE.Mesh( doorgeometry , doormaterial );
scene.add( door );

//Pillar 1
const pillargeometry = new THREE.CylinderGeometry( -1, -1, 10, 8);
const pillarmaterial = new THREE.MeshBasicMaterial( {map: pillartexture } );
const pillar = new THREE.Mesh( pillargeometry, pillarmaterial );
scene.add( pillar );

//Ball 1
const ballgeometry = new THREE.DodecahedronGeometry(1,1 );
const ballmaterial = new THREE.MeshBasicMaterial( {map: balltexture} );
const ball = new THREE.Mesh( ballgeometry, ballmaterial );
scene.add( ball );

//Pillar 2
const pillar2geometry = new THREE.CylinderGeometry( -1, -1, 10, 8);
const pillar2material = new THREE.MeshBasicMaterial( {map: pillartexture } );
const pillar2 = new THREE.Mesh( pillar2geometry, pillar2material );
scene.add( pillar2 );

//Ball 2
const ball2geometry = new THREE.DodecahedronGeometry(1,1 );
const ball2material = new THREE.MeshBasicMaterial( {map: balltexture} );
const ball2 = new THREE.Mesh( ball2geometry, ball2material );
scene.add( ball2 );

//Vines
const vinesgeometry = new THREE.CylinderGeometry( -1, -1, 10, 8);
const vinesmaterial = new THREE.MeshBasicMaterial( {map: vinestexture } );
const vines = new THREE.Mesh( vinesgeometry, vinesmaterial );
scene.add( vines );

const vines2geometry = new THREE.CylinderGeometry( -1, -1, 10, 8);
const vines2material = new THREE.MeshBasicMaterial( {map: vinestexture } );
const vines2 = new THREE.Mesh( vines2geometry, vines2material );
scene.add( vines2 );

camera.position.z = 16;

//animate
function animate() {
	requestAnimationFrame( animate );
    
    //Floor
    floor.position.x=0;
    floor.position.y=-25;
    floor.position.z=0;

    //Wall
    wall.position.x =0;
    wall.position.y=0;
    wall.position.z=0;

    //Golden Door
    door.position.x=0;
    door.position.y=3;
    door.position.z=0;

    //Pillars // Golden Balls
    pillar.position.x=6;
    pillar.position.y=-1;
    pillar.position.z=0;

    ball.position.x=6;
    ball.position.y=4.80;
    ball.position.z=0;

    
    pillar2.position.x=-6;
    pillar2.position.y=-1;
    pillar2.position.z=0;

    ball2.position.x=-6;
    ball2.position.y=4.80;
    ball2.position.z=0;

    //Vines
    vines.position.x=6;
    vines.position.y=-1;
    vines.position.z=0;

    vines2.position.x=-6;
    vines2.position.y=-1;
    vines2.position.z=0;

    //Light
    directionalLight.position.x=1;
    directionalLight.position.y=0.5;
    directionalLight.position.z=2;

    ambientLight.position.x=-10;
    ambientLight.position.y=10;
    ambientLight.position.z=0;

    light.position.x=0
    light.position.y=1
    light.position.z=0

	renderer.render( scene, camera );
}
animate();
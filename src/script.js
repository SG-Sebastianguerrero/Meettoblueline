
import './hero.css'
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//import * as dat from 'dat.gui'


/**
 * Base
 */
// Debug Datgui
//const gui = new dat.GUI()


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
 const textureLoader = new THREE.TextureLoader()
 const matcapTexture = textureLoader.load('/textures/matcaps/8.png')
 const matcapTexture2 = textureLoader.load('/textures/matcaps/7.png')
 const matcapTexture3 = textureLoader.load('/textures/matcaps/2.png')

 const material = new THREE.MeshNormalMaterial()


  /**
  * To know if start the Game
  */
var start = 0
function startGame(int = 0){
    start = int
    console.log("myvalueis"+start)
    return start
}

//media query
var mediaqueryList = window.matchMedia("(max-width: 800px)")
var mediaqueryListDesktop = window.matchMedia("(min-width: 801px)")


//console.log(start)

 /**
  * Function to change font name
  */
 

function fontTextCreator(textGenerated, choose){

    switch (textGenerated) { 
        case "user": 
            textGenerated  = "YOUR TURN"
        /*
        * User Font
        */
        const fontLoader = new THREE.FontLoader()
                
        fontLoader.load(
            '/fonts/helvetiker_regular.typeface.json',
            (font) =>
            {
                const textGeometry = new THREE.TextBufferGeometry(
                    "YOUR TURN", 
                    {
                        font: font,
                        size: 0.5,
                        height: 0.2,
                        curveSegments: 5, 
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.02,
                        bevelSegments: 4
                    }    
                )
                //box bounding
                textGeometry.computeBoundingBox()
                textGeometry.translate(
                    -(textGeometry.boundingBox.max.x - 0.02) * 0.5,
                    -(textGeometry.boundingBox.max.y - 0.02) * 0.5,
                    -(textGeometry.boundingBox.max.z - 0.03) * 0.5   
                ) 
                
                textGeometry.center()
        
                const textMaterial = new THREE.MeshMatcapMaterial()
                if(choose){
                    textMaterial.matcap = matcapTexture2
                }
                else{
                    textMaterial.matcap = matcapTexture3
                }

                const Usertext = new THREE.Mesh(textGeometry, textMaterial)
                Usertext.position.y = 3.5
                scene.add(Usertext)
                })

                break 

        case "computer": 
            textGenerated  = "COMPUTER IS THINKING"
            /**
            * Computer Font
            */
            const ComputerfontLoader = new THREE.FontLoader()  
            ComputerfontLoader.load(
                '/fonts/helvetiker_regular.typeface.json',
                (font) =>
                {
                    const ComputertextGeometry = new THREE.TextBufferGeometry(
                        "COMPUTER TURN", 
                        {
                            font: font,
                            size: 0.5,
                            height: 0.2,
                            curveSegments: 5, 
                            bevelEnabled: true,
                            bevelThickness: 0.03,
                            bevelSize: 0.02,
                            bevelSegments: 4
                        }    
                    )
                    //box bounding
                    ComputertextGeometry.computeBoundingBox()
                    ComputertextGeometry.translate(
                        -(ComputertextGeometry.boundingBox.max.x - 0.02) * 0.5,
                        -(ComputertextGeometry.boundingBox.max.y - 0.02) * 0.5,
                        -(ComputertextGeometry.boundingBox.max.z - 0.03) * 0.5   
                    ) 
                    
                    ComputertextGeometry.center()
            
                    const ComputertextMaterial = new THREE.MeshMatcapMaterial()
                    if(choose){
                        ComputertextMaterial.matcap = matcapTexture2
                    }
                    else{
                        ComputertextMaterial.matcap = matcapTexture3
                    }

                    const Computertext = new THREE.Mesh(ComputertextGeometry, ComputertextMaterial)
                    Computertext.position.y = -3.5 
                    scene.add(Computertext)
                })

            break 

        case "winner": 
            textGenerated  = "YOU WIN"
            break 
        
        case "draw": 
            textGenerated  = "DRAW"
            break 

        case "lose": 
            textGenerated  = "KEEP TRYING :)"
            break 
        }
       
} 

/**
 * Objects / SPHERES
 */

//First Row

const object11 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)
object11.position.x = - 2
object11.position.y = 2

const object12 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)

object12.position.y = 2

const object13 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)
object13.position.x = 2
object13.position.y = 2

//Second row
const object21 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)
object21.position.x = - 2

const object22 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)


const object23 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)
object23.position.x = 2

//third row

const object31 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)
object31.position.x = - 2
object31.position.y = -2

const object32 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)

object32.position.y = -2

const object33 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16)
)
object33.position.x = 2
object33.position.y = -2


scene.add(object11, object12, object13,
          object21, object22, object23,
          object31, object32, object33)

/**
 * Objects / lines
*/

//Vertical 
const vLine1 = new THREE.Mesh(
    new THREE.BoxGeometry( 0.2, 5, 0.2 ),
    new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
)
vLine1.position.x = 1

const vLine2 = new THREE.Mesh(
    new THREE.BoxGeometry( 0.2, 5, 0.2 ),
    new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
)
vLine2.position.x = -1

//Horizon
const hLine1 = new THREE.Mesh(
    new THREE.BoxGeometry( 5, 0.2, 0.2 ),
    new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
)
hLine1.position.y = 1

const hLine2 = new THREE.Mesh(
    new THREE.BoxGeometry( 5, 0.2, 0.2 ),
    new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
)
hLine2.position.y = -1

scene.add(vLine1, vLine2, hLine1, hLine2);


/**
 * Raycaster
 */

const raycaster = new THREE.Raycaster()

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
/**
 * Full Screen
 */

 do{
    window.addEventListener('dblclick', () =>
    {
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    
        if(!fullscreenElement)
        {
            if(canvas.requestFullscreen)
            {
                canvas.requestFullscreen()
            }
            else if(canvas.webkitRequestFullscreen)
            {
                canvas.webkitRequestFullscreen()
            }
        }
        else
        {
            if(document.exitFullscreen)
            {
                document.exitFullscreen()
            }
            else if(document.webkitExitFullscreen)
            {
                document.webkitExitFullscreen()
            }
        }
    })
    console.log("inside the function"+start)
 }while(start === 1)

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 10
camera.position.x = 20
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/*
* Mouse
*/
const mouse = new THREE.Vector2()
window.addEventListener('mousemove',(event) =>
{
    //important to get a normalized screen
/*     mouse.x = event.clientX / sizes.width * 3 -1.5
    mouse.y = -(event.clientY / sizes.height * 3 - 1.5)
    //positions */
    //console.log(mouse.x +","+mouse.y)
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
    
})




/**
 * Animations
 */
const clock = new THREE.Clock()

let currentIntersect = null

const objectsToTest= [object11, object12, object13,
                      object21, object22, object23,
                      object31, object32, object33]

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    raycaster.setFromCamera(mouse,camera)
    //console.log(elapsedTime)

    /**
    * START FUNCTIONS
    */
    var cicle = 0
    
    function message() {
        cicle++
        //console.log("cicle"+cicle)
        camera.position.x = Math.cos(cicle)*Math.PI*3
        camera.position.z = Math.sin(cicle)*Math.PI*3 
        if(cicle>=8){
            clearInterval(interval)
        }  
    }

    function interval() {
        document.getElementById('presentation').style.display='none'
        interval = setInterval(message,200)
        start = startGame(1)
        console.log("Button pressed"+start)
    }
    document.getElementById("startButton").onclick = interval   
            
    /**
     * INTERSECTS OBJECTS
     */

    const intersects = raycaster.intersectObjects(objectsToTest)

    for(const object of objectsToTest){
       //object.material.color.set('#f4f4f4')
       object.material.wireframe = true
       //object.material.map = matcapSphereTexture
    }
    for(const intersect of intersects){
        //intersect.object.material.color.set('#bdecb6')
        //intersect.object.material.wireframe = false
        //intersect.object.material.map = matcapTexture
        //intersect.object.material.flatShading = true
       
    }

    if(intersects.length){
        if(currentIntersect == null){
            //console.log('mouse enter')
        }
        currentIntersect = intersects[0]
    }
    else{
        if(currentIntersect){
            //console.log('mouse leave')
        }
        currentIntersect = null
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()

/**
 * Game Logic
 */
// Movements administrator 
var counterAdmin = 1
var userCounter = 0, computerCounter = 0, validator = 0
function movementAdmin(people){
    validator = 0
    //return 0 or 1 if aprove or not the add
    if(people==="computer" & counterAdmin % 2 !=0){
        computerCounter++
        validator = 1

        fontTextCreator("user",1)
        fontTextCreator("computer",0)
        //console.log("turn_"+counterAdmin+"_computer_"+computerCounter+"_VALIDATOR_"+validator)
        counterAdmin++  
    }

    if(people==="user" & counterAdmin % 2 ==0){
        userCounter++
        validator = 1
        fontTextCreator("computer",1)
        fontTextCreator("user",0)
        //console.log("turn_"+counterAdmin+"_user_"+userCounter+"_VALIDATOR_"+validator)
        counterAdmin++
    }

    if(counterAdmin >= 9){
        console.log("endgame")
        validator = 0
        console.log("VALIDATOR"+validator)
    }
    return validator
}


/* console.log(movementAdmin("computer"))
console.log(movementAdmin("user"))
console.log(movementAdmin("computer")) */


// COLORS OF THE USERS && CAN NOT BE REPEATED

var valuesVector = []
var counter = 0, isrepeated = 0
var name


function Move(user, objectClicked, name){
    counter++
    //console.log("counter:"+counter)

    if(user === "computer"){
        isrepeated = 0
        for(var i = 1; i<= counter; i++){
            if(name === valuesVector[i]){
                console.log("try with another one")
                isrepeated = 1
                //console.log(counter+"_"+name+"_"+valuesVector[i])
                break;
            }
        }
        if(isrepeated === 0){
                valuesVector[counter] = ""+name
                objectClicked.material.color.set('#0000ff')
                objectClicked.material.wireframe = false
                //console.log("added")
                //console.log(""+objectClicked+""+valuesVector[i])
        }

        // Prove 
        /*for(var i =1;i<=counter;i++){
            console.log("index: "+i+"value: "+valuesVector[i])
        } */
    }

    if(user === "user"){
        isrepeated = 0
        for(var i = 1; i<= 10; i++){
            if(name === valuesVector[i]){
                isrepeated = 1
                console.log("try with another one")
                //console.log(counter+"_"+name+"_"+valuesVector[i])
                break;
            }
        }
        if(isrepeated === 0){
            valuesVector[counter] = ""+name
            //console.log("added"+isrepeated)
            objectClicked.material.color.set('#00ff00')
            objectClicked.material.wireframe = false
        }

        // Prove 
        /* for(var i =1;i<=counter;i++){
            console.log("index: "+i+"value: "+valuesVector[i])
        } */
    }
}

//Movements
Move("computer",object11,"object11")
console.log(movementAdmin("computer")) 


Move("user",object12,"object12")
console.log(movementAdmin("user")) 

Move("computer",object33,"object33")
console.log(movementAdmin("computer"))   

/* Move("user",object32,"object32")
console.log(movementAdmin("user"))  */

//SENSOR ABOUT WHAT IS CLICKED TO THE USER

var objectcounter  = 0
window.addEventListener('click', () =>{

    if(currentIntersect){
        switch(currentIntersect.object){

            //First Row
            case object11:
                console.log('Object11 clicked')
                var objectMovementAdmin = movementAdmin("user")
                if(objectMovementAdmin){
                    Move("user",object11,"object11")
                }
                break
            case object12:
                console.log('Object12 clicked')
                var objectMovementAdmin = movementAdmin("user")
                if(objectMovementAdmin){
                    Move("user",object12,"object12")
                }
                break
            case object13:
                console.log('Object13 clicked')
                var objectMovementAdmin  = movementAdmin("user")
                if(objectMovementAdmin){
                    Move("user",object13,"object13")
                }
                break

            //Second Row
            case object21:
                console.log('Object21 clicked')
                var objectMovementAdmin  = movementAdmin("user")
                if(objectMovementAdmin){
                    Move("user",object21,"object21")
                }
                break
            case object22:
                console.log('Object22 clicked')
                if(mediaqueryList.matches) {
                    objectcounter ++
                    //alert('matches'+objectcounter);
                    if(objectcounter >= 2){
                        objectcounter = 0 
                        //alert('is bigger than 2'+objectcounter);
                        var objectMovementAdmin  = movementAdmin("user")
                        console.log(objectMovementAdmin)
                        if(objectMovementAdmin){
                            Move("user",object22,"object22")
                            //console.log("tried 22 an passed"+Move("user",object22,"object22"))
                        }
                    }
                }
                if(mediaqueryListDesktop.matches){
                    alert("im inside")
                    objectcounter = 0 
                    var objectMovementAdmin  = movementAdmin("user")
                    if(objectMovementAdmin){
                        Move("user",object22,"object22")
                        console.log("tried 22 an passed"+start)
                    }
                }
                break
            case object23:
                //console.log('Object23 clicked')
                var objectMovementAdmin  = movementAdmin("user")
                if(objectMovementAdmin){
                    Move("user",object23,"object23")
                }
                break

            //Third Row
            case object31:
                //console.log('Object31 clicked')
                var objectMovementAdmin  = movementAdmin("user")
                if(objectMovementAdmin){
                    Move("user",object31,"object31")
                }
                break
            case object32:
                //console.log('Object32 clicked')
                var objectMovementAdmin  = movementAdmin("user")
                if(objectMovementAdmin){
                    Move("user",object32,"object32")
                }
                break
            case object33:
                //console.log('Object33 clicked')
                var objectMovementAdmin  = movementAdmin("user")
                if(objectMovementAdmin){
                    Move("user",object33,"object33")
                }
                break

            //If does not choose anything
            default:
                alert("error during compilation")
        }

    }
})











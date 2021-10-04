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
 console.log(matcapTexture)
 const textMaterial = new THREE.MeshMatcapMaterial()
 textMaterial.matcap = matcapTexture
/**
 * Objects / SPHERES
 */

//First Row
const object11 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

object11.position.x = - 2
object11.position.y = 2

const object12 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({  })
)

object12.position.y = 2

const object13 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object13.position.x = 2
object13.position.y = 2

//Second row
const object21 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object21.position.x = - 2

const object22 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)


const object23 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object23.position.x = 2

//third row

const object31 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object31.position.x = - 2
object31.position.y = -2

const object32 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

object32.position.y = -2

const object33 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
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
    new THREE.MeshBasicMaterial({ color: '#00ff00' })
)
vLine1.position.x = 1

const vLine2 = new THREE.Mesh(
    new THREE.BoxGeometry( 0.2, 5, 0.2 ),
    new THREE.MeshBasicMaterial({ color: '#00ff00' })
)
vLine2.position.x = -1

//Horizon
const hLine1 = new THREE.Mesh(
    new THREE.BoxGeometry( 5, 0.2, 0.2 ),
    new THREE.MeshBasicMaterial({ color: '#00ff00' })
)
hLine1.position.y = 1

const hLine2 = new THREE.Mesh(
    new THREE.BoxGeometry( 5, 0.2, 0.2 ),
    new THREE.MeshBasicMaterial({ color: '#00ff00' })
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
 window.addEventListener('dblclick', ()=>{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
   
    if(!fullscreenElement){
        if(canvas.requestFullscreen)
        {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitrequestFullscreen){
            canvas.webkitFullscreen()
        }
   }
   else{
    if(canvas.requestFullscreen)
    {
        document.exitFullscreen()
    }
    else
    {
        document.webkitexitFullscreen() 
    }
   }
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
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
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
    //console.log(mouse.x +","+mouse.y)
})

// important to know what object is clicked
window.addEventListener('click', () =>{
    if(currentIntersect){

        switch(currentIntersect.object){
            case object11:
                console.log('Object11 clicked')
                break
            case object12:
                console.log('Object12 clicked')
                break

            case object13:
                console.log('Object13 clicked')
                break


            case object21:
                console.log('Object21 clicked')
                break
            case object22:
                console.log('Object22 clicked')
                break
            case object23:
                console.log('Object23 clicked')
                break


            case object31:
                console.log('Object31 clicked')
                break
            case object32:
                console.log('Object32 clicked')
                break
            case object33:
                console.log('Object33 clicked')
                break

        }



    }
})


/**
 * Animate
 */
const clock = new THREE.Clock()

//important
let currentIntersect = null

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    // Important direction of raycaster
    raycaster.setFromCamera(mouse,camera)
    const objectsToTest= [object11, object12, object13,
                          object21, object22, object23,
                          object31, object32, object33]
    const intersects = raycaster.intersectObjects(objectsToTest)

    for(const object of objectsToTest){
        object.material.color.set('#ffffff')
        //object.matcap = matcapTexture
        
        
    }
    for(const intersect of intersects){
        intersect.object.material.color.set('#0000ff')
        
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
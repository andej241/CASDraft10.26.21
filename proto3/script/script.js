const canvas = document.querySelector('.webgl')
    const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true 
});

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1);
    const scene = new THREE.Scene();
    let Mesh;
    let light;

function loadGLTF() {
        let balloonLoader = new THREE.GLTFLoader();
        balloonLoader.load('./model/EXX.gltf', (gltf) => {
            Mesh = gltf.scene;
            Mesh.scale.set(0.049,0.049,0.049);
            scene.add(Mesh);
            Mesh.position.x = 0;
            Mesh.position.y = 9.3;
            Mesh.position.z = 14;
        });
    }

    window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

})
    const ambient = new THREE.AmbientLight(0xffffff)
        scene.add( ambient )

    const newLight = new THREE.DirectionalLight(0xffffff, 5)
        newLight.position.set(5,.5,5),
        scene.add(newLight)

    const lit = new THREE.DirectionalLight(0xffffff, 5)
        lit.position.set(0,.5,5),
        scene.add(lit)

    const itt = new THREE.DirectionalLight(0xffffff, 5)
        itt.position.set(10,.5,5),
        scene.add(itt)

    const nnewLight = new THREE.DirectionalLight(0xffffff, 5)
        nnewLight.position.set(-5,.5,5),
        scene.add(nnewLight)

    const nitt = new THREE.DirectionalLight(0xffffff, 5)
        nitt.position.set(-10,.5,5),
        scene.add(nitt)
        
    function init() {
        camera.position.set(0, 10, 20);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }

    const animate = function () {
    requestAnimationFrame( animate );
    Mesh.rotation.y += 0.020;
    renderer.render( scene, camera );
};

    init();
    loadGLTF();
    animate();
    ambient();
    newLight();
    nnewLight();
    lit();
    itt();
    nitt();


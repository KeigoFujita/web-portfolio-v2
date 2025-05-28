<script setup>
import * as THREE from 'three';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

// ===== REACTIVE REFERENCES =====
const canvasRef = ref(null);
const isHovered = ref(false);

// ===== SCENE OBJECTS =====
let scene, camera, renderer, controls, composer;
let sphereMesh = null;
let sphere = null;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hasMouseMoved = false;

// ===== INITIALIZATION FUNCTIONS =====
function initializeScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#0a0a0a');
}

function initializeCamera() {
  const container = canvasRef.value.parentElement;
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
  camera.position.set(2, 1, 2);

  return { width, height };
}

function initializeRenderer(width, height) {
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    alpha: true,
  });

  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
}

function initializeControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.3;
  controls.enableZoom = false;
  controls.enableRotate = true;
}

function initializePostProcessing(width, height) {
  composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  renderPass.clear = true;
  composer.addPass(renderPass);

  // Create bloom pass
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(width, height),
    1, // strength
    1, // radius
    1, // threshold
  );

  bloomPass.threshold = 0.005;
  bloomPass.strength = 0.5;
  bloomPass.radius = 0.3;

  // Watch hover state to add/remove bloom pass
  watch(isHovered, (hovered) => {
    if (hovered) {
      composer.addPass(bloomPass);
    } else {
      composer.removePass(bloomPass);
    }
  });
}

// ===== MODEL LOADING =====
function loadModel() {
  const loader = new GLTFLoader();

  loader.load(
    '/models/hex-sphere.glb',
    (gltf) => {
      const model = gltf.scene;

      model.traverse((child) => {
        if (child.isMesh) {
          processMeshChild(child);
        }
      });

      scene.add(model);
    },
    undefined,
    (error) => {
      console.error('Error loading GLB model:', error);
    },
  );
}

function processMeshChild(child) {
  if (child.name === 'Sphere_0') {
    sphereMesh = child;
    child.material = child.material.clone();
    child.material.color.set('#0a0a0a');
  }

  if (child.name === 'Frame_0') {
    sphere = child;
    child.material = child.material.clone();
    child.material.emissiveIntensity = 2.0;
  }
}

// ===== EVENT HANDLERS =====
function updateMousePosition(event) {
  const rect = canvasRef.value.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  hasMouseMoved = true;
}

function onPointerMove(event) {
  updateMousePosition(event);
}

function onResize() {
  const container = canvasRef.value.parentElement;
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  canvasRef.value.addEventListener('pointermove', onPointerMove);
  window.addEventListener('resize', onResize);
}

function removeEventListeners() {
  if (canvasRef.value) {
    canvasRef.value.removeEventListener('pointermove', onPointerMove);
  }
  window.removeEventListener('resize', onResize);
}

// ===== ANIMATION & INTERACTION =====
function updateHoverState() {
  if (!hasMouseMoved) return;

  if (sphere && sphereMesh) {
    raycaster.setFromCamera(mouse, camera);
    const intersectsSphere = raycaster.intersectObject(sphere, true);
    const intersectsSphereMesh = raycaster.intersectObject(sphereMesh, true);

    isHovered.value =
      intersectsSphere.length > 0 || intersectsSphereMesh.length > 0;
  }
}

function updateRotation() {
  if (sphere && sphereMesh) {
    const rotationSpeed = { x: 0.001, y: 0.002 };

    sphereMesh.rotation.y += rotationSpeed.y;
    sphereMesh.rotation.x += rotationSpeed.x;

    sphere.rotation.y += rotationSpeed.y;
    sphere.rotation.x += rotationSpeed.x;
  }
}

function animate() {
  requestAnimationFrame(animate);

  updateHoverState();
  updateRotation();

  controls.update();
  composer.render();
}

// ===== LIFECYCLE HOOKS =====
onMounted(() => {
  // Initialize Three.js components
  initializeScene();
  const { width, height } = initializeCamera();
  initializeRenderer(width, height);
  initializeControls();
  initializePostProcessing(width, height);

  // Load 3D model
  loadModel();

  // Setup interaction
  setupEventListeners();

  // Start animation loop
  animate();
});

onUnmounted(() => {
  removeEventListeners();
});
</script>

<template>
  <div
    class="absolute size-[500px] -right-64 top-32 md:size-[800px] lg:size-[1000px] md:-right-1/3 md:top-1/2 transform -translate-y-1/2 block z-0"
  >
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// =====================================================
// FIRST PERSON CAMERA CONFIG
// =====================================================

export const CAMERA_CONFIG = {

  // Height of the camera above the player's
  // physics-body position.
  height: 0.23,

  forwardOffset: 0.18,

  // How high/low the player can look
  minPitch: -1.2,
  maxPitch: 1.2,

  // Mouse / touchpad sensitivity
  sensitivity: 0.006,

  // Camera follow smoothing
  // Higher = more responsive
  // Lower = smoother
  positionSmoothness: 0.20,

  // Where the camera starts looking vertically
  initialPitch: 0.0,
};


// =====================================================
// CAMERA CONTROLLER
// =====================================================

function CameraController({
  playerPositionRef,
  yawRef,
}) {

  const { camera, gl } = useThree();


  // ===================================================
  // CAMERA PITCH
  // ===================================================

  const pitchRef = useRef(
    CAMERA_CONFIG.initialPitch
  );


  // ===================================================
  // ROTATION STATE
  // ===================================================

  const rotatingCamera =
    useRef(false);


  // ===================================================
  // MOUSE / TOUCHPAD CONTROL
  // ===================================================

  useEffect(() => {

    const canvas = gl.domElement;


    // -----------------------------------------------
    // START LOOKING
    // -----------------------------------------------

    const handlePointerDown = (event) => {

      rotatingCamera.current = true;

      canvas.setPointerCapture?.(
        event.pointerId
      );
    };


    // -----------------------------------------------
    // STOP LOOKING
    // -----------------------------------------------

    const handlePointerUp = (event) => {

      rotatingCamera.current = false;

      canvas.releasePointerCapture?.(
        event.pointerId
      );
    };


    // -----------------------------------------------
    // LOOK AROUND
    // -----------------------------------------------

    const handlePointerMove = (event) => {

      if (!rotatingCamera.current) {
        return;
      }


      // Horizontal look
      yawRef.current -=
        event.movementX *
        CAMERA_CONFIG.sensitivity;


      // Vertical look
      pitchRef.current -=
        event.movementY *
        CAMERA_CONFIG.sensitivity;


      // Prevent flipping upside down
      pitchRef.current =
        THREE.MathUtils.clamp(
          pitchRef.current,
          CAMERA_CONFIG.minPitch,
          CAMERA_CONFIG.maxPitch
        );

    };


    // -----------------------------------------------
    // DISABLE RIGHT CLICK MENU
    // -----------------------------------------------

    const handleContextMenu = (event) => {
      event.preventDefault();
    };


    // -----------------------------------------------
    // EVENT LISTENERS
    // -----------------------------------------------

    canvas.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    canvas.addEventListener(
      "pointerup",
      handlePointerUp
    );

    canvas.addEventListener(
      "pointermove",
      handlePointerMove
    );

    canvas.addEventListener(
      "contextmenu",
      handleContextMenu
    );


    // -----------------------------------------------
    // CLEANUP
    // -----------------------------------------------

    return () => {

      canvas.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      canvas.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      canvas.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      canvas.removeEventListener(
        "contextmenu",
        handleContextMenu
      );

    };

  }, [gl, yawRef]);


  // =====================================================
  // CAMERA UPDATE
  // =====================================================

  useFrame((state, delta) => {

    if (!playerPositionRef.current) {
      return;
    }


    // IMPORTANT:
    // bodyRef is a Rapier RigidBody,
    // so we get its actual position using translation().

    const playerPosition =
      playerPositionRef.current.translation();


    // =================================================
    // FIRST PERSON POSITION
    // =================================================

    const targetCameraPosition =
      new THREE.Vector3(
        playerPosition.x,
        playerPosition.y +
          CAMERA_CONFIG.height,
        playerPosition.z
      );


    // =================================================
    // SMOOTH CAMERA FOLLOW
    // =================================================

    const smoothing =
      1 -
      Math.pow(
        1 -
          CAMERA_CONFIG.positionSmoothness,
        delta * 60
      );


    camera.position.lerp(
      targetCameraPosition,
      smoothing
    );


    // =================================================
    // LOOK DIRECTION
    // =================================================

    const lookDistance = 10;


    const direction =
      new THREE.Vector3(
        Math.sin(yawRef.current) *
          Math.cos(pitchRef.current),

        Math.sin(pitchRef.current),

        Math.cos(yawRef.current) *
          Math.cos(pitchRef.current)
      );


    // =================================================
    // LOOK TARGET
    // =================================================

    const lookTarget =
      new THREE.Vector3()
        .copy(camera.position)
        .add(
          direction.multiplyScalar(
            lookDistance
          )
        );


    camera.lookAt(
      lookTarget
    );

  });


  return null;
}


export default CameraController;
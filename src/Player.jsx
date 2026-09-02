import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  RigidBody,
  CapsuleCollider,
} from "@react-three/rapier";
import { TELEPORT_POINTS } from "./TeleportPoints";

function Player({
  onNearbyInteraction,
  walkableMeshes,
  playerBodyRef,
  freeMove,
  onTeleport,
  onOpenAbout,
  onOpenAchievements,
  onOpenProjects,
  onOpenExploration,
  onOpenContact,
}) {
  const bodyRef = useRef(null);
  const playerRef = useRef(null);

  const { camera, gl } = useThree();

  // =====================================================
  // KEYBOARD
  // =====================================================

  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  // =====================================================
  // CAMERA
  // =====================================================

  const yaw = useRef(-Math.PI / 2);
  const pitch = useRef(0.3);

  const rotatingCamera = useRef(false);

  // =====================================================
  // RAYCASTER FOR WALKABLE PATH
  // =====================================================

  const raycaster = useRef(
    new THREE.Raycaster()
  );

  // =====================================================
  // KEYBOARD CONTROLS
  // =====================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      // Movement
      if (key === "w") keys.current.w = true;
      if (key === "a") keys.current.a = true;
      if (key === "s") keys.current.s = true;
      if (key === "d") keys.current.d = true;

      // =========================================
      // TELEPORT / INTERACTION
      // =========================================

      if (key === "e") {
        const body = bodyRef.current;

        if (!body) return;

        const currentPosition = body.translation();

        // =========================================
        // ABOUT ME
        // =========================================

        const distanceToAbout = Math.sqrt(
          Math.pow(currentPosition.x - 4.1, 2) +
          Math.pow(currentPosition.z - 16.9, 2)
        );

        if (distanceToAbout <= 0.5) {
          onOpenAbout();
          return;
        }

        // =========================================
        // ACHIEVEMENTS
        // =========================================

        const distanceToAchievements = Math.sqrt(
          Math.pow(
            currentPosition.x - (-2.054),
            2
          ) +
          Math.pow(
            currentPosition.z - 15.514,
            2
          )
        );

        if (distanceToAchievements <= 0.5) {
          onOpenAchievements();
          return;
        }

        // =========================================
        // PROJECTS
        // =========================================

        const distanceToProjects = Math.sqrt(
          Math.pow(
            currentPosition.x - (-4.290),
            2
          ) +
          Math.pow(
            currentPosition.z - 13.595,
            2
          )
        );

        if (distanceToProjects <= 0.5) {
          onOpenProjects();
          return;
        }

        // =========================================
        // EXPLORATION
        // =========================================

        const distanceToExploration = Math.sqrt(
          Math.pow(
            currentPosition.x - 4.489,
            2
          ) +
          Math.pow(
            currentPosition.z - 6.000,
            2
          )
        );

        if (distanceToExploration <= 0.5) {
          onOpenExploration();
          return;
        }

        // =========================================
        // CONTACT
        // =========================================

        const contactX = -0.324;
        const contactZ = -1.731;

        const distanceToContact = Math.sqrt(
          Math.pow(
            currentPosition.x - contactX,
            2
          ) +
          Math.pow(
            currentPosition.z - contactZ,
            2
          )
        );

        if (distanceToContact <= 0.5) {
          onOpenContact();
          return;
        }

        // =========================================
        // PATH 1 → PATH 2
        // =========================================

        const path1X =
          TELEPORT_POINTS.path1Exit[0];

        const path1Z =
          TELEPORT_POINTS.path1Exit[2];

        const distanceToPath1Portal =
          Math.sqrt(
            Math.pow(
              currentPosition.x - path1X,
              2
            ) +
            Math.pow(
              currentPosition.z - path1Z,
              2
            )
          );

        if (distanceToPath1Portal <= 1.5) {
          console.log(
            "TELEPORTING: PATH 1 → PATH 2"
          );

          onTeleport(
            TELEPORT_POINTS.path2Start
          );

          return;
        }

        // =========================================
        // PATH 2 → PATH 1
        // =========================================

        const path2X =
          TELEPORT_POINTS.path2Start[0];

        const path2Z =
          TELEPORT_POINTS.path2Start[2];

        const distanceToPath2Portal =
          Math.sqrt(
            Math.pow(
              currentPosition.x - path2X,
              2
            ) +
            Math.pow(
              currentPosition.z - path2Z,
              2
            )
          );

        if (distanceToPath2Portal <= 1.5) {
          console.log(
            "TELEPORTING: PATH 2 → PATH 1"
          );

          onTeleport(
            TELEPORT_POINTS.path1Exit
          );

          return;
        }

        // =========================================
        // PATH 2 → PATH 3
        // =========================================

        const path2ExitX =
          TELEPORT_POINTS.path2Exit[0];

        const path2ExitZ =
          TELEPORT_POINTS.path2Exit[2];

        const distanceToPath2Exit =
          Math.sqrt(
            Math.pow(
              currentPosition.x - path2ExitX,
              2
            ) +
            Math.pow(
              currentPosition.z - path2ExitZ,
              2
            )
          );

        if (distanceToPath2Exit <= 1.5) {
          console.log(
            "TELEPORTING: PATH 2 → PATH 3"
          );

          onTeleport(
            TELEPORT_POINTS.path3Start
          );

          return;
        }

        // =========================================
        // PATH 3 → PATH 2
        // =========================================

        const path3StartX =
          TELEPORT_POINTS.path3Start[0];

        const path3StartZ =
          TELEPORT_POINTS.path3Start[2];

        const distanceToPath3Start =
          Math.sqrt(
            Math.pow(
              currentPosition.x - path3StartX,
              2
            ) +
            Math.pow(
              currentPosition.z - path3StartZ,
              2
            )
          );

        if (distanceToPath3Start <= 1.5) {
          console.log(
            "TELEPORTING: PATH 3 → PATH 2"
          );

          onTeleport(
            TELEPORT_POINTS.path2Exit
          );

          return;
        }
      }
    };

    const handleKeyUp = (event) => {
      const key = event.key.toLowerCase();

      if (key === "w") keys.current.w = false;
      if (key === "a") keys.current.a = false;
      if (key === "s") keys.current.s = false;
      if (key === "d") keys.current.d = false;
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "keyup",
      handleKeyUp
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "keyup",
        handleKeyUp
      );
    };
  }, [
    onTeleport,
    onOpenAbout,
    onOpenAchievements,
    onOpenProjects,
    onOpenExploration,
    onOpenContact,
  ]);

  // =====================================================
  // MOUSE / TOUCHPAD CAMERA
  // =====================================================

  useEffect(() => {
    const canvas = gl.domElement;

    const handlePointerDown = (event) => {
      rotatingCamera.current = true;

      canvas.setPointerCapture?.(
        event.pointerId
      );
    };

    const handlePointerUp = (event) => {
      rotatingCamera.current = false;

      canvas.releasePointerCapture?.(
        event.pointerId
      );
    };

    const handlePointerMove = (event) => {
      if (!rotatingCamera.current) {
        return;
      }

      const sensitivity = 0.006;

      yaw.current -=
        event.movementX * sensitivity;

      pitch.current -=
        event.movementY * sensitivity;

      pitch.current = THREE.MathUtils.clamp(
        pitch.current,
        -0.2,
        1.0
      );
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
    };

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
  }, [gl]);

  // =====================================================
  // CHECK WALKABLE PATH
  // =====================================================

  const getPathHeight = (x, y, z) => {
    const meshes = walkableMeshes.current;

    if (!meshes || meshes.length === 0) {
      return null;
    }

    const rayOrigin = new THREE.Vector3(
      x,
      y + 5,
      z
    );

    const rayDirection = new THREE.Vector3(
      0,
      -1,
      0
    );

    raycaster.current.set(
      rayOrigin,
      rayDirection
    );

    // =========================================
    // NORMAL CHECK
    // =========================================

    const hits =
      raycaster.current.intersectObjects(
        meshes,
        true
      );

    if (hits.length > 0) {
      return hits[0].point.y;
    }

    // =========================================
    // RELAXED BOUNDARY
    // =========================================

    const tolerance = 0.05;

    const nearbyPoints = [
      [x + tolerance, z],
      [x - tolerance, z],
      [x, z + tolerance],
      [x, z - tolerance],

      [x + tolerance, z + tolerance],
      [x + tolerance, z - tolerance],
      [x - tolerance, z + tolerance],
      [x - tolerance, z - tolerance],
    ];

    for (const [checkX, checkZ] of nearbyPoints) {
      const checkOrigin =
        new THREE.Vector3(
          checkX,
          y + 5,
          checkZ
        );

      raycaster.current.set(
        checkOrigin,
        rayDirection
      );

      const nearbyHits =
        raycaster.current.intersectObjects(
          meshes,
          true
        );

      if (nearbyHits.length > 0) {
        return nearbyHits[0].point.y;
      }
    }

    return null;
  };

  // =====================================================
  // GAME LOOP
  // =====================================================

  useFrame((state, delta) => {
    if (!bodyRef.current) {
      return;
    }

    const body = bodyRef.current;

    if (playerBodyRef) {
      playerBodyRef.current = body;
    }

    // Movement speed
    const speed = 1;

    const currentPosition =
      body.translation();

    // ===================================================
    // INTERACTION
    // ===================================================

    // =========================================
    // SECTION INTERACTIONS
    // =========================================

    const aboutX = 4.1;
    const aboutZ = 16.9;
    const aboutRadius = 0.5;

    const achievementsX = -2.054;
    const achievementsZ = 15.514;
    const achievementsRadius = 0.5;

    const projectsX = -4.290;
    const projectsZ = 13.595;
    const projectsRadius = 0.5;

    const explorationX = 4.489;
    const explorationZ = 6.000;
    const explorationRadius = 0.5;

    // CONTACT
    const contactX = -0.324;
    const contactZ = -1.731;
    const contactRadius = 0.5;

    // =========================================
    // PORTALS
    // =========================================

    const path1PortalX =
      TELEPORT_POINTS.path1Exit[0];

    const path1PortalZ =
      TELEPORT_POINTS.path1Exit[2];

    const path2PortalX =
      TELEPORT_POINTS.path2Start[0];

    const path2PortalZ =
      TELEPORT_POINTS.path2Start[2];

    const path2ExitPortalX =
      TELEPORT_POINTS.path2Exit[0];

    const path2ExitPortalZ =
      TELEPORT_POINTS.path2Exit[2];

    const path3StartPortalX =
      TELEPORT_POINTS.path3Start[0];

    const path3StartPortalZ =
      TELEPORT_POINTS.path3Start[2];

    const portalRadius = 0.7;

    // =========================================
    // DISTANCES
    // =========================================

    const distanceToAbout = Math.sqrt(
      Math.pow(
        currentPosition.x - aboutX,
        2
      ) +
      Math.pow(
        currentPosition.z - aboutZ,
        2
      )
    );

    const distanceToAchievements =
      Math.sqrt(
        Math.pow(
          currentPosition.x - achievementsX,
          2
        ) +
        Math.pow(
          currentPosition.z - achievementsZ,
          2
        )
      );

    const distanceToProjects =
      Math.sqrt(
        Math.pow(
          currentPosition.x - projectsX,
          2
        ) +
        Math.pow(
          currentPosition.z - projectsZ,
          2
        )
      );

    const distanceToExploration =
      Math.sqrt(
        Math.pow(
          currentPosition.x - explorationX,
          2
        ) +
        Math.pow(
          currentPosition.z - explorationZ,
          2
        )
      );

    // CONTACT DISTANCE
    const distanceToContact =
      Math.sqrt(
        Math.pow(
          currentPosition.x - contactX,
          2
        ) +
        Math.pow(
          currentPosition.z - contactZ,
          2
        )
      );

    const distanceToPath1Portal =
      Math.sqrt(
        Math.pow(
          currentPosition.x - path1PortalX,
          2
        ) +
        Math.pow(
          currentPosition.z - path1PortalZ,
          2
        )
      );

    const distanceToPath2Portal =
      Math.sqrt(
        Math.pow(
          currentPosition.x - path2PortalX,
          2
        ) +
        Math.pow(
          currentPosition.z - path2PortalZ,
          2
        )
      );

    const distanceToPath2ExitPortal =
      Math.sqrt(
        Math.pow(
          currentPosition.x - path2ExitPortalX,
          2
        ) +
        Math.pow(
          currentPosition.z - path2ExitPortalZ,
          2
        )
      );

    const distanceToPath3StartPortal =
      Math.sqrt(
        Math.pow(
          currentPosition.x - path3StartPortalX,
          2
        ) +
        Math.pow(
          currentPosition.z - path3StartPortalZ,
          2
        )
      );

    // =========================================
    // PORTAL HAS PRIORITY
    // =========================================

    if (
      distanceToPath1Portal <= portalRadius
    ) {
      onNearbyInteraction("path2");

    } else if (
      distanceToPath2Portal <= portalRadius
    ) {
      onNearbyInteraction("path1");

    } else if (
      distanceToPath2ExitPortal <= portalRadius
    ) {
      onNearbyInteraction("path3");

    } else if (
      distanceToPath3StartPortal <= portalRadius
    ) {
      onNearbyInteraction("path2");

    } else if (
      distanceToAbout <= aboutRadius
    ) {
      onNearbyInteraction("about");

    } else if (
      distanceToAchievements <= achievementsRadius
    ) {
      onNearbyInteraction("achievements");

    } else if (
      distanceToProjects <= projectsRadius
    ) {
      onNearbyInteraction("projects");

    } else if (
      distanceToExploration <= explorationRadius
    ) {
      onNearbyInteraction("exploration");

    } else if (
      distanceToContact <= contactRadius
    ) {
      onNearbyInteraction("contact");

    } else {
      onNearbyInteraction(null);
    }

    // ===================================================
    // DIRECTIONS
    // ===================================================

    const forward =
      new THREE.Vector3(
        Math.sin(yaw.current),
        0,
        Math.cos(yaw.current)
      );

    const right =
      new THREE.Vector3(
        Math.cos(yaw.current),
        0,
        -Math.sin(yaw.current)
      );

    // ===================================================
    // MOVEMENT
    // ===================================================

    const movement =
      new THREE.Vector3();

    if (keys.current.w) {
      movement.add(forward);
    }

    if (keys.current.s) {
      movement.sub(forward);
    }

    if (keys.current.a) {
      movement.add(right);
    }

    if (keys.current.d) {
      movement.sub(right);
    }

    // ===================================================
    // APPLY MOVEMENT
    // ===================================================

    if (movement.lengthSq() > 0) {
      movement.normalize();

      const newX =
        currentPosition.x +
        movement.x *
          speed *
          delta;

      const newZ =
        currentPosition.z +
        movement.z *
          speed *
          delta;

      // ===============================================
      // FIND PATH UNDER NEW POSITION
      // ===============================================

      const pathHeight =
        getPathHeight(
          newX,
          currentPosition.y,
          newZ
        );

      // ===============================================
      // ONLY MOVE IF PATH EXISTS
      // ===============================================

      if (freeMove) {
        // DEBUG MODE:
        // Ignore the Blender path restriction.

        body.setNextKinematicTranslation({
          x: newX,
          y: currentPosition.y,
          z: newZ,
        });

      } else if (pathHeight !== null) {
        // NORMAL GAME:
        // Stay on the Blender path.

        const newY =
          pathHeight + 0.2;

        body.setNextKinematicTranslation({
          x: newX,
          y: newY,
          z: newZ,
        });
      }

      // If pathHeight === null:
      // DO NOTHING.
    }

    // ===================================================
    // CHARACTER ROTATION
    // ===================================================

    if (playerRef.current) {
      playerRef.current.rotation.y =
        yaw.current;
    }

    // ===================================================
    // CAMERA
    // ===================================================

    const distance = 1.5;

    const horizontalDistance =
      Math.cos(pitch.current) *
      distance;

    const verticalDistance =
      Math.sin(pitch.current) *
      distance;

    const cameraX =
      currentPosition.x -
      Math.sin(yaw.current) *
        horizontalDistance;

    const cameraZ =
      currentPosition.z -
      Math.cos(yaw.current) *
        horizontalDistance;

    const cameraY =
      currentPosition.y +
      1.5 +
      verticalDistance;

    const targetCameraPosition =
      new THREE.Vector3(
        cameraX,
        cameraY,
        cameraZ
      );

    camera.position.lerp(
      targetCameraPosition,
      1 -
        Math.pow(
          0.001,
          delta
        )
    );

    // ===================================================
    // CAMERA LOOK AT
    // ===================================================

    const lookTarget =
      new THREE.Vector3(
        currentPosition.x,
        currentPosition.y + 0.8,
        currentPosition.z
      );

    camera.lookAt(
      lookTarget
    );
  });

  // =====================================================
  // PLAYER
  // =====================================================

  return (
    <RigidBody
      ref={bodyRef}
      type="kinematicPosition"
      colliders={false}
      position={[4.15, 4.78, 17]}
      enabledRotations={[
        false,
        false,
        false,
      ]}
    >
      <CapsuleCollider
        args={[0.28, 0.18]}
        position={[0, 0.35, 0]}
      />

      <group
        ref={playerRef}
        scale={0.12}
      >
        {/* HEAD */}

        <mesh
          position={[0, 1.7, 0]}
          castShadow
        >
          <boxGeometry
            args={[
              0.8,
              0.8,
              0.8,
            ]}
          />

          <meshStandardMaterial
            color="#d69b72"
          />
        </mesh>

        {/* FACE */}

        <mesh
          position={[
            0,
            1.75,
            0.41,
          ]}
        >
          <boxGeometry
            args={[
              0.45,
              0.25,
              0.05,
            ]}
          />

          <meshStandardMaterial
            color="#222222"
          />
        </mesh>

        {/* BODY */}

        <mesh
          position={[
            0,
            0.7,
            0,
          ]}
          castShadow
        >
          <boxGeometry
            args={[
              0.9,
              1.2,
              0.5,
            ]}
          />

          <meshStandardMaterial
            color="#3155a4"
          />
        </mesh>

        {/* LEFT ARM */}

        <mesh
          position={[
            -0.65,
            0.7,
            0,
          ]}
          castShadow
        >
          <boxGeometry
            args={[
              0.3,
              1.1,
              0.4,
            ]}
          />

          <meshStandardMaterial
            color="#d69b72"
          />
        </mesh>

        {/* RIGHT ARM */}

        <mesh
          position={[
            0.65,
            0.7,
            0,
          ]}
          castShadow
        >
          <boxGeometry
            args={[
              0.3,
              1.1,
              0.4,
            ]}
          />

          <meshStandardMaterial
            color="#d69b72"
          />
        </mesh>

        {/* LEFT LEG */}

        <mesh
          position={[
            -0.25,
            -0.45,
            0,
          ]}
          castShadow
        >
          <boxGeometry
            args={[
              0.35,
              1.1,
              0.45,
            ]}
          />

          <meshStandardMaterial
            color="#242424"
          />
        </mesh>

        {/* RIGHT LEG */}

        <mesh
          position={[
            0.25,
            -0.45,
            0,
          ]}
          castShadow
        >
          <boxGeometry
            args={[
              0.35,
              1.1,
              0.45,
            ]}
          />

          <meshStandardMaterial
            color="#242424"
          />
        </mesh>
      </group>
    </RigidBody>
  );
}

export default Player;
import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function DebugSystem({ playerRef, onFreeMoveChange }) {
  const { camera } = useThree();

  const [enabled, setEnabled] = useState(false);
  const [freeMove, setFreeMove] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [savedPoint, setSavedPoint] = useState(null);

  // =========================================
  // READ PLAYER POSITION
  // =========================================

  useEffect(() => {
    const interval = setInterval(() => {
      if (!playerRef?.current) return;

      const pos = playerRef.current.translation();

      setPosition({
        x: pos.x,
        y: pos.y,
        z: pos.z,
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [playerRef]);

  // =========================================
  // DEBUG CONTROLS
  // =========================================

  useEffect(() => {
    const handleKeyDown = (event) => {

      // ---------------------------------------
      // F3 = Show / hide debug panel
      // ---------------------------------------

      if (event.key === "F3") {
        event.preventDefault();

        setEnabled((previous) => !previous);
      }

      // ---------------------------------------
      // F4 = Free movement ON / OFF
      // ---------------------------------------

      if (event.key === "F4") {
        event.preventDefault();

        setFreeMove((previous) => {
  const newValue = !previous;

  if (onFreeMoveChange) {
    onFreeMoveChange(newValue);
  }

  return newValue;
});
      }

      // ---------------------------------------
      // T = Save current position
      // ---------------------------------------

      if (
        event.key.toLowerCase() === "t"
      ) {
        if (!playerRef?.current) return;

        const pos =
          playerRef.current.translation();

        setSavedPoint({
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        console.log(
          "=============================="
        );

        console.log(
          "TELEPORT POINT SAVED"
        );

        console.log(
          `X: ${pos.x.toFixed(3)}`
        );

        console.log(
          `Y: ${pos.y.toFixed(3)}`
        );

        console.log(
          `Z: ${pos.z.toFixed(3)}`
        );

        console.log(
          "=============================="
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [playerRef]);

  // =========================================
  // IMPORTANT
  // =========================================
  //
  // This system ONLY controls the debug state.
  //
  // The actual Player movement restriction
  // still needs to know whether freeMove is ON.
  //
  // We'll connect this in the next step.
  // =========================================

  if (!enabled) {
    return null;
  }

  return (
    <Html
      fullscreen
      style={{
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",

          padding: "12px 15px",

          background:
            "rgba(0, 0, 0, 0.8)",

          color: "white",

          fontFamily: "monospace",

          fontSize: "14px",

          borderRadius: "6px",

          lineHeight: "1.6",

          zIndex: 9999,

          whiteSpace: "nowrap",
        }}
      >

        {/* =====================================
            TITLE
        ===================================== */}

        <div>
          <strong>
            DEBUG MODE
          </strong>
        </div>

        {/* =====================================
            PLAYER POSITION
        ===================================== */}

        <div>
          X: {position.x.toFixed(3)}
        </div>

        <div>
          Y: {position.y.toFixed(3)}
        </div>

        <div>
          Z: {position.z.toFixed(3)}
        </div>

        {/* =====================================
            FREE MOVE STATUS
        ===================================== */}

        <div
          style={{
            marginTop: "6px",
          }}
        >
          Free Move:{" "}
          <strong>
            {freeMove ? "ON" : "OFF"}
          </strong>
        </div>

        {/* =====================================
            SAVED POINT
        ===================================== */}

        {savedPoint && (
          <div
            style={{
              marginTop: "8px",
              paddingTop: "6px",
              borderTop:
                "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <div>
              <strong>
                SAVED POINT
              </strong>
            </div>

            <div>
              X: {savedPoint.x.toFixed(3)}
            </div>

            <div>
              Y: {savedPoint.y.toFixed(3)}
            </div>

            <div>
              Z: {savedPoint.z.toFixed(3)}
            </div>
          </div>
        )}

        {/* =====================================
            CONTROLS
        ===================================== */}

        <div
          style={{
            marginTop: "8px",
            opacity: 0.7,
            fontSize: "11px",
          }}
        >
          F3 — Debug ON/OFF
        </div>

        <div
          style={{
            opacity: 0.7,
            fontSize: "11px",
          }}
        >
          F4 — Free Move ON/OFF
        </div>

        <div
          style={{
            opacity: 0.7,
            fontSize: "11px",
          }}
        >
          T — Save Position
        </div>

      </div>
    </Html>
  );
}

export default DebugSystem;
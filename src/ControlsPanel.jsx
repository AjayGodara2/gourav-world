import "./ControlsPanel.css";

function ControlsPanel() {
  return (
    <div className="controls-panel">

      <div className="controls-title">
        ✦ CONTROLS ✦
      </div>

      {/* MOVE */}
      <div className="controls-row">
        <div className="key-group">
          <div className="key">W</div>
          <div className="key">A</div>
          <div className="key">S</div>
          <div className="key">D</div>
        </div>

        <span>Move</span>
      </div>

      {/* INTERACT */}
      <div className="controls-row">
        <div className="key">E</div>

        <span>Interact</span>
      </div>

      {/* CLOSE */}
      <div className="controls-row">
  <div className="key mouse-key">🖱</div>
  <span>Look Around</span>
</div>

<div className="controls-row">
  <div className="key mouse-key">LMB</div>
  <span>Move Camera</span>
</div>

    </div>
  );
}

export default ControlsPanel;
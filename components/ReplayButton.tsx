"use client";
export default function ReplayButton() {
  return (
    <button className="btn o small" onClick={() => { window.scrollTo({ top: 0 }); window.dispatchEvent(new Event("replay-intro")); }}>
      Replay intro
    </button>
  );
}

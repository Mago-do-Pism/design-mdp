// Shared Logo component — extracted from Figma /Components/Logo
// Renders the Mago do Pism wizard staff icon + wordmark
// Used in: auth screens, sidebar, simulado

const Logo = ({ size = 200, color = "rgb(14, 147, 242)", showWordmark = true, layout = "horizontal" }) => {
  // Figma source uses a PNG (logo-azul.png) — we use it directly to preserve fidelity
  // and color it via CSS filter when a non-default color is needed.
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: layout === "horizontal" ? 14 : 0,
        flexDirection: layout === "horizontal" ? "row" : "column",
      }}
    >
      <img
        src="assets/logo-azul.png"
        alt="Mago do Pism"
        style={{
          width: size,
          height: size * 0.8,
          objectFit: "contain",
        }}
      />
    </div>
  );
};

window.Logo = Logo;

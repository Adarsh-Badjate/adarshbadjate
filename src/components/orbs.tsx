"use client";

export function HeroOrb() {
  return (
    <div className="relative w-[200px] h-[200px]">
      {/* Main sphere */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #fdba74 0%, #ea580c 38%, #c2410c 62%, #7c2d12 100%)",
          boxShadow:
            "0 30px 60px rgba(194,65,12,.28), inset -20px -20px 40px rgba(0,0,0,.25)",
          animation: "orbDrift 9s ease-in-out infinite",
        }}
      />
      {/* Spinning ring */}
      <div
        className="absolute -inset-[18px] rounded-full"
        style={{
          border: "1px solid rgba(194,65,12,.18)",
          borderTopColor: "rgba(194,65,12,.6)",
          animation: "orbSpin 14s linear infinite",
        }}
      />
      {/* Highlight */}
      <div
        className="absolute inset-[22px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(255,255,255,.55), rgba(255,255,255,0) 55%)",
          animation: "orbDrift 9s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export function DotOrb() {
  return (
    <span
      className="w-3 h-3 rounded-full flex-none"
      style={{
        background: "radial-gradient(circle at 35% 30%, #fdba74, #c2410c 70%)",
        animation: "orbPulse 2.4s ease-out infinite",
      }}
    />
  );
}

export function CTAOrb() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        right: -80,
        top: -120,
        width: 360,
        height: 360,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(234,88,12,.85) 0%, rgba(194,65,12,.45) 35%, rgba(194,65,12,0) 70%)",
        filter: "blur(28px)",
        animation: "orbDrift 12s ease-in-out infinite",
      }}
    />
  );
}

export function AgentOrb({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="w-3.5 h-3.5 rounded-full flex-none"
      style={{
        background:
          "radial-gradient(circle at 35% 30%, #fdba74, #c2410c 60%, #7c2d12)",
        boxShadow: "0 0 12px rgba(234,88,12,.6)",
        animation: `orbPulse 2.4s ease-out ${delay}s infinite`,
      }}
    />
  );
}

const text = [
  "Available for work",
  "Available for work",
  "Available for work",
  "Available for work",
  "Available for work",
  "Available for work",
  "Available for work",
  "Available for work",
  "Available for work",
  "Available for work",
];

export default function AvailabilityBadge() {
  return (
    <div
      className="
      flex items-center gap-3
      w-40 h-10 px-4
      rounded-full
      bg-[#041415]
      border border-[#0e2e30]
      overflow-hidden
      glow-border
    "
    >
      {/* Status Dot */}
      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />

      {/* Marquee Mask */}
      <div
        className="
        relative flex-1 overflow-hidden
        [mask:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
      "
      >
        <div
          className="
          flex whitespace-nowrap gap-6
          w-max
          animation-slide
          hover:[animation-play-state:paused]
        "
        >
          {text.map((item, ind) => (
            <span
              key={ind}
              className="text-sm text-[#b6eae4] tracking-wide flex items-center gap-5"
            >
              {item} <span className="w-1 h-1 bg-foreground rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

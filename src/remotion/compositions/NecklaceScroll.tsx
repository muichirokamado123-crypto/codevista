import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  staticFile,
  Easing,
} from "remotion";
import { Video } from "@remotion/media";
import { COLORS } from "../utils/theme";

export const NecklaceScroll: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const s = height / 1080;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      {/* Video layer — fills entire frame */}
      <Video
        src={staticFile("neckless video.mp4")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        muted
      />

      {/* Dark gradient overlay for readability */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Section 1: Title on the LEFT (frames 0-90) */}
      <Sequence from={0} durationInFrames={120} premountFor={fps}>
        <LeftContent frame={frame} fps={fps} s={s} width={width} />
      </Sequence>

      {/* Section 2: Features on the RIGHT (frames 90-180) */}
      <Sequence from={90} durationInFrames={120} premountFor={fps}>
        <RightContent frame={frame - 90} fps={fps} s={s} width={width} />
      </Sequence>

      {/* Section 3: Story on the LEFT (frames 180-270) */}
      <Sequence from={180} durationInFrames={120} premountFor={fps}>
        <StoryContent frame={frame - 180} fps={fps} s={s} width={width} />
      </Sequence>

      {/* Section 4: CTA centered (frames 270-360) */}
      <Sequence from={270} durationInFrames={90} premountFor={fps}>
        <CTAContent frame={frame - 270} fps={fps} s={s} width={width} />
      </Sequence>
    </AbsoluteFill>
  );
};

// --- Section Components ---

const LeftContent: React.FC<{
  frame: number;
  fps: number;
  s: number;
  width: number;
}> = ({ frame, fps, s }) => {
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleY = interpolate(frame, [0, 30], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const taglineOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const lineWidth = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200 },
  });

  // Fade out at end
  const fadeOut = interpolate(frame, [90, 120], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        paddingLeft: 80 * s,
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          maxWidth: 500 * s,
        }}
      >
        <p
          style={{
            fontSize: 14 * s,
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: COLORS.gold,
            textTransform: "uppercase",
            marginBottom: 16 * s,
            opacity: taglineOpacity,
          }}
        >
          Handcrafted Elegance
        </p>
        <h1
          style={{
            fontSize: 64 * s,
            fontWeight: 200,
            color: COLORS.textPrimary,
            letterSpacing: "0.1em",
            lineHeight: 1.1,
            opacity: titleOpacity,
            transform: `translateY(${titleY * s}px)`,
            margin: 0,
          }}
        >
          The Aurora
          <br />
          Collection
        </h1>
        <div
          style={{
            width: 120 * s * lineWidth,
            height: 1,
            backgroundColor: COLORS.gold,
            marginTop: 24 * s,
            marginBottom: 24 * s,
          }}
        />
        <p
          style={{
            fontSize: 18 * s,
            fontWeight: 300,
            color: COLORS.textSecondary,
            lineHeight: 1.6,
            opacity: taglineOpacity,
          }}
        >
          Where timeless artistry meets modern sophistication.
        </p>
      </div>
    </AbsoluteFill>
  );
};

const RightContent: React.FC<{
  frame: number;
  fps: number;
  s: number;
  width: number;
}> = ({ frame, fps, s, width }) => {
  const features = [
    { label: "18K Gold", value: "Plated" },
    { label: "Handcrafted", value: "40+ Hours" },
    { label: "Hypoallergenic", value: "Certified" },
    { label: "Lifetime", value: "Warranty" },
  ];

  // Fade out at end
  const fadeOut = interpolate(frame, [90, 120], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 80 * s,
        opacity: fadeOut,
      }}
    >
      <div style={{ maxWidth: 400 * s }}>
        {features.map((feature, i) => {
          const delay = i * 8;
          const entryProgress = spring({
            frame: frame - delay,
            fps,
            config: { damping: 200 },
          });
          const x = interpolate(entryProgress, [0, 1], [60, 0]);
          const opacity = interpolate(entryProgress, [0, 1], [0, 1]);

          return (
            <div
              key={feature.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: `${16 * s}px 0`,
                borderBottom: `1px solid rgba(212, 175, 55, 0.2)`,
                transform: `translateX(${x * s}px)`,
                opacity,
              }}
            >
              <span
                style={{
                  fontSize: 16 * s,
                  fontWeight: 300,
                  color: COLORS.textSecondary,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {feature.label}
              </span>
              <span
                style={{
                  fontSize: 20 * s,
                  fontWeight: 400,
                  color: COLORS.gold,
                }}
              >
                {feature.value}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const StoryContent: React.FC<{
  frame: number;
  fps: number;
  s: number;
  width: number;
}> = ({ frame, fps, s }) => {
  const paragraphs = [
    "Each piece in the Aurora Collection is born from over 40 hours of meticulous handcrafting by master artisans.",
    "Using traditional techniques passed down through generations, every detail is perfected to create jewelry that transcends trends.",
    '"We don\'t just make jewelry — we create heirlooms."',
  ];

  // Fade out at end
  const fadeOut = interpolate(frame, [90, 120], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        paddingLeft: 80 * s,
        opacity: fadeOut,
      }}
    >
      <div style={{ maxWidth: 480 * s }}>
        <p
          style={{
            fontSize: 12 * s,
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: COLORS.gold,
            textTransform: "uppercase",
            marginBottom: 20 * s,
            opacity: interpolate(frame, [0, 20], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            }),
          }}
        >
          The Craft
        </p>
        {paragraphs.map((text, i) => {
          const delay = 10 + i * 15;
          const entryProgress = spring({
            frame: frame - delay,
            fps,
            config: { damping: 200 },
          });
          const opacity = interpolate(entryProgress, [0, 1], [0, 1]);
          const y = interpolate(entryProgress, [0, 1], [30, 0]);

          return (
            <p
              key={i}
              style={{
                fontSize: i === 2 ? 20 * s : 16 * s,
                fontWeight: i === 2 ? 300 : 300,
                fontStyle: i === 2 ? "italic" : "normal",
                color: i === 2 ? COLORS.gold : COLORS.textSecondary,
                lineHeight: 1.7,
                marginBottom: 16 * s,
                opacity,
                transform: `translateY(${y * s}px)`,
              }}
            >
              {text}
            </p>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const CTAContent: React.FC<{
  frame: number;
  fps: number;
  s: number;
  width: number;
}> = ({ frame, fps, s, width }) => {
  const entryProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const opacity = interpolate(entryProgress, [0, 1], [0, 1]);
  const scale = interpolate(entryProgress, [0, 1], [0.9, 1]);

  const priceProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 120 * s,
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <p
          style={{
            fontSize: 48 * s,
            fontWeight: 200,
            color: COLORS.textPrimary,
            letterSpacing: "0.15em",
            margin: 0,
          }}
        >
          ${Math.round(interpolate(priceProgress, [0, 1], [0, 249]))}
          <span
            style={{
              fontSize: 24 * s,
              color: COLORS.textSecondary,
            }}
          >
            .00
          </span>
        </p>
        <div
          style={{
            marginTop: 24 * s,
            padding: `${14 * s}px ${48 * s}px`,
            border: `1px solid ${COLORS.gold}`,
            color: COLORS.gold,
            fontSize: 14 * s,
            fontWeight: 300,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          Shop Now
        </div>
        <p
          style={{
            fontSize: 12 * s,
            color: COLORS.textSecondary,
            marginTop: 16 * s,
            letterSpacing: "0.1em",
          }}
        >
          Limited Edition — Only 100 Pieces
        </p>
      </div>
    </AbsoluteFill>
  );
};

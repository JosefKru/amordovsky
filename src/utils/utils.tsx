export const renderMedia = (
  src: string | string[],
  className?: string,
  format?: string
) => {
  const imageExtensions = ["jpg", "jpeg", "png", "webp", "gif"];
  const videoExtensions = ["mp4", "webm", "ogg"];

  const extension = "MP4";

  if (Array.isArray(src) && format === "video-video") {
    return (
      <div
        className="feature-pic"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <video
          style={{ width: "50%" }}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
        >
          <source src={src[0]} type={`video/${extension}`} />
        </video>
        <video
          style={{ width: "50%" }}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
        >
          <source src={src[1]} type={`video/${extension}`} />
        </video>
      </div>
    );
  }

  if (typeof src === "string") {
    const extension = src.split(".").pop()?.toLowerCase();

    if (
      extension &&
      imageExtensions.includes(extension) &&
      typeof src === "string"
    ) {
      return (
        <img
          src={src}
          alt="project visual"
          className={className || "main-pic}"}
        />
      );
    }

    if (
      extension &&
      videoExtensions.includes(extension) &&
      typeof src === "string"
    ) {
      return (
        <video
          className="main-pic"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
        >
          <source src={src} type={`video/${extension}`} />
        </video>
      );
    }
  }

  return null;
};

export function isValidFeatureContent(
  feature: unknown
): feature is (string | string[][])[][] {
  return (
    Array.isArray(feature) &&
    Array.isArray(feature[0]) &&
    typeof feature[0][0] === "string" &&
    typeof feature[0][1] === "string"
  );
}
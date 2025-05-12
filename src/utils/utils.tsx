export const renderMedia = (src: string) => {
    const imageExtensions = ["jpg", "jpeg", "png", "webp", "gif"];
    const videoExtensions = ["mp4", "webm", "ogg"];
  
    const extension = src.split(".").pop()?.toLowerCase();
  
    if (extension && imageExtensions.includes(extension)) {
      return <img src={src} alt="project visual" className="main-pic" />;
    }
  
    if (extension && videoExtensions.includes(extension)) {
      return (
        <video className="main-pic" autoPlay muted loop>
          <source src={src} type={`video/${extension}`} />
        </video>
      );
    }
  
    return null;
  };
  
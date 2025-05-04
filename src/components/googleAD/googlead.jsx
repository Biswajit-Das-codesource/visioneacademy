import { useEffect, useRef } from "react";

const GoogleAd = ({ slot }) => {
  const adRef = useRef(null);
  const isInitialized = useRef(false); // ✅ prevents multiple pushes

  useEffect(() => {
    if (window.adsbygoogle && adRef.current && !isInitialized.current) {
      try {
        window.adsbygoogle.push({});
        isInitialized.current = true;
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7342848719995550"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    />
  );
};

export default GoogleAd;

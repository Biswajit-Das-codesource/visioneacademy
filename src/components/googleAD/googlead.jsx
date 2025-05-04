// src/components/GoogleAd.jsx
import { useEffect } from "react";

const GoogleAd = ({ slot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="ca-pub-7342848719995550"
         data-ad-slot={slot}
         data-ad-format="auto"
         data-full-width-responsive="true"
    />
  );
};

export default GoogleAd;

import "../../components/Cards/Cards.css";
import VideoBox from "../../components/VideoBox/VideoBox";
import * as api from "../../api";
import "./Speeches.css";
import { useEffect } from "react";
import { useState } from "react";

function Speeches() {
  const [videoIds, setVideoIds] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const videoIds = await api.getVideoIds();
      setVideoIds(videoIds.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {videoIds ? (
        <div className="video-list">
          {videoIds.map((video, index) => (
            <div key={index}>
              <VideoBox srcVideo={video.video_url} srcImage={video.thumbnail_url} title="This is sample" />
            </div>
          ))}
        </div>
      ) : (
        <h3 style={{marginTop: "calc(8rem - 4px)", padding: "2rem"}}>Loading....</h3>
      )}
    </>
  );
}

export default Speeches;

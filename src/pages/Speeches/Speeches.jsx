import "../../components/Cards/Cards.css";
import VideoBox from "../../components/VideoBox/VideoBox";
import * as api from "../../api";
import "./Speeches.css";
import { useEffect } from "react";
import { useState } from "react";

function Speeches() {
  const [videoIds, setVideoIds] = useState(null);
  const fetchData = async () =>{
    const videoIds = await api.getVideoIds();
    setVideoIds(videoIds.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {videoIds ? (
        <div className="video-list">
          {videoIds.map((video, index) => (
            <div style={{cursor: "auto"}} key={index}>
              <VideoBox
                status={video[0].status}
                srcVideo={video[0].video_url}
                srcImage={video[0].thumbnail_url}
                title={video[1]}
                videoId={video[2]}
                fetchData={fetchData}
              />
            </div>
          ))}
        </div>
      ) : (
        <h3 style={{ marginTop: "calc(8rem - 4px)", padding: "2rem" }}>
          Loading....
        </h3>
      )}
    </>
  );
}

export default Speeches;

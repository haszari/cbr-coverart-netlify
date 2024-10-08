import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import YAML from "yaml";

import NumberedPlaylist from "./NumberedPlaylist.js";
import CoverGrid from "./CoverGrid.js";

import "./djmix-info.scss";

const useShowYaml = (url) => {
  const [showInfo, setShowInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const raw = await response.text();

        const parsed = YAML.parse(raw);

        setShowInfo(parsed);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => {};
  }, [url]);

  return { showInfo, loading, error };
};

export default function ShowInfo() {
  let { ymlfile } = useParams();

  const fullFilePath = `${process.env.PUBLIC_URL}/shows/${ymlfile}`;
  const { showInfo, loading, error } = useShowYaml(fullFilePath);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const tracks = showInfo?.tracks;
  // const tracks = showInfo?.tracks.slice(0, 12);

  const styles = {};
  if (showInfo?.colours?.foreground) {
    styles.color = showInfo?.colours?.foreground;
  }
  if (showInfo?.colours?.background) {
    styles.background = showInfo?.colours?.background;
  }
  if (showInfo?.fontSize) {
    styles.fontSize = showInfo?.fontSize;
  }

  return (
    <div style={styles}>
      <CoverGrid tracks={tracks} />
      <NumberedPlaylist tracks={tracks} />

      <p>Show info for {showInfo.date} </p>
    </div>
  );
}

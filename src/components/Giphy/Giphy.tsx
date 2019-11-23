import React, { useEffect, useState, FC } from "react";
import { API } from "aws-amplify";

interface Props {
  text: string;
}
export const Giphy: FC<Props> = ({ text }) => {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await API.get("giphyFunction", "/giphy?text=" + text, {});
      setUrl(data.image);
    };
    fetchData();
  }, [text]);
  if (!url) return null;
  return <img src={url} height="100" alt={text} />;
};

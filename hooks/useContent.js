import { useEffect, useState } from "react";

const useContent = ({ baseUrl, token, projectId }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getEntries = async (body) => {
    setIsLoading(true);
    setIsLoaded(false);

    const response = await fetch(
      `${baseUrl}/api/projects/${projectId}/content`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    setContent(data);
    setIsLoading(false);
    setIsLoaded(true);

    return data;
  };

  return { content, isLoading, isLoaded, getEntries };
};

export default useContent;

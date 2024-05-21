"use client";
import { getLastMovie } from "../services/api/tmdb";
import { useEffect, useState } from "react";

export const Browse: React.FC = () => {
  const [tmdbData, setTmdbData] = useState<any>(null);

  useEffect(() => {
    const fetchTmdbMovie = async () => {
      try {
        const data = await getLastMovie();
        setTmdbData(data);
      } catch (err) {
        // setError("Error retrieving movie data");
      } finally {
        // setLoading(false);
      }
    };

    fetchTmdbMovie();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tmdbData?.original_title}
      <br />
      {tmdbData?.overview}
    </main>
  );
};

export default Browse;

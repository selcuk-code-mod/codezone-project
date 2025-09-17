import { useState, useEffect } from "react";
import dummyData from "@/lib/dummyData";

export interface Trend {
  id: string;
  title: string;
  author: string;
  color: string;
  avatar: string;
}

interface DummyDataItem {
  attributes: {
    trends: boolean;
    title: string;
    authors: string[];
    avatar: string;
  };
}

export const useTrends = () => {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [visibleTrends, setVisibleTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    try {
      // Dummy verilerden trends özelliği true olanları filtrele
      const trendItems = dummyData
        .filter((item: DummyDataItem) => item.attributes.trends === true)
        .map((item: DummyDataItem, index: number) => ({
          id: `0${index + 1}`, // Tasarımdaki formatı korumak için
          title: item.attributes.title,
          author: item.attributes.authors[0],
          color: getRandomColor(),
          avatar: item.attributes.avatar,
        }));

      setTrends(trendItems);
      setVisibleTrends(trendItems.slice(0, 3)); // İlk 3 kartı göster
      setLoading(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Trend verileri yüklenirken bir hata oluştu");
      }
      setLoading(false);
    }
  }, []);

  const toggleTrends = () => {
    setShowAll(!showAll);
    setVisibleTrends(showAll ? trends.slice(0, 3) : trends);
  };

  // Rastgele renk üretmek için yardımcı fonksiyon
  const getRandomColor = () => {
    const colors = ["#90D7HE", "#EDCZRC", "#E1FH7G"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return {
    trends: visibleTrends,
    loading,
    error,
    showAll,
    toggleTrends,
    totalTrendsCount: trends.length,
  };
};

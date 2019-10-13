import React, { useEffect } from "react";
import { isTSEnumMember } from "@babel/types";

interface Props {
  categoryId?: string;
  category: any;
  error: Error;
  ranking: any;
  onMount: Function;
}
const Ranking: React.FC<Props> = ({
  categoryId = "1",
  category,
  error,
  ranking,
  onMount
}) => {
  useEffect(() => {
    onMount(categoryId);
  }, [categoryId]);
  return (
    <div>
      <h2>
        {typeof category !== "undefined" ? `${category.name}のランキング` : ""}
      </h2>
      {(() => {
        if (error) {
          return <p>エラーが発生しました。リロードしてください。</p>;
        } else if (typeof ranking === "undefined") {
          return <p>読み込み中</p>;
        } else {
          return (
            <ol>
              {ranking.map((item: any) => (
                <li key={`ranking-item-${item.code}`}>
                  <img alt={isTSEnumMember.name} src={item.imageUrl} />
                  <a href={item.url} target="_blank">
                    {item.name}
                  </a>
                </li>
              ))}
            </ol>
          );
        }
      })()}
    </div>
  );
};
export default Ranking;

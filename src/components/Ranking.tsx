import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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
              {ranking.map((item: any, i: number) => (
                <Card
                  key={`ranking-item-${item.code}`}
                  style={{ maxWidth: "500px", margin: "32px auto" }}
                >
                  <CardMedia
                    image={item.imageUrl}
                    title={`${i + 1}位　${item.name}`}
                    style={{ height: "200px" }}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {`${i + 1}位　${item.name}`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" fullWidth href={item.url}>
                      商品ページへ
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </ol>
          );
        }
      })()}
    </div>
  );
};
export default Ranking;

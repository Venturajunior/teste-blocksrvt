import { useContext, useState } from "react";
import { Card } from "../Card";
import { CardListContainer, CardListGrid } from "./styles";
import { FamiliesContext } from "../../contexts/FamiliesContext";
import { getImgUrl } from "../../utils/getImgUrl";
import InfiniteScroll from "react-infinite-scroll-component";

export const CardList: React.FC = () => {
  const { families, fetchFamilies } = useContext(FamiliesContext);
  const [hasMoreData, setHasMoreData] = useState(true);

  const cardsListLength = families.length;

  const fetchMoreData = async () => {
    const skip = cardsListLength + 1;
    const take = 10;
    try {
      await fetchFamilies({ skip, take })
    } catch (error) {
      setHasMoreData(false);
    }
  }

  return (
    <CardListContainer>
      <h2>Resultados</h2>
      <InfiniteScroll
        dataLength={cardsListLength}
        next={fetchMoreData}
        hasMore={hasMoreData}
        loader={"..."}
      >
        <CardListGrid>
          {families.map((family) => {
            return (
              <Card
                key={family.id}
                imgUrl={getImgUrl(family.id)}
                name={family.details.name}
              />
            )
          })}
        </CardListGrid>
      </InfiniteScroll>

    </CardListContainer>
  )
}
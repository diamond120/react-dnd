import React, { useContext } from "react";
import DragItem from "./DragItem";
import { AppWrapper, Grid, GridImage, GridItem } from "./Styles";
import GridContext from "./GridContext";

function App() {
  const { items, moveItem } = useContext(GridContext);

  return (
    <AppWrapper>
      <Grid>
        {items.map(item => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
              <GridImage src={item.src}></GridImage>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </AppWrapper>
  );
}

export default App;

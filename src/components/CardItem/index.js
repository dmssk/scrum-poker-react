import React from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material"
import styles from "./CardItem.module.scss"
import classNames from "classnames"

function CardItem(props) {
  const { title, big, selected, hiddenValue, onSelect } = props;
  const getRandomCardStyle = () => {
    return `hiddenCard${Math.floor(Math.random() * 3) + 1}`
  };

  return (
    <Card
      raised={selected}
      className={classNames(
        hiddenValue && styles[getRandomCardStyle()],
        styles.cardWrapped,
      )}
    >
      <CardActionArea
        className={big ? styles.cardBig : styles.card}
        onClick={onSelect}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


const areEqual = (prevProps, nextProps) => {
  return prevProps.selected === nextProps.selected
    && prevProps.title === nextProps.title
    && prevProps.userName === nextProps.userName
    && prevProps.hiddenValue === nextProps.hiddenValue
    && prevProps.socket === nextProps.socket;
}

export default React.memo(CardItem, areEqual);

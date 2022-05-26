import React from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material"
import styles from "./CardItem.module.scss"

function CardItem(props) {
  const { title, big, selected, onSelect } = props;

  return (
    <Card raised={selected}>
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

export default CardItem;

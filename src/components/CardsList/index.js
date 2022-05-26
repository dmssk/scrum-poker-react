import React, {useState} from 'react';
import {Box, Button, ButtonGroup, Divider, Grid, Typography} from "@mui/material"
import styles from './CardsList.module.scss'
import cards from './constants'
import CardItem from "../CardItem"

function CardsList() {
  const [selectedCard, setSelectedCard] = useState(null);

  const checkIsCardSelected = (card) => {
    if (selectedCard && card) {
      return card.id === selectedCard.id;
    }
    return false;
  };

  return (
    <Box className={styles.allCardsBox}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" className={styles.title}>
            Select your estimate:
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <Grid spacing={3} container>
            {cards.map((card) => (
              <Grid key={card.id} item xs={2}>
                <CardItem
                  title={card.value}
                  selected={checkIsCardSelected(card)}
                  onSelect={() => setSelectedCard(card)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4} className={styles.selectedCard}>
          <CardItem
            title={selectedCard ? selectedCard.value : 'Select a card'}
            big
            onSelect={() => false}
          />
        </Grid>
      </Grid>
      <Divider className={styles.divider} />
      <Grid container spacing={8}>
        <Grid item xs={12} className={styles.actionButtons}>
          <ButtonGroup variant="contained">
            <Button onClick={() => setSelectedCard(null)}>Reset Card</Button>
            <Button>Reveal Cards</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  )
}
export default CardsList;

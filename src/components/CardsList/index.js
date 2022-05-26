import React, {useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, Divider, Grid, TextField, Typography} from "@mui/material"
import styles from './CardsList.module.scss'
import cards from './constants'
import CardItem from "../CardItem"

import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";

function CardsList() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [name, setName] = useState('');
  const [socket, setSocket] = useState(null);
  const [userId] = useState(Math.random() * 100);
  const [othersData, setOthersData] = useState(null);

  async function getData() {
    try {
      const response = await fetch('http://localhost:8080/getData');
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData().then(({data}) => {
      setOthersData(data);
    });
    const sockedEntity = socketClient(SERVER);
    setSocket(sockedEntity);

    sockedEntity.on('card-selected', data => {
      setOthersData(data);
    })

    return () => {
      console.log('userId', userId);
      sockedEntity.emit('clear-data', {
        userId
      })
      sockedEntity.disconnect();
    };
  }, []);

  const checkIsCardSelected = (card) => {
    if (selectedCard && card) {
      return card.id === selectedCard.id;
    }
    return false;
  };

  const handleNameChange = ({target}) => {
    setName(target.value);
    if (selectedCard) {
      socket.emit('card-select', {
        value: selectedCard.value,
        userId,
        userName: target.value,
      })
    }
  }

  const handleSelectCard = (card) => {
    setSelectedCard(card);
    socket.emit('card-select', {
      value: card.value,
      userId,
      userName: name,
    })
  }

  return (
    <Box className={styles.allCardsBox}>
      <Grid container>
        <Grid item xs={12}>
          <Box mb={3}>
            <TextField
              label="Your name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
          </Box>
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
                  socket={socket}
                  userName={name}
                  onSelect={() => handleSelectCard(card)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4} className={styles.selectedCard}>
          <CardItem
            title={selectedCard ? selectedCard.value : 'Select a card'}
            big
            hiddenValue={!selectedCard}
            onSelect={() => false}
          />
        </Grid>
      </Grid>
      <Divider className={styles.divider} />
      <Grid container spacing={8}>
        <Grid item xs={12} className={styles.actionButtons}>
          <ButtonGroup variant="contained">
            <Button onClick={() => setSelectedCard(null)}>Reset Card</Button>
            <Button disabled={!selectedCard || !name}>Reveal Cards</Button>
          </ButtonGroup>
          <Box ml={3}>
            <Typography>
              Users selected {othersData ? othersData.selectedCards.length : '0'} of {othersData ? othersData.usersCount : '0'} card(s)
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        {othersData && othersData.selectedCards.map(item => (
        <Grid item xs={2} key={item.userId}>
            <Typography>{item.userName || item.userId}</Typography>
            <CardItem
              title={item.value}
              onSelect={() => false}
            />
        </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CardsList;

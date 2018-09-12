import React from 'react';
import Header from './Header';
import LadderListItem from './LadderListItem';

export default ({
  decks,

  onSelect,
}) => (
  <div className="DeckMenu">
    <Header background="white">Lessons</Header>

    {decks.map(deck => (
      <LadderListItem
        key={deck.name}
        onClick={() => onSelect(deck)}
      >
        {deck.name}
      </LadderListItem>
    ))}
  </div>
);
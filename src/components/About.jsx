import React from "react";
import "../components/styles/aboutStyles.css"

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12 border bg-dark">
            <div className="about-bg">
            <h1 className="font-weight-light">About</h1>
            <p>
              Magic: The Gathering (colloquially known as Magic or MTG) is a tabletop and digital collectible card game created by Richard Garfield. Released in 1993 by Wizards of the Coast (now a subsidiary of Hasbro), Magic was the first trading card game and had approximately thirty-five million players as of December 2018, and over twenty billion Magic cards were produced in the period from 2008 to 2016, during which time it grew in popularity.
            </p>
            <p>
              A player in Magic takes the role of a Planeswalker, doing battle with other players as Planeswalkers by casting spells, using artifacts, and summoning creatures as depicted on individual cards drawn from their individual decks. A player defeats their opponent typically (but not always) by casting spells and attacking with creatures to deal damage to the opponent's "life total," with the object being to reduce it from 20 to 0. Although the original concept of the game drew heavily from the motifs of traditional fantasy role-playing games such as Dungeons & Dragons, the gameplay bears little similarity to pencil-and-paper adventure games, while simultaneously having substantially more cards and more complex rules than many other card games.
            </p>
            <p>
              Magic can be played by two or more players, either in person with printed cards or on a computer, smartphone or tablet with virtual cards through the Internet-based software Magic: The Gathering Online or other video games such as Magic: The Gathering Arena. It can be played in various rule formats, which fall into two categories: constructed and limited. Limited formats involve players building a deck spontaneously out of a pool of random cards with a minimum deck size of 40 cards; in constructed formats, players create decks from cards they own, usually with a minimum of 60 cards per deck.
            </p>
            <p>
              New cards are released on a regular basis through expansion sets. An organized tournament system (the WPN) played at the international level and a worldwide community of professional Magic players has developed, as well as a substantial resale market for Magic cards. Certain cards can be valuable due to their rarity in production and utility in gameplay, with prices ranging from a few cents to tens of thousands of dollars.
            </p>
            <h1 className="font-weight-light">Gameplay</h1>
            <p>
              A standard game of Magic involves two or more players who are engaged in a battle acting as powerful wizards, known as Planeswalkers. Each player has their own deck of cards, either one previously constructed or made from a limited pool of cards for the event. A player starts the game with a "life total" of twenty and loses the game when their life total is reduced to zero. A player can also lose if they must draw from their deck when no cards are left. In addition, some cards specify other ways to win or lose the game.
            </p>
            <p>
              Cards in Magic: The Gathering have a consistent format, with half of the face of the card showing the card's art, and the other half listing the card's mechanics, often relying on commonly-reused keywords to simplify the card's text. Cards fall into generally two classes: lands and spells. Lands provide mana, or magical energy, which is used as magical fuel when the player attempts to cast spells. Players can only play one land card per turn, with most land providing a specific color of mana when they are "tapped" (usually by rotating the card 90 degrees to show it has been used that turn), with each land only able to be tapped for mana once per turn. Spells consume mana, typically with at least one or more mana of a specific color. More powerful spells cost more mana, so as the game progresses, more land will be in play, more mana will be available, and the quantity and relative power of the spells played tends to increase. Spells come in several varieties: non-permanents like "sorceries" and "instants" have a single, one-time effect before they go to the "graveyard" (discard pile); "enchantments" and "artifacts" that remain in play after being cast to provide a lasting magical effect; and "creature" spells summon creatures that can attack and damage an opponent as well as used to defend from the opponent's creature attacks. Land, enchantments, artifacts, and creature cards are considered permanents as they remain in play until removed by other spells, ability, or combat effects. The set Lorwyn introduced the new "planeswalker" card type, which represents powerful allies who fight with their own magic abilities.
            </p>
            <p>
              Players begin the game by shuffling their decks and then drawing seven cards. On each player's turn, following a set phase order, they draw a card, tap their lands and other permanents as necessary to gain mana as to cast spells, engage their creatures in a single attack round against their opponent who may use their own creatures to block the attack, and then complete other actions with any remaining mana. Tapped resources remain tapped until the start of the player's next turn, which may leave them without land to draw for mana to cast spells in reaction to their opponent, or without creatures to block attacks, so the player must also plan ahead for their opponent's turn. Most actions that a player can perform enter the "Stack", a concept similar to the stack in computer programming, as either player can react to these actions with other actions, such as counter-spells; the stack provides a method of resolving complex interactions that may result in certain scenarios.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
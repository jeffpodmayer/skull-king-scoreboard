# Skull King Scoreboard Design Document - Single Page Application

## Background

This project is a React-based application designed to ease score tracking for the card game Skull King, a trick-taking game where players bid on the number of tricks they expect to win in each round. The game introduces unique scoring rules that can sometimes be challenging to keep track of, especially when multiple players are involved.

The purpose of this application is to allow one player to act as the scorekeeper, easily adding players, recording their bids, calculating scores automatically based on game rules, and displaying the total points after each round. Also, the application supports bonuses for special actions like capturing a pirate or winning a round with the highest card.

The application allows players to record their bids, tricks won, and apply the necessary penalties or rewards, providing a real-time calculation of scores. The application supports adding any number of players, up to the maximum allowed by the game, and features an optional history component for reviewing previous game rounds.

## Context

The Skull King scoring application is designed for players of the card game Skull King who want a more streamlined and automated way to keep track of scores. Typically, during a Skull King game, one player is responsible for manually calculating the score for each round based on the bids and tricks won by all participants. Given the complexity of Skull King's scoring system—where correct bids earn points, incorrect bids incur penalties, and bonuses apply for special achievements—keeping track of everything can quickly become cumbersome, especially in longer games with more players.

## Stateless Approach

Simplicity: No need to manage a backend server or database.
Performance: The application will be lightweight.
Flexibility: Users can quickly start new games without any setup or data migration.

## High Level Architecture

App Component:
Manages the overall state of the game (players, rounds, scores) in memory.

PlayerList Component:
Allows users to add or remove players.
Displays current players in the game and their bids.

RoundTracker Component:
Facilitates entering bids and recording tricks won.
Calculates scores based on the game rules after each round.

Scoreboard Component:
Displays the current scores for all players after each round.
Automatically updates when scores change.

## User Experience and Flow

Starting a Game:
Users enter player names and start a game directly in the application.
The game state is initialized in memory.

Playing the Game:
Users enter bids for tricks and record the actual tricks won.
After each round, scores are calculated and displayed in the scoreboard.

Ending the Game:
When the game ends, all data is lost once the page is refreshed or closed, as it is not saved anywhere.
Users can start a new game without any history of past games.

## Application Logic and Outline

## Tech Choices

**React**
Dynamic User Experience: React allows you to create a smooth, interactive UI where players can enter their bids, see scores update in real-time, and navigate through the game easily.

Reusability: Components like PlayerList, RoundTracker, and Scoreboard can be developed as independent, reusable units, making your codebase more organized and maintainable.

**TypeScipt**
NOT SURE IF I SHOULD USE THIS... seems like it might be beneficial

**CSS**
UI: CSS to create a visually appealing interface for the scoring application. I can apply themes, colors, and layouts that match the spirit of the Skull King game.

Responsive Design: Application should look clean on the web, as well as, on various devices, especially mobile phones.

# Skull King Scoreboard Design Document - Single Page Application

## Background

This project is a React-based application designed to ease score tracking for the card game Skull King, a trick-taking game where players bid on the number of tricks they expect to win in each round. The game introduces unique scoring rules that can sometimes be challenging to keep track of, especially when multiple players are involved.

The purpose of this application is to allow one player to act as the scorekeeper, easily adding players, recording their bids, calculating scores automatically based on game rules, and displaying the total points after each round. Also, the application supports bonuses for special actions like capturing a pirate or winning a round with the highest card.

The application allows players to record their bids, tricks won, and apply the necessary penalties or rewards, providing a real-time calculation of scores. The application supports adding any number of players, up to the maximum allowed by the game.

## Context

The Skull King scoring application is designed for players of the card game Skull King who want a more streamlined and automated way to keep track of scoring. Typically, during a Skull King game, one player is responsible for manually calculating the score for each round based on the bids and tricks won by all participants. Given the complexity of Skull King's scoring system—where correct bids earn points, incorrect bids incur penalties, and bonuses apply for special achievements—keeping track of everything can quickly become cumbersome, especially in longer games with more players.

## Stateless Approach

Simplicity: No need to manage a backend server or database.

Performance: The application will be lightweight.

Flexibility: Users can quickly start new games without any setup or data migration.

1. State Management
   Use State Hooks: Utilize React state hooks (useState) for managing:

- Current round.
- Player list (name, score, bid, tricks).
- Historical scores for past rounds.

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

## Tech Choices

### **React**

Dynamic User Experience: React allows you to create a smooth, interactive UI where players can enter their bids, see scores update in real-time, and navigate through the game easily.

Reusability: Components like PlayerList, RoundTracker, and Scoreboard can be developed as independent, reusable units, making your codebase more organized and maintainable.

### **TypeScipt**

NOT SURE IF I SHOULD USE THIS... seems like it might be beneficial

### **CSS**

UI: CSS to create a visually appealing interface for the scoring application. I can apply themes, colors, and layouts that match the spirit of the Skull King game.

Responsive Design: Application should look clean on the web, as well as, on various devices, especially mobile phones.

Styling and Responsiveness
CSS Styling: Apply styles for layout consistency and user-friendly design.
Responsive Design: Ensure the application is usable on various screen sizes (desktop, tablet, mobile).

Accessibility
Keyboard Navigation:
Ensure buttons and inputs are accessible via keyboard.

## Application Logic and Outline

1. Application Initialization
   Set up the default state (e.g., round number, player list, scores).
   Initialize necessary components (e.g., score tracking, player management).

2. User Interface Interactions
   Add Player: Capture the player's name from the input field.
   Validation: Check for empty names or duplicates.
   Update State: Add the player to the player list and reset the input field.

3. Start Game:
   Set Initial Round: Reset scores and set the current round to 1.
   Initialize Player Scores: Set all players' scores to 0 for the new round.

4. Track Scores:
   Input Handling: Capture bids and tricks won for each player.
   Score Calculation:
   Calculate scores based on:
   Correctly guessed tricks.
   Incorrect guesses (penalizing for deviations).
   Successful zero tricks prediction (with round multiplier).
   Bonus Points awarded from special cards collected by player.

5. Update State: Update the player scores based on calculations.

6. Submit Scores:
   Finalize Scores: Save the scores for the current round.
   Increment Round: Move to the next round and reset inputs for new bids and tricks.
   Reset Round:
   Clear Inputs: Reset all player inputs for bids and tricks for the current round.
   View Game History:
   Display Previous Scores: Retrieve and display scores from previous rounds.
   Allow users to navigate back to the main scoring interface.

7. Error Handling
   Validation Checks: Handle scenarios for invalid inputs (e.g., empty player names, incorrect bid/trick numbers).
   User Feedback: Provide feedback for errors (e.g., alerts or messages for invalid actions).

CatsAtWar

This is a visual diagram of CatsAtWar, a JavaScript game that creates two players to battle it out in the console (straight html version) or on the webpage (JS version with html and css).

Problem domain: Cats At War is a two-player card game. It's essentially the game of War (not Thrones), but it's played between two cats (this is a fact, but not important to game play). A standard deck of 52 cards is created and randomly dealt to the two players so that each cat has a hand of 26 cards (no duplicated cards).

Cat1 and Cat2 each play the first card from their respective hands. The cat with the higher card wins the round and keeps both cards. In the event that Cat1 and Cat2's cards tie (have equal rank), both players put down an additional 3 cards into the "War cards" pile; this pile now contains 8 cards. If the last card played by Cat1 is higher than the last card played by Cat2, Cat1 keeps all 8 cards; conversely, if Cat2's last card is higher than Cat1's, Cat2 keeps all 8 cards.

This cycle of play continues until one of the cats has 0 cards left; the other cat (who now has all the cards) wins the game.
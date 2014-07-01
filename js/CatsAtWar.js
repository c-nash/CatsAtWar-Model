var war;

	function Deck() {
		this.cards = [];
		this.count = function () {
			return this.cards.length;
		}
		this.init = function() {
			for (s = 1; s <= 4; s++) { 
				for (r = 1; r <= 13; r++) {         
					this.cards.push(new Card(r, s)); //push adds a value to the end of the array
				}
			}
		}
	}

	function Card(rank, suit) {
		this.rank = rank;
		this.suit = suit;
		this.showRank = function() {
			var ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
			return ranks[this.rank - 1]
		}
		this.showCardName = function() {
			var suits = ["Hearts", "Spades", "Diamonds", "Clubs"]
			return this.showRank() + " of " + suits[this.suit - 1]
		}
	}

	function Player(name) {
		this.name = name;
		this.hand = [];
		this.topOfHand = function() {
			return this.hand.shift();
		}
		this.handCount = function() {
			return this.hand.length
		}
	}

	function TheGame() {
		this.p1;
		this.p2;
		this.init = function(cat1,cat2) {
			var d, p1, p2;
			d = new Deck();
			d.init();

			p1 = new Player(cat1);
			p2 = new Player(cat2);

			// deal cards here
			while (d.count() > 0) {
				var index = Math.floor(Math.random() * d.count());
				var randomCard = d.cards.splice(index,1);

				p1.hand.push(randomCard[0]);

				index = Math.floor(Math.random() * d.count());
				randomCard = d.cards.splice(index,1);

				p2.hand.push(randomCard[0]);
			}       

			alert("The cats have decided to procrastinate by playing a friendly game of war.  Let's see who is victorious.");

			this.p1 = p1;
			this.p2 = p2;
		}
			this.play = function() {
				var p1 = this.p1;
				var p2 = this.p2;

				if (p1.handCount() > 0 && p2.handCount() > 0) {
					var p1Card = p1.topOfHand();
					var p2Card = p2.topOfHand();

					if (p1Card.rank > p2Card.rank) {
						p1.hand.push(p1Card);
						p1.hand.push(p2Card);
			        
						//tried making this more dry with a message function, but it stopped working...            
						return p1.name + "'s " + p1Card.showCardName() + " trumps " + 
						p2.name + "'s " + p2Card.showCardName() + ".  " + p1.name + 
						" wins this round and has " + p1.handCount() + " card(s) vs. " + 
						p2.name + "'s " + p2.handCount() + " card(s)."; 
					}
					if (p2Card.rank > p1Card.rank) {
						p2.hand.push(p1Card);
						p2.hand.push(p2Card);
						        
						return p2.name + "'s " + p2Card.showCardName() + " trumps " + 
						p1.name + "'s " + p1Card.showCardName() + ".  "+ p2.name + 
						" wins this round and has " + p2.handCount() + " card(s) vs. " + 
						p1.name + "'s " + p1.handCount() + " card(s).";
					}
					if (p1Card.rank == p2Card.rank) {
						alert(p1.name + "'s " + p1Card.showCardName() + " and " + 
						p2.name + "'s " + p2Card.showCardName() + " tie!  This means war!");
						alert("Both players hit 3 cards..."); 

						this.warCards = [];

						this.warCards.push(p1Card);
						this.warCards.push(p2Card);
						console.log(p1Card.showCardName() + "; " + p2Card.showCardName() + "; " + this.warCards.length);
						console.log(p1.handCount() + "; " + p2.handCount());

						for (i = 1; i <4; i++) {
							p1Card = p1.topOfHand();
							p2Card = p2.topOfHand();

							this.warCards.push(p1Card);
							this.warCards.push(p2Card);

							alert(p1.name + ": " + p1Card.showCardName() + " vs. " + p2.name + ": " + 
							p2Card.showCardName() + ".  Cards in the pot: " + this.warCards.length);
							console.log(p1.handCount() + "; " + p2.handCount() + "; " + this.warCards.length);
						}

						if (p1Card.rank > p2Card.rank) {
							p1.hand.push.apply(p1.hand, this.warCards);
							console.log(p1.handCount() + "; " + p2.handCount() + "; " + this.warCards.length);
							alert(p1.name + " wins the pot and gets all the cards!"); 
							return p1.name + " wins the pot and gets all the cards!  " + p1.name + ": " + 
							p1.handCount() + " cards; " + p2.name + ": " + p2.handCount() + " cards."; 
							}
						if (p2Card.rank > p1Card.rank) {
							p2.hand.push.apply(p2.hand, this.warCards);
							console.log(p1.handCount() + "; " + p2.handCount() + "; " + this.warCards.length);         
							alert(p2.name + " wins the pot and gets all the cards!");
							return p2.name + " wins the pot and gets all the cards!  " + p2.name + ": " + 
							p2.handCount() + " cards; " + p1.name + ": " + p1.handCount() + " cards."; 
						} else {
							alert(p1.name + " and " + p2.name + " tie again!  This is too much war--no one gets the pot.");
						}
				} else {
					if (p1.handCount() < 1) {
						alert(p2.name + " is the victor!  May this cat reign with justice and humility.");
						return p2.name + " is the victor!  May this cat reign with justice and humility.";
					} else {
						alert(p1.name + " is the victor!  May this cat reign with justice and humility.");
						return p1.name + " is the victor!  May this cat reign with justice and humility.";
					}
				}
			}
		}
	}

	$("button#playgame").on("click", function(){
		var output, cat1, cat2;

		cat1 = $("#cat1").val();	
		cat2 = $("#cat2").val();

		if (!war) {
			war = new TheGame();
			war.init(cat1,cat2);
		}

		output = war.play();
		$("#game-info").fadeOut("slow", function(){
			$("#game-info").html(output);
			$("#game-info").fadeIn("slow");
		});
	});



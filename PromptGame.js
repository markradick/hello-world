window.setTimeout(function() {
// put all of your JS code here

	// Start of Game Dialog
	alert("Welcome to Star Wars Game! In Order to Play, Type the Number for your Choice of Dialogue/Action. Press OK To Start the Game As Senator Palpatine.");

	//First Mission
	alert("Mission 1")
	alert("Anakin comes to you for help. He seems distressed. 'I killed a whole village of sand people. Not Just the Men but the Women and Children too. Should I tell the Jedi Council?' ");

	//Choice 1
	var anakinInfluence = prompt("You Decide to Tell Anakin... (1) The Way to Mastering the Force is not in the politics of the Jedi Council; (2) This will certainly delay your title of Jedi Master. You mustn't tell them for your own good.");
	var anakinPath = Number(anakinInfluence);

	//Path 1-1
	if (anakinPath === 1) {
		alert("Anakin Asks what you mean. 'How else will I Learn?'");

		//Choice 1-1
		{

		let anakinInfluence = prompt("There are many Jedi in the Galaxy. None are as strong as you... (1) You must find training elsewhere, Anakin; (2) The Force will guide you to what you seek. ");
		let anakinPath = Number(anakinInfluence);

			//Path Switch 1-2

			switch (anakinPath) {
				case 1: 
					alert("Anakin decides to meditate on a faraway world to become the strongest jedi to ever live.");
					alert("Anakin will be Back to destroy you, as a pure jedi.") ;
					break;
				case 2: 
					alert("I See. I think the force guided me here.");
					alert("Success, Anakin Joins the Dark Side.");
				default:
					text = "You Forgot to Use A Real Number!";
			}

			alert("Game Over.");

		}

	}

	//Path 1-2
	else if (anakinPath === 2) {
		alert("Anakin seems hesitant. 'That would betray their trust.'");

		//Choice 1-2
		{
		let anakinInfluence = prompt("There are many times in life when one must be willing to... (1) Put their interests above their loyalty; (2) Do whatever it takes to get ahead. ");
		let anakinPath = Number(anakinInfluence);

			//Path Switch 1-2
			switch (anakinPath) {
				case 1:
					alert("Anakin Seems unconvinced. He is on to your sith nature.");
					alert("You are the sith lord! You Must die.")
					break;
				case 2:
					alert("Anakin is unconvinced. He will return with the Jedi Council for your head.");
					break;
				default: 
					text = "You Forgot to Use a Real Number!";
			}

		alert("Game Over.");
		}
	}
	
	//Invalid Entry
	else {
		alert("Don't Be Smart!!!! Enter One of the Displayed Numbers or you're Disqualified!");
	}


	// var pickChar = prompt("Type the Number of your choice to begin as that character. (1) Chancellor Palpatine");

	// var playerChar = Number(pickChar);

	// 	if (playerChar = 1) {
	// 		alert("Playing as the Chosen One is Currently Disabled");

	// 	else if (playerChar = 0) {
	// 		alert("Playing as the Chosen One is Currently Disabled");
	// 	}

	// 	else {
	// 		alert("Invalid Entry!");
	// 	}
	//<---------- Complicated Code ---------->

	

}, 500);

// const 
// let 
// ^^^^ <-- Look Up
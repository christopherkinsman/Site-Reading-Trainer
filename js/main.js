// This is a webpage designed to help train sight reading ability.
// Click start, then press the piano key to match the highlighted music note.
// Once four keys are pressed, the percent of correct notes selected will be displayed.

window.onload = pageReady;

function pageReady()
{
	//Variables for page elements.
	var start = document.getElementById("start");
	var description = document.getElementById("description");

	var container = document.getElementById("container");
	var piano = document.getElementById("piano");

	var n1 = document.getElementById("note-one");
	var n2 = document.getElementById("note-two");
	var n3 = document.getElementById("note-three");
	var n4 = document.getElementById("note-four");

	var lowC = document.getElementById("key-low-c");
	var d = document.getElementById("key-d");
	var e = document.getElementById("key-e");
	var f = document.getElementById("key-f");
	var g = document.getElementById("key-g");
	var a = document.getElementById("key-a");
	var b = document.getElementById("key-b");
	var c = document.getElementById("key-c");

	var displayScore = document.getElementById("score");
	var scoreText = document.getElementById("score-text");

	//Variables to store note information.
	var links = [n1,n2,n3,n4];

	var noteCount = links.length;

	var notes =[]; 
	var noteName = ["e","f","g","a","b","c"];
	var noteHeight = [-70, -82, -95, -108, -120, -132];

	var currentNote = 0;
	var score = 0;

	//Show notes when start button is clicked.
	function showNotes()
	{
		start.style.display = "none";
		description.style.display = "none";
		container.style.display = "block";
	}

	//Create random notes when page starts.
	function createNote(n)
	{
		//create notes for each element in links array.
		//Now there are only four notes linked. 
		//I would like to add the option to make more.
		for (var n = 0; n < noteCount; n++) 
		{
			//create randome value within current range.
			var noteNumber = random(6);
			notes[n] = 
			{
				value: noteNumber,
				link: links[n],
				width: (n+1) * 100,
				height: noteHeight[noteNumber],
				name: noteName[noteNumber]
			};
		}
	}
	//Shows the notes in the score.
	function displayNote(n)
	{
		for (var n = 0; n < noteCount; n++) 
		{
			notes[n].link.style.marginLeft = notes[n].width + "px";
			notes[n].link.style.marginTop = notes[n].height + "px";

			if(n == currentNote)
			{
				notes[n].link.style.filter = "invert(100%) sepia(100%) hue-rotate(30deg) saturate(1000%)";
			}
		}
	}

	//Function to create random note values.
	function random(r)
	{
		return Math.floor(Math.random() * r); 
	}

	//Check if the correct note was selected when a key is pressed.
	function checkNote(x)
	{
		//end if keys have been pressed more than the number of notes.
		if(currentNote <= (notes.length - 1))
		{
			//add to the correct score when key value matches note value.
			if(x == notes[currentNote].value)
			{
				score++
			}

			//change the color to show the current note value.
			notes[currentNote].link.style.filter = "invert(0%) sepia(100%) hue-rotate(30deg) saturate(1000%)";

			//add to the current note number when a key is pressed
			currentNote++;

			//change the color to show the current note value.
			if(currentNote <= (notes.length - 1))
			{
				notes[currentNote].link.style.filter = "invert(100%) sepia(100%) hue-rotate(30deg) saturate(1000%)";
			}
			else
			{ 
				//Display score when enough keys have been selected.
				var total = ((score / 4) * 100) + "%";

				displayScore.style.display = "block";
				scoreText.innerHTML = "You got " + total + " of the notes correct.";

				container.style.display = "none";
			}

		}
	}

	//Create notes on page start.
	createNote(noteCount);
	displayNote(noteCount);

	//Assigns each key a value and updates score.
	function clicklowC(){ checkNote(-2) }
	function clickd(){ checkNote(-1) }
	function clicke(){ checkNote(0) }
	function clickf(){ checkNote(1) }
	function clickg(){ checkNote(2) }
	function clicka(){ checkNote(3) }
	function clickb(){ checkNote(4) }
	function clickc(){ checkNote(5) }

	//Show notes when nstart is pressed.
	start.onclick = showNotes;

	//Run update functions when a key is pressed.
	lowC.onclick = clicklowC;
	d.onclick = clickd;
	e.onclick = clicke;
	f.onclick = clickf; 
	g.onclick = clickg; 
	a.onclick = clicka; 
	b.onclick = clickb; 
	c.onclick = clickc;  
}

















var beatpack = [
	{
		name: "İzmir Marşı Piyano",
		artist: "Turna Müzik from Youtube",
		src: "https://github.com/gleriann/gleriann/raw/main/%C4%B0zmir%20Mar%C5%9F%C4%B1%20Piyano.mp3",
		thumbnail: "url(https://github.com/gleriann/gleriann/raw/main/2196223_810x458.jpg)"
	},
	{
		name: 'Türk Marşı',
		artist: "Fazıl Say",
		src: "https://github.com/gleriann/gleriann/raw/main/turkish%20march%20fazil%20say.mp3",
		thumbnail: "url(https://github.com/gleriann/gleriann/raw/main/050120192048431389434_2.jpeg)"
	},
	{
		name: 'The Business',
		artist: "Tiesto",
		src: "https://github.com/gleriann/gleriann/raw/main/SnapInsta.io%20-%20Ti%C3%ABsto%20-%20The%20Business%20(Official%20Audio)%20(128%20kbps).mp3",
		thumbnail: "url(https://github.com/gleriann/gleriann/raw/main/0.jpg)"
	},
	{
		name: 'Smack That',
		artist: "Akon",
		src: "https://github.com/gleriann/gleriann/raw/main/Akon%20-%20Smack%20That%20(Official%20Music%20Video)%20ft.%20Eminem.mp3",
		thumbnail: "url(https://github.com/gleriann/gleriann/raw/main/eminem.png)"
	},
	{
    name: 'Changes',
		artist: "2Pac",
		src: "https://github.com/gleriann/gleriann/raw/main/2Pac%20-%20Changes%20ft.%20Talent.mp3",
		thumbnail: "url(https://github.com/gleriann/gleriann/raw/main/tupac.png)"
	},
	{
		name: "papaoutai",
		artist: "Stromae",
		src: "https://github.com/gleriann/gleriann/raw/main/Stromae%20-%20Papaoutai%20(Official%20Music%20Video).mp3",
		thumbnail: "url(https://github.com/gleriann/gleriann/raw/main/Opera%20Anl%C4%B1k%20G%C3%B6r%C3%BCnt%C3%BC_2023-01-06_204533_www.youtube.com.png)"
	}
];

$(document).ready(function () {
	var playing = false,
		artistname = $(".artist-name"),
		musicName = $(".music-name"),
		time = $(".time"),
		fillBar = $(".fillBar");

	var song = new Audio();
	var CurrentSong = 0;
	window.onload = load();

	function load() {
		artistname.html(beatpack[CurrentSong].name);
		musicName.html(beatpack[CurrentSong].artist);
		song.src = beatpack[CurrentSong].src;
	}

	function playSong() {
		artistname.html(beatpack[CurrentSong].name);
		musicName.html(beatpack[CurrentSong].artist);
		song.src = beatpack[CurrentSong].src;
		song.play();
		$("#thumbnail").css("background-image", beatpack[CurrentSong].thumbnail);
		$("#play").addClass("fa-pause");
		$("#play").removeClass("fa-play");
		$("#thumbnail").addClass("active");
		$(".player-track").addClass("active");
	}

	song.addEventListener("timeupdate", function () {
		var position = (100 / song.duration) * song.currentTime;
		var current = song.currentTime;
		var duration = song.duration;
		var durationMinute = Math.floor(duration / 60);
		var durationSecond = Math.floor(duration - durationMinute * 60);
		var durationLabel = durationMinute + ":" + durationSecond;
		currentSecond = Math.floor(current);
		currentMinute = Math.floor(currentSecond / 60);
		currentSecond = currentSecond - currentMinute * 60;
		// currentSecond = (String(currentSecond).lenght > 1) ? currentSecond : ( String("0") + currentSecond );
		if (currentSecond < 10) {
			currentSecond = "0" + currentSecond;
		}
		var currentLabel = currentMinute + ":" + currentSecond;
		var indicatorLabel = currentLabel + " / " + durationLabel;

		fillBar.css("width", position + "%");

		$(".time").html(indicatorLabel);
	});

	$("#play").click(function playOrPause() {
		if (song.paused) {
			song.play();
			playing = true;
			$("#play").addClass("fa-pause");
			$("#play").removeClass("fa-play");
			$("#thumbnail").addClass("active");
			$(".play-btn:before").css("padding-left", 300);

			document.getElementsByClassName("play-btn")[0].classList.add("pause-btn");
			document.getElementsByClassName("play-btn")[0].classList.remove("play-btn");
		} else {
			song.pause();
			playing = false;
			$("#play").removeClass("fa-pause");
			$("#play").addClass("fa-play");
			$("#thumbnail").removeClass("active");

			document.getElementsByClassName("pause-btn")[0].classList.add("play-btn");
			document
				.getElementsByClassName("pause-btn")[0]
				.classList.remove("pause-btn");
		}
	});

	$("#prev").click(function prev() {
		CurrentSong--;
		if (CurrentSong < 0) {
			CurrentSong = beatpack.length - 1;
		}
		playSong();
	});

	$("#next").click(function next() {
		CurrentSong++;
		if (CurrentSong == beatpack.length) {
			CurrentSong = 0;
		}
		playSong();
	});
});

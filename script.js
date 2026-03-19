const tracks = [
  {
    title: "Midnight Transit",
    artist: "Niko Vale",
    genre: "Afro House",
    energy: 87,
    playlists: 124,
    trend: 42,
    listenUrl: "https://open.spotify.com/"
  },
  {
    title: "Pressure Line",
    artist: "Lena Circuit",
    genre: "Tech House",
    energy: 78,
    playlists: 93,
    trend: 31,
    listenUrl: "https://open.spotify.com/"
  },
  {
    title: "Velvet Sparks",
    artist: "Studio Palms",
    genre: "Disco",
    energy: 64,
    playlists: 71,
    trend: 18,
    listenUrl: "https://open.spotify.com/"
  },
  {
    title: "Static Bloom",
    artist: "Kira North",
    genre: "Melodic House",
    energy: 58,
    playlists: 66,
    trend: 12,
    listenUrl: "https://open.spotify.com/"
  },
  {
    title: "Burning Chrome",
    artist: "Late Harbor",
    genre: "Drum & Bass",
    energy: 92,
    playlists: 88,
    trend: 25,
    listenUrl: "https://open.spotify.com/"
  },
  {
    title: "Blue Frequency",
    artist: "Marea Echo",
    genre: "Organic House",
    energy: 47,
    playlists: 54,
    trend: 6,
    listenUrl: "https://open.spotify.com/"
  },
  {
    title: "Signal Hearts",
    artist: "Monroe Lift",
    genre: "House",
    energy: 73,
    playlists: 81,
    trend: 22,
    listenUrl: "https://open.spotify.com/"
  },
  {
    title: "Mirror Heat",
    artist: "Aster Lane",
    genre: "Indie Dance",
    energy: 69,
    playlists: 49,
    trend: 4,
    listenUrl: "https://open.spotify.com/"
  }
];

const genreFilter = document.querySelector("#genreFilter");
const energyFilter = document.querySelector("#energyFilter");
const energyValue = document.querySelector("#energyValue");
const trendingOnly = document.querySelector("#trendingOnly");
const trackGrid = document.querySelector("#trackGrid");
const resultsCount = document.querySelector("#resultsCount");
const cardTemplate = document.querySelector("#trackCardTemplate");

const genres = [...new Set(tracks.map((track) => track.genre))].sort();

genres.forEach((genre) => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  genreFilter.append(option);
});

function formatTrackCount(count) {
  return `${count} track${count === 1 ? "" : "s"}`;
}

function getFilteredTracks() {
  const selectedGenre = genreFilter.value;
  const minimumEnergy = Number(energyFilter.value);
  const trendingThreshold = trendingOnly.checked ? 10 : 0;

  return tracks.filter((track) => {
    const matchesGenre = selectedGenre === "all" || track.genre === selectedGenre;
    const matchesEnergy = track.energy >= minimumEnergy;
    const matchesTrend = track.trend >= trendingThreshold;
    return matchesGenre && matchesEnergy && matchesTrend;
  });
}

function renderTracks() {
  const filteredTracks = getFilteredTracks();
  energyValue.textContent = energyFilter.value;
  resultsCount.textContent = formatTrackCount(filteredTracks.length);
  trackGrid.replaceChildren();

  if (!filteredTracks.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = "<p>No tracks match these filters. Lower the energy threshold or widen the genre.</p>";
    trackGrid.append(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();

  filteredTracks.forEach((track) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".track-genre").textContent = track.genre;
    card.querySelector(".track-trend").textContent = `+${track.trend}%`;
    card.querySelector(".track-trend").classList.add("up");
    card.querySelector(".track-title").textContent = track.title;
    card.querySelector(".track-artist").textContent = track.artist;
    card.querySelector(".track-energy").textContent = track.energy;
    card.querySelector(".track-playlists").textContent = track.playlists;
    card.querySelector(".card-link").href = track.listenUrl;
    fragment.append(card);
  });

  trackGrid.append(fragment);
}

[genreFilter, energyFilter, trendingOnly].forEach((control) => {
  control.addEventListener("input", renderTracks);
  control.addEventListener("change", renderTracks);
});

renderTracks();
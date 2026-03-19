# musicflow

musicflow is an active DJ music discovery project that focuses on playlist momentum, trend detection, and practical set-building filters.

Live project: https://jay204.github.io/musicflow/

Repository: https://github.com/Jay204/musicflow

## Project status

- Status: beta
- Version: v0.2.0-beta
- Deployment: GitHub Pages (`main` / root)
- Last updated: 19 Mar 2026

## What it currently does

- Surfaces trending tracks from playlist movement signals
- Filters discovery by genre and minimum energy
- Provides direct listening links from the shortlist view
- Shows a realistic project mockup and release history

## Mockup Preview

![musicflow website mockup](assets/musicflow-mockup.png)

## Files

- `index.html`: Landing page markup
- `styles.css`: Visual system, responsive layout, and project sections
- `script.js`: Demo dataset and interactive filtering logic
- `assets/musicflow-mockup.png`: Project UI mockup used in site and README

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Roadmap

1. Playlist import from user-provided playlist IDs
2. Better trend-scoring transparency (why a track is rising)
3. Set planning tools (queue builder and transition helpers)
4. Optional backend API for larger datasets and persistence

## Contributing

1. Fork the repository
2. Create a branch (`feature/your-change`)
3. Make changes and test locally
4. Open a pull request with a short description and screenshots when relevant

## Publish on GitHub Pages

1. Create or use a GitHub repository named `musicflow`.
2. Push these files to the repository root.
3. In GitHub, open `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and the `/ (root)` folder.
6. Save, then wait for GitHub Pages to publish the site.

## License

This project is currently shared as open-source project code. Add a dedicated `LICENSE` file if you want to formalize usage terms.
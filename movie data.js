use StreamingDB;

db.movies.insertMany([
  {
    movieId: "MOV101",
    title: "Inception",
    genres: ["sci-fi", "Action", "Thriller"],
    releaseyear: 2010,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    avgrating: 8.8,
    tags: ["mind-bending", "dreams", "heist"]
  },
  {
    movieId: "MOV102",
    title: "Interstellar",
    genres: ["sci-fi", "Drama", "Adventure"],
    releaseyear: 2014,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway"],
    avgrating: 8.7,
    tags: ["space", "time travel", "future"]
  }
]);

db.userActivity.insertMany([
  {
    userid: "USR2001",
    movieId: "MOV101",
    watchprogresspercentage: 100,
    userrating: 5,
    lastwatched: new Date("2026-09-19T20:30:00Z")
  }
]);

db.movies.find(
  { genres: "sci-fi", avgrating: { $gte: 8.5 } },
  { title: 1, genres: 1, avgrating: 1, _id: 0 }
).sort({ avgrating: -1 });
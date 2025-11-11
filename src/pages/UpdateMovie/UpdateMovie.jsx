import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

const UpdateMovie = () => {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load movie:", err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdating(true);

    const form = e.target;
    const updatedMovie = {
      title: form.title.value,
      genre: form.genre.value,
      releaseYear: Number(form.releaseYear.value),
      director: form.director.value,
      cast: form.cast.value,
      rating: Number(form.rating.value),
      duration: Number(form.duration.value),
      plotSummary: form.plotSummary.value,
      posterUrl: form.posterUrl.value,
      language: form.language.value,
      country: form.country.value,
    };

    fetch(`http://localhost:5000/movies/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then(() => {
        setUpdating(false);
        navigate(`/movies/${id}`);
      })
      .catch((err) => {
        console.error("Update failed:", err);
        setUpdating(false);
      });
  };

  // ✅ Show spinner while loading movie
  if (loading || !movie) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          Update Movie
        </h2>

        <form
          onSubmit={handleUpdate}
          className="bg-white/5 dark:bg-gray-800 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Title</label>
              <input
                name="title"
                defaultValue={movie.title} // ✅ Prefilled
                required
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="font-semibold">Genre</label>
              <input
                name="genre"
                defaultValue={movie.genre} // ✅ Prefilled
                required
                className="input input-bordered w-full mt-1"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Release Year</label>
              <input
                type="number"
                name="releaseYear"
                defaultValue={movie.releaseYear}
                required
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="font-semibold">Director</label>
              <input
                name="director"
                defaultValue={movie.director}
                required
                className="input input-bordered w-full mt-1"
              />
            </div>
          </div>

          {/* Cast */}
          <div>
            <label className="font-semibold">Cast</label>
            <input
              name="cast"
              defaultValue={movie.cast}
              className="input input-bordered w-full mt-1"
            />
          </div>

          {/* Rating + Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Rating</label>
              <input
                type="number"
                step="0.1"
                name="rating"
                defaultValue={movie.rating}
                required
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="font-semibold">Duration (min)</label>
              <input
                type="number"
                name="duration"
                defaultValue={movie.duration}
                required
                className="input input-bordered w-full mt-1"
              />
            </div>
          </div>

          {/* Poster URL */}
          <div>
            <label className="font-semibold">Poster URL</label>
            <input
              name="posterUrl"
              defaultValue={movie.posterUrl}
              required
              className="input input-bordered w-full mt-1"
            />
          </div>

          {/* Language + Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Language</label>
              <input
                name="language"
                defaultValue={movie.language}
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="font-semibold">Country</label>
              <input
                name="country"
                defaultValue={movie.country}
                className="input input-bordered w-full mt-1"
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="font-semibold">Plot Summary</label>
            <textarea
              name="plotSummary"
              defaultValue={movie.plotSummary}
              className="textarea textarea-bordered w-full mt-1"
              rows="4"
            />
          </div>

          <button disabled={updating} className="btn btn-primary w-full mt-4">
            {updating ? "Updating..." : "Update Movie"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateMovie;

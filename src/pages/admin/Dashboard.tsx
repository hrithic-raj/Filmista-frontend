import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../redux/slices/admin/userManagementSlice";
import { fetchAllGenres } from "../../redux/slices/admin/genreManagementSlice";
import { fetchAllMovies } from "../../redux/slices/admin/movieManagementSlice";
import { fetchCelebrities } from "../../redux/slices/admin/celebrityManagementSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const {users} = useAppSelector((state)=>state.userManagement)
  const {genres} = useAppSelector((state)=>state.genreManagement)
  const { movies } = useAppSelector((state) => state.movieManagement)
  const { celebrities } = useAppSelector((state) => state.celebrityManagement)
  const dispatch = useAppDispatch();
    useEffect(()=>{
    },[])
    useEffect(()=>{
      dispatch(fetchUsers());
      dispatch(fetchAllMovies())
      dispatch(fetchAllGenres());
      dispatch(fetchCelebrities());
    },[dispatch])
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Revenue ($)",
        data: [12000, 15000, 13000, 20000, 25000, 30000],
        borderColor: "#e9e9e9",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
      },
    ],
  };

  const barChartData = {
    labels: genres.map(g=>g.genre),
    datasets: [
      {
        label: "Movies Added",
        data: genres.map(g=> g.movies.length),
        backgroundColor: [
          "#4F46E5",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#3B82F6",
          "#D946EF",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e9e9e9",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#e9e9e9",
        },
        grid: {
          color: "rgba(233, 233, 233, 0.2)",
        },
      },
      y: {
        ticks: {
          color: "#e9e9e9",
        },
        grid: {
          color: "rgba(233, 233, 233, 0.2)",
        },
      },
    },
  };

  return (
    <div className="bg-[#212121] min-h-screen ">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Users", value: users.length, change: "+12%" },
          { title: "Movies Uploaded", value: movies.length, change: "+8%" },
          { title: "Revenue", value: "$123,456", change: "+15%" },
          { title: "Active Celebrities", value: celebrities.length, change: "+5%" },
        ].map((card, idx) => (
          <div
            key={idx}
            className="p-4 bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-300">{card.title}</h2>
            <p className="text-2xl font-bold text-gray-100">{card.value}</p>
            {/* <p
              className={`text-sm ${
                card.change.includes("-") ? "text-red-500" : "text-green-500"
              }`}
            >
              {card.change} from last month
            </p> */}
          </div>
        ))}
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-[rgb(44,44,44)] shadow rounded-lg">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">
            Users Growth
          </h2>
          <Line data={lineChartData} options={chartOptions} />
        </div>
        <div className="p-6 bg-[rgb(44,44,44)] shadow rounded-lg text-[#e9e9e9]">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">
            Movies by Genre
          </h2>
          <Bar data={barChartData} options={chartOptions} />
        </div>
      </div>

      {/* Data Table */}
      <div className="p-6 bg-[rgb(44,44,44)] shadow rounded-lg">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Latest Movies</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 text-left text-sm text-gray-200 font-medium">
                  Movie Title
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-200 font-medium">
                  Genre
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-200 font-medium">
                  Rating
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-200 font-medium">
                  Release Date
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: "The Great Escape",
                  genre: "Action",
                  rating: "8.5",
                  date: "2025-01-01",
                },
                {
                  title: "Romance in Paris",
                  genre: "Romance",
                  rating: "7.2",
                  date: "2024-12-24",
                },
                {
                  title: "Horror Night",
                  genre: "Horror",
                  rating: "6.8",
                  date: "2024-10-31",
                },
                {
                  title: "Comedy Blast",
                  genre: "Comedy",
                  rating: "7.9",
                  date: "2024-09-15",
                },
              ].map((movie, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2 text-sm text-gray-300">{movie.title}</td>
                  <td className="px-4 py-2 text-sm text-gray-300">{movie.genre}</td>
                  <td className="px-4 py-2 text-sm text-gray-300">{movie.rating}</td>
                  <td className="px-4 py-2 text-sm text-gray-300">{movie.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

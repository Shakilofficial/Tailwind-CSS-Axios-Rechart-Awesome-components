import { data } from "autoprefixer";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Audio, Grid } from "react-loader-spinner";
import { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    /* fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json())
            .then(data => setPhones(data.data)); */
    //Using axios instead of fetch
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
        setloading(false);
      });
  }, []);
  return (
    <div>
      {loading && (
        <div className="flex gap-6">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <h2 className="text-center text-blue-700 font-bold text-4xl">
        Phones:{phones.length}{" "}
      </h2>
      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <ResponsiveContainer></ResponsiveContainer>
      </BarChart>
    </div>
  );
};

export default Phones;

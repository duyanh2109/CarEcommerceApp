import React, { useState } from "react";
import axios from "axios";
import { Carprops } from "@/types";

type Car = string[];

type GetUsersResponse = {
  data: Car;
  message?: string;
};
export const callApi = async () => {
  try {
    const headers = {
      "X-RapidAPI-Key": "1d22ad97camsh14c04790e9b5487p11f7c2jsn726aaad9bf03",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
    const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
    const { data } = await axios.get<GetUsersResponse>(url, {
      headers: headers,
      params: { model: "corolla" },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
export const generateCarImageUrl = (car: Carprops, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

import { NextApiRequest, NextApiResponse } from "next";
import { continents } from "./_continents";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const continentsList = Object.entries(continents).map(([id, continent]) => ({
    id,
    imageURL: continent.imageURL
  }));

  res.status(200).json(continentsList);
}
import { NextApiRequest, NextApiResponse } from "next";
import { continents } from "./_continents";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { continent, locale = 'en-US' } = req.query;
  const t = require(`src/translations/${locale}/${continent}.json`);

  const continentData = continents[continent as string];

  res.status(200).json({
    ...continentData,
    name: t['name'],
    description: t['description'],
    cities: continentData.cities.map(city => ({
      ...city,
      ...t['cities'][city.id]
    }))
  })
}
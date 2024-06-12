import { getGuitarsQuery, getGuitarByIdQuery, prepararHateoas } from "../models/queries.js";

export const home = (req, res) => {
  res.send("Hello World desde App.js");
};

export const getGuitars = async (req, res) => {
  try {
    const results = await getGuitarsQuery();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGuitarById = async (req, res) => {
    try {
      const { id } = req.params;
      const guitar = await getGuitarByIdQuery(id);
      res.status(200).send(guitar);
    } catch (error) {
      res.status(500).send(error);
    }
  };


  export const getGuitarsHateoas = async (req, res) => {
    try {
      const guitarras = await getGuitarsQuery();
      const hateoas = prepararHateoas(guitarras);
      res.status(200).send(hateoas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
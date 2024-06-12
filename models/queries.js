import { pool } from "../config/db.js";

export const getGuitarsQuery = async () => {
  try {
    const sql = {
      text: "SELECT * FROM guitars",
    };
    const result = await pool.query(sql);
    if (result.rowCount > 0) {
      return result.rows;
    } else {
      return new Error("No guitars found");
    }
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  }
};

export const getGuitarByIdQuery = async (id) => {
  try {
    const sql = {
      text: "SELECT * FROM guitars WHERE id = $1",
      values: [id],
    };
    const result = await pool.query(sql);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      return new Error("No guitar found with that ID");
    }
  } catch (error) {
    console.log(error);
  }
};


export const prepararHateoas = (guitars) => {
    try {
      const results = guitars.map((g) => {
        return {
          name: g.name,
          href: `/guitar/${g.id}`,
        };
      });
      const total = results.length;
      const hateoas = {
        total,
        results,
      };
      return hateoas;
    } catch (error) {
      console.log("Error code: ", error.code, "Error Message: ", error.message);
    }
  };
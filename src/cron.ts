// import express from "express";
import { getDre } from "./routes/index";

const cron = "node-cron";


cron.schedule("*/10 * * * *", async (req, res) => {
  console.log("Executando a tarefa a cada 5 minuto");
  const json = await getDre();
  console.res.json(json);
  return res.json(json);
});


export default cron;
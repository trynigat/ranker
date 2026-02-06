import express from "express";
import {searchGames} from "./controller.js";
export const router = express.Router();

router.get('/searchedGames',searchGames);
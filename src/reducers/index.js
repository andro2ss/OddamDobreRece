import { combineReducers } from "redux";
import step1 from "./step1";
import questioSummary from "./questioSummary";

const allReducers = combineReducers({ step1, questioSummary });

export default allReducers;

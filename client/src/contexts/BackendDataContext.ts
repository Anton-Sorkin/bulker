import { createContext } from "react";
import { IFood } from "../models/IFood";

export const BackendDataContext = createContext<IFood[] | undefined>(undefined);

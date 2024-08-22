import { ReactNode } from "react";

export interface AlertObj {
	message: ReactNode;
	textStyle: string;
	expireTimer: number;
}

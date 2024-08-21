import { ReactNode } from "react";

export interface AlertObj {
	id: string;
	message: ReactNode;
	textStyle: string;
	expireTimer: number;
}

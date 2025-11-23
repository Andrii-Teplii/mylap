import { ReactNode } from "react";

export type ContainerBlocksTypes = {
  title: string;
  isActive: boolean;
  children: ReactNode;
  handleChangeState: () => void;
};

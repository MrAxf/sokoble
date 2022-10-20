import { useContext } from "react";
import { SokobanContext } from "../providers/SokobanProvider";

const useSokoban = () => {
  const { board, boxes, meta, player } = useContext(SokobanContext)
}

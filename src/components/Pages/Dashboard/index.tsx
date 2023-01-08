import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Header } from "../../Global/Header";
import { ListSnacks } from "../../Global/ListSnacks";
import { iSnack } from "./@types";

export const Dashboard = () => {
  const [snacks, setSnacks] = useState<iSnack[] | []>([]);

  useEffect(() => {
    const token: string | null = localStorage.getItem("@sburguer:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const getSnacks = async (): Promise<void> => {
      try {
        const response = await api.get("/snacks");
        setSnacks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getSnacks();
  }, []);

  return (
    <>
      <Header />
      <ListSnacks snacks={snacks} />
    </>
  );
};

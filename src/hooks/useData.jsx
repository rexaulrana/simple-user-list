import { useQuery } from "@tanstack/react-query";

const useData = () => {
  const {
    isPending,
    error,
    data: users,
  } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users").then((res) =>
        res.json()
      ),
  });
  return [isPending, error, users];
};
export default useData;

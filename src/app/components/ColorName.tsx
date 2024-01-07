import useSWR from "swr";

const fetchData = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export default function ColorName({ color }: { color: string }) {
  let apiUrl = `https://www.thecolorapi.com/id?hex=${color.substring(1)}`;

  const { data, error } = useSWR(apiUrl, fetchData);

  if (error) {
    return <p>API Error</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>{data.name.value}</p>
    </>
  );
}

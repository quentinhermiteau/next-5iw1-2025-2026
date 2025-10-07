export const revalidate = 3600;

export async function generateStaticParams() {
  return Promise.resolve([{ locale: "fr" }, { locale: "en" }]);
}

export default function Dashboard() {
  return <div>Dashboard</div>;
}

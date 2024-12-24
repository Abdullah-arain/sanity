import { client } from "@/sanity/lib/client";

export default async function Home() {
  const data = await client.fetch(`*[_type == 'product']`);
  console.log(data);
  return (
    <div>
      <section>
        {data.map((item: any, i) => {
          return (
            <div className="flex gap-3">
              <h1>{item.productName}</h1>
              <p>$ {item.price}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

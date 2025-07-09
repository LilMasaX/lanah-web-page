import { testConnection } from "../../actions/pedidos";

export default function HomePage() {
  return (
    <form action={async () => {
      "use server";
      const res = await testConnection();
      console.log(res);
    }}>
      <button type="submit">Probar Conexión a MongoDB</button>
    </form>
  );
}

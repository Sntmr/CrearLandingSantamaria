import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import productsData from "../data/products.js";

const uploadProducts = async () => {
  try {
    for (const product of productsData) {
      await setDoc(doc(db, "products", product.id.toString()), {
        ...product,
        stock: 10,
        available: true
      });
      console.log(`✅ Producto guardado/actualizado: ${product.name}`);
    }
    console.log("🎉 Todos los productos fueron subidos/actualizados correctamente.");
  } catch (error) {
    console.error("❌ Error al subir productos:", error);
  }
};

uploadProducts();
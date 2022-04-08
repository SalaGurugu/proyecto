import { defineStore } from "pinia";
import { collection, query, limit, getDocs, orderBy, startAfter } from "firebase/firestore";
import { db } from "../firebase";

export const almacen = defineStore({
  id: "main",
  state: () => ({
    total: "",
    paginas: "",
    limit: 3,
    page: 1,
    firstVisible: "",
    obras: [],
  }),
  actions: {
    async obtenerDatos() {
      this.obras = [];
      const q = await query(
        collection(db, "obras"), 
        orderBy("date", "desc"));
    
      const documentSnapshots = await getDocs(q);
      const totalDocumentos = documentSnapshots.docs.length;
      this.total = totalDocumentos;
      this.paginas = Math.ceil(this.total / this.limit);
       
      const data = await query(
        collection(db, "obras"),
        orderBy("date", "desc"),
        limit(this.limit)
      );
      const querySnapshot = await getDocs(data);
      querySnapshot.forEach((doc) => {
        let obra = doc.data();
        obra.id = doc.id;
        this.obras.push(obra);
        console.log(doc);
      });
    },
    async siguiente() {
      const q = await query(
      collection(db, "obras"), 
      orderBy("date", "desc"));

      const documentSnapshots = await getDocs(q);
      const firstVisible =
        documentSnapshots.docs[this.limit * (this.page - 1) - 1] || this.obtenerDatos();
      this.firstVisible = firstVisible;
      const next = await query(
        collection(db, "obras"),
        orderBy("date", "desc"),
        limit(this.limit),
        startAfter(this.firstVisible)
      );
      this.obras = [];
      console.log("array", this.obras)
      const querySnapshot = await getDocs(next);
     
      querySnapshot.forEach((doc) => {
        let obra = doc.data();
        obra.id = doc.id;
        this.obras.push(obra);
        console.log(doc);
      });
    },    
  },
});

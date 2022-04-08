import { defineStore } from "pinia";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc  } from 'firebase/firestore';
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRoute } from 'vue-router'

const router = useRoute()

export const memoria = defineStore({
  id: "principal",
  state: () => ({
    file: null,
    datoImagen: null,
    error: null,
    editar: false,
    loading: false,
    urlDescarga: '',

    ages: [
      '2 anos',
      '3 anos',
      '4 anos',
      'Todas as idades',
      'Recomendado para adultos'
      ],

    obras: [],
    obra: {
    id: '',
    title: '',
    company: '',
    director: '',
    cast: '',
    synopsis: '',
    date: '', 
    link: '',
    age: '',
    time: '',
    photo: ''  
  },
  }),
  actions: {
    async obtenerDatos() {
      this.obras = [];
      const querySnapshot = await getDocs(collection(db, "obras"));
      querySnapshot.forEach((doc) => {
        let obra = doc.data();
        obra.id = doc.id;
        this.obras.push(obra);
        console.log(obra);
      });
    },
    // DELETE / ELIMINAR / BORRAR
    async eliminarDato(id) {
      await deleteDoc(doc(db, "obras", id));
      router.go("/");
    },
    // GET BY ID / OBTENER POR ID
    async obtenerDatoID(id) {
      const docRef = doc(db, "obras", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.obra = docSnap.data();
        this.obra.id = docSnap.id;
      } else {
        console.log("¡No existe el documento!");
      }
    },

    // BUSCAR IMAGEN
    buscarImagen(event) {
      const tipoArchivo = event.target.files[0].type;
      if (tipoArchivo === "image/jpeg" || tipoArchivo === "image/png") {
        this.file = event.target.files[0];
        this.error = null;
      } else {
        this.error = "Archivo no válido";
        this.file = null;
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        this.datoImagen = e.target.result;
      };
    },
    // SUBIR IMAGEN STORAGE
    async agregarDato() {
      try {
        this.loading = true;
        const storageRef = ref(storage, "imagenes/" + this.file.name);
        const uploadTask = uploadBytesResumable(storageRef, this.file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
            });
          }
        );

        const urlDescarga = await getDownloadURL(storageRef);

        await addDoc(collection(db, "obras"), {
          title: this.obra.title,
          company: this.obra.company,
          director: this.obra.director,
          cast: this.obra.cast,
          synopsis: this.obra.synopsis,
          age: this.obra.age,
          link: this.obra.link,
          time: this.obra.time,
          date: this.obra.date,
          photo: urlDescarga,
        });
        this.error = "Imagen subida con éxito";
        this.file = null;
      } catch (error) {
        console.log(error);
      } finally {
        const router = useRoute()
        router.push("/");
        this.loading = false;
      }
    },

    // MÉTODO actualizarDato
    async actualizarDato() {
      try {
        this.loading = true;
        const storageRef = ref(storage, "imagenes/" + this.file.name);
        const uploadTask = uploadBytesResumable(storageRef, this.file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
            });
          }
        );

        const urlDescarga = await getDownloadURL(storageRef);

        const elemento = doc(db, "obras", this.obra.id);
        await updateDoc(elemento, {
          title: this.obra.title,
          company: this.obra.company,
          director: this.obra.director,
          cast: this.obra.cast,
          synopsis: this.obra.synopsis,
          age: this.obra.age,
          link: this.obra.link,
          time: this.obra.time,
          date: this.obra.date,
          photo: urlDescarga,
        });
        this.error = "Imagen subida con éxito";
        this.file = null;
      } catch (error) {
        console.log(error);
      } finally {
        router.push("/");
        this.loading = false;
      }
    },
  },
});

import firestore from "../../config/firestore";

export type Plate = {
    id: number
    plate_name: string
    plate_description: string
    image_url: string
}

export class Cardapio {
 
    async get() {
        try {
            const documents = await firestore.collection('cardapio').get();
            let plates: Array<Plate> = [];
            documents.forEach((doc) => {
                plates.push(doc.data() as Plate)
            })
            return plates;
        } catch (err) {
            console.log("Error while fetching plates", err);
            throw err;
        }
    }

    async create(plate: Plate){
        try {
            const plateAlreadyExist = await firestore.collection('cardapio').where('plate_name', '==', plate.plate_name).get();

            if (!plateAlreadyExist.empty){
                throw new Error('this plate already exists')
            }

            const docRef = firestore.collection('cardapio').doc(plate.plate_name)
            docRef.set(plate)
            return plate;
        } catch (err) {
            console.error('Error during plate creation:', err);
            throw err;
        }
    }

    async update(id: number, updatedData: Partial<Plate>){
        try {
            const querySnapshot = await firestore.collection('cardapio').where('id', '==', id).get();
    
            if (querySnapshot.empty) {
                throw new Error("This plate does not exists")
            }
    
            const docRef = querySnapshot.docs[0].ref;

            await docRef.update(updatedData)

            const updatedPlate = await docRef.get()

            return updatedPlate.data();

        } catch (err) {
            console.log('Erro during plate update');
            throw err;
        }
    }

    async delete(id: number){
        try {
            const snapshot = await firestore.collection('cardapio').where("id", "==", id).get();
            const deletePromise = snapshot.docs.map((plate) => plate.ref.delete());
            await Promise.all(deletePromise);

            if (snapshot.empty){
                throw new Error("this plate does not exists");  
            }

            return snapshot.docs.map((plate) => plate.data())
        } catch (err){
            console.log('Erro during plate deletion');
            throw err;
        }
    }   

}


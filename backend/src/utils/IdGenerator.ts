import firestore from "../../config/firestore";

async function generateUniqueId(): Promise<number> {
    const counterDocRef = firestore.collection('counters').doc('globalCounter');
    
    const counterDoc = await counterDocRef.get();
    let newCounterValue = 1;

    if (counterDoc.exists) {
        const currentCounter = counterDoc.data()?.value || 0;
        newCounterValue = currentCounter + 1;
    }

    await counterDocRef.set({ value: newCounterValue }, { merge: true });

    return newCounterValue;
}

export default generateUniqueId;
import { useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function AuxComponent() {

    useEffect(() => {
        const db = getFirestore();
        const prodRef = doc(db, "games", "3Tt5JpooAXGXzMJj2se6");
        getDoc(prodRef).then((snapshot) => {
            if (snapshot.exists()) {
                console.log({ id: snapshot.id, ...snapshot.data() });
            }
        })
    }, []);

    return <div>AuxComponent</div>;
}

export default AuxComponent
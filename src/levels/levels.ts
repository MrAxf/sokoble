import toLevel from './levelConverter'
import { doc, setDoc ,getFirestore  } from 'firebase/firestore'
import firebase from '../firebase'



const getRandomLevel = () => {
  let seed = Math.floor(Math.random() * levels.length)
  seed = 19
  const level = toLevel(levels[seed], `level${seed}`)
  const db = getFirestore(firebase)
  setDoc(doc(db, 'levels'), level)
}
export default getRandomLevel

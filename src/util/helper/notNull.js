export default function getNotNullToString(state) {
  const notNullCollection = Object.values(state).filter((item) => item != null);
  return notNullCollection.join(' ');
}

export function CorrigirID(ID){
  let CorrigidoID = ID.toString();
  if (CorrigidoID.length <= 3) {
    return CorrigidoID.padStart(3, '0')
  }
  return CorrigidoID
}
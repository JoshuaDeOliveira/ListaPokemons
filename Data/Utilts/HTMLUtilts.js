export function CorrigirID(ID){
  let CorrigidoID = ID.toString();
  if (CorrigidoID.length <= 3) {
    return CorrigidoID.padStart(3, '0')
  }
  return CorrigidoID
}

export function CorrigirFrase(String){
  return String
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ')
    .replace(/[^\x00-\x7F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();  
}

// src/utils/sanitizeDoc.js
export function sanitizeDoc(doc) {
  if (!doc || typeof doc.toObject !== "function") return doc;

  const plain = doc.toObject({ getters: false, virtuals: false });

  return {
    ...plain,
    _id: plain._id?.toString?.() || plain._id,
    __v: undefined,
  };
}

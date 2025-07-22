"use client";
import { useRef, useState } from "react";
import { NumericFormat } from "react-number-format";
import styles from "./ProductForm.module.css";

export default function ProductForm({ 
  initialData = {}, 
  onSubmit, 
  buttonText = "Agregar Producto",
  isSubmitting = false,
  onSuccess = () => {}
}) {
  const formRef = useRef(null);
  const [precio, setPrecio] = useState(initialData.precio || "");
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData.imagen || null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formRef.current) return;

    try {
      const formData = new FormData(formRef.current);
      formData.set("precio", precio || "0");
      
      const result = await onSubmit(formData);
      
      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        onSuccess();
      }
    } catch (err) {
      setError("Error al procesar el formulario");
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className={styles.formContainer}
    >
      {/* Campo Nombre */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Nombre:</label>
        <input
          type="text"
          name="nombre"
          defaultValue={initialData.nombre || ""}
          required
          className={styles.input}
        />
      </div>

      {/* Campo Descripción */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Descripción:</label>
        <textarea
          name="descripcion"
          defaultValue={initialData.descripcion || ""}
          required
          className={styles.textarea}
          rows={4}
        />
      </div>

      {/* Campo Precio */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Precio (COP):</label>
        <NumericFormat
          value={precio}
          onValueChange={(values) => {
            setPrecio(values.floatValue ?? "");
          }}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          prefix="$ "
          placeholder="$ 1.000,00"
          required
          className={styles.input}
        />
      </div>

      {/* Campo Stock */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Stock:</label>
        <input
          type="number"
          name="stock"
          defaultValue={initialData.stock || ""}
          min="0"
          required
          className={styles.input}
        />
      </div>

      {/* Campo Imagen */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Imagen:</label>
        
        {imagePreview && (
          <div className={styles.imagePreviewContainer}>
            <img 
              src={imagePreview} 
              alt="Vista previa" 
              className={styles.imagePreview}
            />
            <small className={styles.imageNote}>
              {initialData.imagen ? "Imagen actual" : "Vista previa"}
            </small>
          </div>
        )}
        
        <input
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.fileInput}
          required={!initialData.imagen}
        />
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      {/* Botón de envío */}
      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className={styles.loadingIndicator}>Procesando...</span>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
}
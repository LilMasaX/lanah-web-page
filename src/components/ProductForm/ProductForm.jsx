"use client";
import { useRef, useState } from "react";
import { NumericFormat } from "react-number-format";

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
      className="flex flex-col gap-5 p-6 bg-white rounded-2xl shadow-lg min-w-80"
    >
      {/* Campo Nombre */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-[#8D5524]">Nombre:</label>
        <input
          type="text"
          name="nombre"
          defaultValue={initialData.nombre || ""}
          required
          className="p-2 border border-gray-300 rounded-lg text-base bg-[#faf9f6] text-gray-800 transition-colors duration-200 focus:border-[#E76F51] focus:outline-none"
        />
      </div>

      {/* Campo Descripción */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-[#8D5524]">Descripción:</label>
        <textarea
          name="descripcion"
          defaultValue={initialData.descripcion || ""}
          required
          className="p-2 border border-gray-300 rounded-lg text-base bg-[#faf9f6] text-gray-800 transition-colors duration-200 focus:border-[#E76F51] focus:outline-none"
          rows={4}
        />
      </div>

      {/* Campo Precio */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-[#8D5524]">Precio (COP):</label>
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
          className="p-2 border border-gray-300 rounded-lg text-base bg-[#faf9f6] text-gray-800 transition-colors duration-200 focus:border-[#E76F51] focus:outline-none"
        />
      </div>

      {/* Campo Stock */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-[#8D5524]">Stock:</label>
        <input
          type="number"
          name="stock"
          defaultValue={initialData.stock || ""}
          min="0"
          required
          className="p-2 border border-gray-300 rounded-lg text-base bg-[#faf9f6] text-gray-800 transition-colors duration-200 focus:border-[#E76F51] focus:outline-none"
        />
      </div>

      {/* Campo Imagen */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-[#8D5524]">Imagen:</label>
        
        {imagePreview && (
          <div className="mt-1">
            <img 
              src={imagePreview} 
              alt="Vista previa" 
              className="max-h-[500px] rounded-lg"
            />
            <small className="text-gray-600 text-sm block mt-1">
              {initialData.imagen ? "Imagen actual" : "Vista previa"}
            </small>
          </div>
        )}
        
        <input
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1"
          required={!initialData.imagen}
        />
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className="text-red-600 bg-red-50 p-3 rounded border-l-4 border-red-600">
          {error}
        </div>
      )}

      {/* Botón de envío */}
      <button 
        type="submit" 
        className="bg-[#E76F51] hover:bg-[#f4845f] text-white border-none rounded-lg py-3 px-6 text-base font-bold cursor-pointer mt-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Procesando...
          </span>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
}
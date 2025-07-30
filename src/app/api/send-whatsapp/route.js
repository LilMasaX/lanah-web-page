export async function POST(request) {
    try {
        const { cart, formData } = await request.json();

        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            return Response.json({ error: 'El carrito está vacío.' }, { status: 400 });
        }
        if (!formData || !formData.name || !formData.phone || !formData.email || !formData.adress) {
            return Response.json({ error: 'Faltan datos del formulario.' }, { status: 400 });
        }

        // Construir el mensaje del pedido
        const productosList = cart.map(
            (item, idx) => `${idx + 1}. ${item.nombre} - $${item.precio} (ID: ${item._id})`
        ).join('\n');
        const total = cart.reduce((sum, item) => sum + (item.precio || 0), 0);

        const message = `🛍️ *NUEVO PEDIDO RECIBIDO*

👤 *Datos del cliente:*
• Nombre: ${formData.name}
• Teléfono: ${formData.phone}
• Correo: ${formData.email}
• Dirección: ${formData.adress}

📦 *Productos:*
${productosList}

💰 *Total: $${total}*

---
Enviado desde la web de Lanah`;

        // Opción 2: Enlace directo de WhatsApp (fallback)
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${process.env.ADMIN_PHONE}?text=${encodedMessage}`;

        return Response.json({
            ok: true,
            method: 'link',
            whatsappUrl
        });

    } catch (error) {
        console.error('Error enviando por WhatsApp:', error);
        return Response.json({ error: 'Error enviando por WhatsApp.' }, { status: 500 });
    }
} 
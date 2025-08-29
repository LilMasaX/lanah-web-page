export async function POST(request) {
    try {
        const { cart, formData } = await request.json();

        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            return Response.json({ error: 'El carrito está vacío.' }, { status: 400 });
        }
        if (!formData || !formData.name || !formData.phone || !formData.email || !formData.adress) {
            return Response.json({ error: 'Faltan datos del formulario.' }, { status: 400 });
        }

        // Verificar que existe el número de administrador
        const adminPhone = process.env.ADMIN_PHONE ;
        
        // Limpiar y formatear el número de teléfono
        const cleanPhone = adminPhone.replace(/\D/g, ''); // Remover todos los caracteres no numéricos
        
        // Asegurar formato internacional (agregar 57 si no está presente)
        const formattedPhone = cleanPhone.startsWith('57') ? cleanPhone : `57${cleanPhone}`;

        // Construir el mensaje del pedido (versión más corta y limpia)
        const productosList = cart.map(
            (item, idx) => `${idx + 1}. ${item.nombre} - $${item.precio}`
        ).join('\n');
        const total = cart.reduce((sum, item) => sum + (item.precio || 0), 0);

        const message = `🛍️ *NUEVO PEDIDO*

👤 *Cliente:* ${formData.name}
📱 *Tel:* ${formData.phone}
📧 *Email:* ${formData.email}
📍 *Dir:* ${formData.adress}

📦 *Productos:*
${productosList}

💰 *Total: $${total}*

---
Lanah Web`;

        // Generar URL de WhatsApp correcta
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

        console.log('WhatsApp URL generada:', whatsappUrl);
        console.log('Número formateado:', formattedPhone);

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
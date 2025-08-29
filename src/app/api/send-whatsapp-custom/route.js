export async function POST(request) {
    try {
        const { message } = await request.json();

        if (!message) {
            return Response.json({ error: 'Mensaje requerido.' }, { status: 400 });
        }

        // Verificar que existe el número de administrador
        const adminPhone = process.env.ADMIN_PHONE;
        if (!adminPhone) {
            console.error('ADMIN_PHONE no está configurado en las variables de entorno');
            return Response.json({ error: 'Configuración de WhatsApp no disponible.' }, { status: 500 });
        }

        // Limpiar y formatear el número de teléfono
        const cleanPhone = adminPhone.replace(/\D/g, ''); // Remover todos los caracteres no numéricos
        
        // Asegurar formato internacional (agregar 57 si no está presente)
        const formattedPhone = cleanPhone.startsWith('57') ? cleanPhone : `57${cleanPhone}`;

        // Mensaje personalizado para productos custom
        const customMessage = `🎨 *SOLICITUD DE PRODUCTO PERSONALIZADO*

${message}

---
*Enviado desde la web de Lanah*`;

        // Generar URL de WhatsApp correcta
        const encodedMessage = encodeURIComponent(customMessage);
        const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

        console.log('WhatsApp Custom URL generada:', whatsappUrl);
        console.log('Número formateado:', formattedPhone);

        return Response.json({
            ok: true,
            method: 'link',
            whatsappUrl
        });

    } catch (error) {
        console.error('Error enviando WhatsApp custom:', error);
        return Response.json({ error: 'Error enviando por WhatsApp.' }, { status: 500 });
    }
} 
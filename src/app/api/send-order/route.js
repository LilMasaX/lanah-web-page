import nodemailer from 'nodemailer';

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

        const message = `Nuevo pedido recibido:\n\nDatos del cliente:\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nCorreo: ${formData.email}\nDirección: ${formData.adress}\n\nProductos:\n${productosList}\n\nTotal: $${total}`;

        // Configurar el transporter de nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Opciones del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Nuevo pedido desde la web',
            text: message,
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        return Response.json({ ok: true }, { status: 200 });
    } catch (error) {
        console.error('Error enviando el pedido:', error);
        return Response.json({ error: 'Error enviando el pedido.' }, { status: 500 });
    }
}
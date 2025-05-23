// Funcionalidades para la aplicación Cuatico

// Datos de ejemplo para clientes
const clientes = [
    { id: 1, empresa: 'BBK', email: 'bbwrrhh@bbk.es', telefono: '655887799' },
    { id: 2, empresa: 'Accentur', email: 'recursoshumanos@accentur.com', telefono: '654987321' },
    { id: 3, empresa: 'Zapatos Conchi', email: 'laconchi@gmail.com', telefono: '945112456' },
    { id: 4, empresa: 'Iberdrola', email: 'contacto@iberdrola.com', telefono: '944231567' },
    { id: 5, empresa: 'Kutxabank', email: 'info@kutxabank.es', telefono: '946789012' }
];

// Datos de ejemplo para alumnos
const alumnos = [
    { id: 1, curso: 'DEV', nombre: 'Jonan', apellidos: 'Rincón', telefono: '621321321' },
    { id: 2, curso: 'DEV', nombre: 'Ale', apellidos: 'Rodriguez', telefono: '632132132' },
    { id: 3, curso: 'DEV', nombre: 'Itxine', apellidos: 'Galdeano', telefono: '632132133' },
    { id: 4, curso: 'UX/UI', nombre: 'María', apellidos: 'López', telefono: '634567890' },
    { id: 5, curso: 'DATA', nombre: 'Carlos', apellidos: 'Martínez', telefono: '612345678' }
];

// Datos de ejemplo para el histórico de contactos
const historicoContactos = [
    { fecha: '2023-01-10', tipo: 'Llamada', detalles: 'El cliente pidió información sobre nuestros servicios.' },
    { fecha: '2023-02-15', tipo: 'Reunión', detalles: 'Se realizó una presentación de la propuesta.' },
    { fecha: '2023-03-01', tipo: 'Seguimiento', detalles: 'Se envió un email para confirmar avances.' },
    { fecha: '2023-04-20', tipo: 'Contrato', detalles: 'Se firmó el contrato para el proyecto de formación.' },
    { fecha: '2023-05-15', tipo: 'Facturación', detalles: 'Se emitió la primera factura del proyecto.' }
];

// Datos de ejemplo para facturas
const facturas = [
    { fecha: '2023-03-15', empresa: 'BBK', monto: '€1,200', documento: 'factura_001.pdf' },
    { fecha: '2023-04-20', empresa: 'Accentur', monto: '€850', documento: 'factura_002.pdf' },
    { fecha: '2023-05-05', empresa: 'Zapatos Conchi', monto: '€2,000', documento: 'factura_003.pdf' },
    { fecha: '2023-06-10', empresa: 'Iberdrola', monto: '€1,500', documento: 'factura_004.pdf' },
    { fecha: '2023-07-22', empresa: 'Kutxabank', monto: '€3,200', documento: 'factura_005.pdf' }
];

// Función para buscar clientes
function buscarClientes(query) {
    if (!query) return clientes;
    query = query.toLowerCase();
    return clientes.filter(cliente => 
        cliente.empresa.toLowerCase().includes(query) || 
        cliente.email.toLowerCase().includes(query) || 
        cliente.telefono.includes(query)
    );
}

// Función para buscar alumnos
function buscarAlumnos(query) {
    if (!query) return alumnos;
    query = query.toLowerCase();
    return alumnos.filter(alumno => 
        alumno.nombre.toLowerCase().includes(query) || 
        alumno.apellidos.toLowerCase().includes(query) || 
        alumno.curso.toLowerCase().includes(query) || 
        alumno.telefono.includes(query)
    );
}

// Función para buscar facturas
function buscarFacturas(query) {
    if (!query) return facturas;
    query = query.toLowerCase();
    return facturas.filter(factura => 
        factura.empresa.toLowerCase().includes(query) || 
        factura.fecha.includes(query) || 
        factura.monto.toLowerCase().includes(query)
    );
}

// Función para añadir un nuevo cliente
function agregarCliente(cliente) {
    cliente.id = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
    clientes.push(cliente);
    actualizarTablaClientes();
    return cliente;
}

// Función para eliminar un cliente
function eliminarCliente(id) {
    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
        clientes.splice(index, 1);
        actualizarTablaClientes();
        return true;
    }
    return false;
}

// Función para añadir un nuevo contacto al histórico
function agregarContactoHistorico(contacto) {
    historicoContactos.unshift(contacto); // Añadir al principio para que aparezca primero
    actualizarHistoricoContactos();
    return contacto;
}

// Función para actualizar la tabla de clientes en la interfaz
function actualizarTablaClientes() {
    const tbody = document.querySelector('#listaclientes table tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    clientes.forEach(cliente => {
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => window.location.href = `detalleCliente.html?id=${cliente.id}`;
        
        tr.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.empresa}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefono}</td>
            <td>
                <i class="bi bi-pencil p-2" onclick="event.stopPropagation(); editarCliente(${cliente.id})"></i>
                <i class="bi bi-trash p-2 text-danger" onclick="event.stopPropagation(); confirmarEliminarCliente(${cliente.id})"></i>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
}

// Función para actualizar la tabla de alumnos en la interfaz
function actualizarTablaAlumnos() {
    const tbody = document.querySelector('#listaalumnos table tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    alumnos.forEach(alumno => {
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => window.location.href = `detalleAlumno.html?id=${alumno.id}`;
        
        tr.innerHTML = `
            <td>${alumno.id}</td>
            <td>${alumno.curso}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellidos}</td>
            <td>${alumno.telefono}</td>
            <td>
                <i class="bi bi-pencil p-2" onclick="event.stopPropagation(); editarAlumno(${alumno.id})"></i>
                <i class="bi bi-trash p-2 text-danger" onclick="event.stopPropagation(); confirmarEliminarAlumno(${alumno.id})"></i>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
}

// Función para actualizar el histórico de contactos
function actualizarHistoricoContactos() {
    const historicoContainer = document.querySelector('.historico-container');
    if (!historicoContainer) return;
    
    historicoContainer.innerHTML = '';
    
    // Colores para los diferentes tipos de contacto
    const colores = {
        'Llamada': 'primary',
        'Reunión': 'warning',
        'Seguimiento': 'success',
        'Contrato': 'info',
        'Facturación': 'danger'
    };
    
    historicoContactos.forEach((contacto, index) => {
        const color = colores[contacto.tipo] || 'primary';
        const fecha = new Date(contacto.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
        
        const contactoElement = document.createElement('div');
        contactoElement.className = 'd-flex align-items-center';
        contactoElement.innerHTML = `
            <div class="bg-${color} rounded-circle p-3"></div>
            <div class="ms-3 text-center">
                <h5>${fecha} - ${contacto.tipo}</h5>
                <p>${contacto.detalles}</p>
            </div>
        `;
        
        historicoContainer.appendChild(contactoElement);
        
        // Añadir línea conectora excepto para el último elemento
        if (index < historicoContactos.length - 1) {
            const lineaElement = document.createElement('div');
            lineaElement.className = `border-start border-${color} ps-4 py-2`;
            historicoContainer.appendChild(lineaElement);
        }
    });
}

// Función para actualizar la tabla de facturas
function actualizarTablaFacturas() {
    const tbody = document.querySelector('#presupuesto-table tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    facturas.forEach(factura => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${factura.fecha}</td>
            <td>${factura.empresa}</td>
            <td>${factura.monto}</td>
            <td><a href="facturas/${factura.documento}" class="btn btn-primary" target="_blank">Ver PDF</a></td>
        `;
        
        tbody.appendChild(tr);
    });
}

// Función para confirmar eliminación de cliente
function confirmarEliminarCliente(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        eliminarCliente(id);
    }
}

// Función para confirmar eliminación de alumno
function confirmarEliminarAlumno(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
        const index = alumnos.findIndex(a => a.id === id);
        if (index !== -1) {
            alumnos.splice(index, 1);
            actualizarTablaAlumnos();
        }
    }
}

// Inicializar las tablas cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar búsqueda en clientes
    const buscarClientesInput = document.querySelector('#listaclientes input[type="search"]');
    const buscarClientesBtn = document.querySelector('#listaclientes button[type="submit"]');
    
    if (buscarClientesInput && buscarClientesBtn) {
        buscarClientesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const query = buscarClientesInput.value;
            const resultados = buscarClientes(query);
            
            const tbody = document.querySelector('#listaclientes table tbody');
            tbody.innerHTML = '';
            
            resultados.forEach(cliente => {
                const tr = document.createElement('tr');
                tr.style.cursor = 'pointer';
                tr.onclick = () => window.location.href = `detalleCliente.html?id=${cliente.id}`;
                
                tr.innerHTML = `
                    <td>${cliente.id}</td>
                    <td>${cliente.empresa}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefono}</td>
                    <td>
                        <i class="bi bi-pencil p-2" onclick="event.stopPropagation(); editarCliente(${cliente.id})"></i>
                        <i class="bi bi-trash p-2 text-danger" onclick="event.stopPropagation(); confirmarEliminarCliente(${cliente.id})"></i>
                    </td>
                `;
                
                tbody.appendChild(tr);
            });
        });
    }
    
    // Inicializar búsqueda en alumnos
    const buscarAlumnosInput = document.querySelector('#listaalumnos input[type="search"]');
    const buscarAlumnosBtn = document.querySelector('#listaalumnos button[type="submit"]');
    
    if (buscarAlumnosInput && buscarAlumnosBtn) {
        buscarAlumnosBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const query = buscarAlumnosInput.value;
            const resultados = buscarAlumnos(query);
            
            const tbody = document.querySelector('#listaalumnos table tbody');
            tbody.innerHTML = '';
            
            resultados.forEach(alumno => {
                const tr = document.createElement('tr');
                tr.style.cursor = 'pointer';
                tr.onclick = () => window.location.href = `detalleAlumno.html?id=${alumno.id}`;
                
                tr.innerHTML = `
                    <td>${alumno.id}</td>
                    <td>${alumno.curso}</td>
                    <td>${alumno.nombre}</td>
                    <td>${alumno.apellidos}</td>
                    <td>${alumno.telefono}</td>
                    <td>
                        <i class="bi bi-pencil p-2" onclick="event.stopPropagation(); editarAlumno(${alumno.id})"></i>
                        <i class="bi bi-trash p-2 text-danger" onclick="event.stopPropagation(); confirmarEliminarAlumno(${alumno.id})"></i>
                    </td>
                `;
                
                tbody.appendChild(tr);
            });
        });
    }
    
    // Inicializar búsqueda en facturas
    const buscarFacturasInput = document.querySelector('#presupuesto-container input[type="search"]');
    const buscarFacturasBtn = document.querySelector('#presupuesto-container button[type="submit"]');
    
    if (buscarFacturasInput && buscarFacturasBtn) {
        buscarFacturasBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const query = buscarFacturasInput.value;
            const resultados = buscarFacturas(query);
            
            actualizarTablaFacturas(resultados);
        });
    }
    
    // Inicializar formulario de nuevo contacto en histórico
    const formHistorico = document.querySelector('#form-historico');
    if (formHistorico) {
        formHistorico.addEventListener('submit', function(e) {
            e.preventDefault();
            const fecha = document.querySelector('#fecha-contacto').value;
            const tipo = document.querySelector('#tipo-contacto').value;
            const detalles = document.querySelector('#detalles-contacto').value;
            
            if (fecha && tipo && detalles) {
                agregarContactoHistorico({ fecha, tipo, detalles });
                formHistorico.reset();
            }
        });
    }
    
    // Inicializar tablas
    actualizarTablaClientes();
    actualizarTablaAlumnos();
    actualizarHistoricoContactos();
    actualizarTablaFacturas();
    
    // Inicializar botón de nuevo cliente
    const btnNuevoCliente = document.querySelector('.btn-nuevo-cliente');
    if (btnNuevoCliente) {
        btnNuevoCliente.addEventListener('click', function() {
            window.location.href = 'nuevoregistro.html';
        });
    }
});
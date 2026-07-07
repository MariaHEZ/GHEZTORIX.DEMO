# sistema-digital-gheztorix
Aplicación  para la gestión integral de un despacho contable y fiscal, con login de usuarios y menú principal.
# SISTEMA DIGITAL PARA LA GESTIÓN DE DESPACHOS

###

Sistema Digital para la Gestión de Despachos

### Autor

Maria jaqueline martinez hernandez

### Descripción

Proyecto académico orientado al desarrollo de un sistema digital para la administración, control y seguimiento de despachos, clientes, facturación y documentación empresarial mediante tecnologías de desarrollo de software y bases de datos relacionales.

---

# 1. Descripción General del Proyecto

El Sistema Digital para la Gestión de Despachos es una solución informática desarrollada con el propósito de automatizar los procesos administrativos relacionados con el control de despachos, gestión de clientes, facturación y seguimiento de servicios.

El sistema permite centralizar la información operativa en una base de datos relacional, optimizando el almacenamiento, consulta y administración de registros mediante módulos organizados y funcionalidades CRUD (Create, Read, Update y Delete).

La aplicación está diseñada bajo una arquitectura modular, permitiendo escalabilidad, mantenimiento y administración eficiente de la información.

---

# 2. Objetivo General

Desarrollar un sistema digital funcional que permita administrar y controlar los procesos de gestión de despachos, automatizando el registro, seguimiento y consulta de información mediante herramientas tecnológicas y bases de datos relacionales.

---

# 3. Objetivos Específicos

* Implementar una base de datos relacional para el almacenamiento seguro de información.
* Gestionar clientes, usuarios y despachos dentro del sistema.
* Automatizar procesos de consulta y administración de registros.
* Implementar operaciones CRUD para manipulación de datos.
* Facilitar el control y seguimiento de documentación y facturación.
* Aplicar conceptos de integridad y seguridad en la base de datos.

---

# 4. Problemática

En muchos procesos administrativos, la gestión manual de despachos genera problemas como:

* Pérdida de información.
* Retrasos en consultas.
* Duplicidad de registros.
* Errores en documentación.
* Falta de control sobre fechas de vencimiento.
* Dificultad para consultar clientes y facturas.

El sistema desarrollado busca reducir estos problemas mediante la automatización y centralización de la información.

---

# 5. Ventajas del Sistema

## Ventajas operativas

* Automatización de procesos administrativos.
* Reducción de errores humanos.
* Consulta rápida de información.
* Organización eficiente de documentos y registros.
* Mejor control de usuarios y clientes.
* Seguimiento de despachos en tiempo real.

## Ventajas técnicas

* Arquitectura modular.
* Integración con base de datos MySQL.
* Escalabilidad del sistema.
* Código organizado y mantenible.
* Compatibilidad multiplataforma.
* Facilidad de actualización.

---

# 6. Funciones Principales del Sistema

## Gestión de usuarios

El sistema permite:

* Registrar usuarios.
* Administrar accesos.
* Validar credenciales.
* Controlar permisos.

## Gestión de clientes

Permite:

* Registrar clientes.
* Consultar información.
* Actualizar datos.
* Eliminar registros.

## Gestión de despachos

Incluye:

* Registro de despachos.
* Seguimiento de entregas.
* Control de estatus.
* Consulta de historial.

## Gestión de facturación

Permite:

* Registrar facturas.
* Consultar pagos.
* Administrar montos.
* Relacionar facturas con despachos.

## Gestión documental

Incluye:

* Control de documentación.
* Validación de archivos.
* Administración de registros digitales.
* Consulta de documentos asociados.

## Fechas de vencimiento

El sistema puede:

* Registrar fechas límite.
* Mostrar vencimientos.
* Controlar periodos de pago.
* Emitir alertas administrativas.

---

# 7. Tecnologías Utilizadas

## Lenguaje de programación

* Java

## Base de datos

* MySQL

## Herramientas de desarrollo

* Git
* Github
* NetBeans
* Visual Studio Code

## Librerías y APIs

* JDBC
* MySQL Connector/J

---

# 8. Arquitectura del Sistema

El sistema se encuentra estructurado bajo una arquitectura modular dividida en capas:

## Capa de presentación

Encargada de la interfaz visual y comunicación con el usuario.

## Capa lógica

Gestiona las reglas de negocio y procesamiento de información.

## Capa de datos

Administra la conexión y operaciones con la base de datos.

---

# 9. Estructura del Proyecto

```text
sistema-gestion-despachos/
│
├── README.md
├── src/
├── database/
├── librerias/
├── capturas/
├── docs/
└── .gitignore
```

---

# 10. Estructura de Carpetas

## Carpeta src/

Contiene el código fuente del sistema.

### Subcarpetas

* conexion/
* modelos/
* controladores/
* vistas/
* principal/




---

# 11. Módulos del Sistema

## Módulo de usuarios

Administra accesos y autenticación.

## Módulo de clientes

Gestiona información de clientes.

## Módulo de despachos

Controla el registro y seguimiento de despachos.

## Módulo de facturación

Administra información fiscal y facturas.

## Módulo documental

Gestiona archivos y documentación digital.

---

# 12. Seguridad e Integridad de Datos

El sistema implementa mecanismos básicos de seguridad e integridad:

* Uso de claves primarias y foráneas.
* Validación de datos.
* Restricción de acceso.
* Protección de información.
* Organización relacional.
* Respaldo de base de datos.

---

# 13. Compatibilidad Multiplataforma

El sistema puede ejecutarse en distintos entornos:

* Windows
* Linux
* macOS

Gracias al uso de Java y MySQL, la aplicación mantiene compatibilidad multiplataforma.

---

# 14. Base de Datos

## Motor de base de datos

MySQL

## Tablas principales

* Usuarios
* Clientes
* Despachos
* Facturas
* Servicios
* Documentación

---

# 15. Tabla SQL

```sql
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
    correo VARCHAR(100)
);
```

---

# 16. Conexión Java MySQL

```java
Connection con;
String url = "jdbc:mysql://localhost:3306/sistema_despachos";
String user = "root";
String password = "";
```

---

# 17. Flujo Operativo del Sistema

1. Inicio de sesión.
2. Validación de usuario.
3. Acceso al menú principal.
4. Registro de clientes.
5. Registro de despachos.
6. Gestión de facturación.
7. Consulta de información.
8. Generación de reportes.

---

# 18. Esquema General del Sistema

```text
USUARIO
   │
   ▼
INTERFAZ DEL SISTEMA
   │
   ▼
CONTROLADORES
   │
   ▼
BASE DE DATOS MYSQL
```

---

# 19. Ejecución del Proyecto

## Requisitos

* Java JDK 8 o superior.
* MySQL Server.
* NetBeans o Visual Studio Code.
* Git instalado.

---

## Pasos de ejecución


```

### 2. Importar base de datos

Ejecutar:

```text
database/sistema_despachos.sql
```

### 3. Configurar conexión MySQL

Modificar usuario y contraseña.

### 4. Ejecutar Main.java

Abrir el proyecto y ejecutar la clase principal.

---





* login.png
* menu.png
* clientes.png
* despachos.png
* facturas.png

---



---

# 

El Sistema Digital para la Gestión de Despachos representa una solución funcional orientada a la automatización de procesos administrativos mediante tecnologías de programación y bases de datos.

La implementación del sistema permitió integrar conceptos de ingeniería de software, modelado de datos, seguridad e integridad de información, así como herramientas modernas de desarrollo y control de versiones.

El proyecto proporciona una base escalable para futuras mejoras y expansión de funcionalidades.

---


```text
https://github.com/MariaHEZ/sistema-gestion-despachos
```


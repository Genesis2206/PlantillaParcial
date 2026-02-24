Integrante: Genesis Maribel Cruz Ortiz SMIS917820
Problemática propuesta---
Situación:  
En una clínica pequeña, los pacientes suelen llamar por teléfono para calcular su Índice de Masa Corporal (IMC) y recibir recomendaciones básicas de salud. 
Esto genera retrasos y sobrecarga al personal administrativo.

Solución:  
Crear una página web interactiva donde los usuarios puedan ingresar su peso y altura, calcular automáticamente su IMC y ver el resultado en pantalla sin necesidad de recargar la página.

Sectores beneficiados:
Salud (clínicas, nutricionistas, gimnasios).
Educación (estudiantes de medicina o nutrición que practican cálculos).
Público en general que quiera cuidar su salud.

Preguntas:
1. ¿Qué valor agregado tiene el uso de WebComponents a su proyecto?
El uso de WebComponents me permitió encapsular la lógica y la presentación del resultado del IMC dentro de un componente personalizado (<resultado-imc>). Esto agrega valor porque:
Separa responsabilidades (el formulario calcula, el componente muestra).

2. ¿De qué forma manipularon los datos sin recargar la página?
Use eventos de JavaScript (submit del formulario) para capturar los valores ingresados en los input y el select.
Luego, con cálculos en JS, se actualizó dinámicamente el contenido del WebComponent mediante el método mostrarResultado().
Todo esto ocurre en el navegador, sin necesidad de recargar la página.

4. ¿De qué forma validaron las entradas de datos? Expliquen brevemente
Implemente validaciones en el evento del formulario:
Se verificó que los campos no estuvieran vacíos (required en los inputs).
Se comprobó que los valores fueran mayores que cero (peso > 0, altura > 0).
Si los datos eran inválidos, el WebComponent mostraba un mensaje de advertencia en lugar de calcular el IMC.

4. ¿Cómo manejaría la escalabilidad futura en su página?
Para escalar mi proyecto en el futuro se podría:
Crear más WebComponents para otras funcionalidades (ej. cálculo de calorías, recomendaciones de salud).
Separar el código en módulos (script.js, components.js, validations.js) para mantenerlo ordenado.

Integrar almacenamiento local o conexión con una base de datos para guardar resultados.

Usar frameworks o librerías modernas (React, Vue, Angular) si el proyecto crece mucho.

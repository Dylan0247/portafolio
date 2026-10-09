# Portafolio DevOps

## Contexto
Web personal en español, Astro + TypeScript + CSS, salida estática para Vercel.
Lee src/data/portfolio.ts para el contenido público y docs/decisiones.md para el alcance.
Antes de modificar la interfaz lee DESIGN.md. El original se conserva sin cambios;
las contradicciones y sustituciones adoptadas están en docs/decisiones.md.

## Trabajo
- El contenido editable vive en src/data/portfolio.ts. No inventes empleos, clientes,
  conocimientos dominados, certificaciones obtenidas ni métricas.
- La preparación de certificaciones no acredita experiencia profesional.
- No copies notas privadas de Cerebro, credenciales, conversaciones o rutas locales
  a public/ o al contenido de la web. Cerebro es contexto de trabajo, no un backend público.
- Conserva HTML semántico, navegación por teclado, foco visible y movimiento reducido.
- Después de cambios de código ejecuta npm run check y npm run build.
- Para una revisión previa a publicación usa .agents/skills/revisar-portafolio/SKILL.md.
- GitHub y Vercel son el destino previsto. Publica únicamente cuando el usuario
  lo solicite; este archivo no autoriza por sí mismo una publicación.
- Antes de preparar un commit o publicar, revisa el contenido, índice e historial
  saliente con SafeGit. Añade solo archivos revisados de forma explícita. Los informes
  y notas locales ignorados deben conservarse fuera del commit.
- El CV y los contactos de src/data/portfolio.ts están destinados al portafolio
  por petición expresa de su titular. Esto no autoriza publicar otros datos personales.

## Roles opcionales
.codex/agents/ define frontend, contenido y revisor. Utilízalos cuando el usuario
pida delegación o trabajo con varios agentes. Asigna responsabilidades concretas
y evita que dos agentes editen los mismos archivos a la vez.

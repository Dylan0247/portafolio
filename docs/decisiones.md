# Decisiones del proyecto

## Alcance confirmado
Crear un caso práctico con instrucciones, diseño, agentes y skills; preparar un
portafolio para empleo DevOps y oportunidades freelance. Primero revisar en local.
GitHub es el destino del código; el despliegue de la web en Vercel está pendiente.

## Implementación
Astro + TypeScript + CSS con salida estática. No se necesita backend, base de
datos ni acceso público a Cerebro. Datos editables en src/data/portfolio.ts.
Vercel puede publicar dist/ con npm run build. Dominio y URL final pendientes.

## Aplicación de DESIGN.md
Se conserva el documento original facilitado por el usuario.
- Fondo #f6f3f1, títulos serif en peso 400, cuerpo monoespaciado, contornos #cecac8.
- La tabla de colores contradice la descripción y los ejemplos respecto al azul.
  Se adopta la regla final: #2b59d1 solo para la acción principal; pasteles decorativos.
- Georgia sustituye Untitled Serif; Courier New sustituye temporalmente ABC Diatype
  Mono con fallback monospace. No se incluyen fuentes comerciales sin sus archivos/licencia.
- Tamaños y padding se adaptan en móvil; el texto debe permanecer legible.
- Las secciones SaaS del ejemplo se adaptan a un portafolio: no hay clientes,
  testimonios, login ni logos de socios inventados.

## Agentes y skills
Roles del proyecto en .codex/agents/*.toml, siguiendo la documentación consultada:
https://learn.chatgpt.com/docs/agent-configuration/subagents.
Cada rol declara name, description y developer_instructions. No se fijan modelos.
Skill local en .agents/skills/revisar-portafolio/SKILL.md.
AGENTS.md contiene reglas comunes; DESIGN.md describe la apariencia.
Crear archivos de roles no implica haber ejecutado subagentes.

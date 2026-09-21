# FabricaSoftware — React + TypeScript

Site desenvolvido para a Fabrica de Software do Grupo Integrado

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
└── rafaelfrossard-fabricasoftware/
    ├── README.md
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── .oxlintrc.json
    ├── api/
    │   └── sendEmail.ts
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        └── components/
            ├── layout/
            │   ├── Button.tsx
            │   ├── ContactForm.tsx
            │   ├── Container.tsx
            │   ├── Footer.tsx
            │   └── Header.tsx
            └── sections/
                ├── About.tsx
                ├── Areas.tsx
                ├── Contact.tsx
                ├── Home.tsx
                ├── Projects.tsx
                └── Team.tsx
```



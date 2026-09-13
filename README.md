# About me

Pagina mea de profil: cine sunt, ce tehnologii folosesc și unde mă găsești.

**Live:** https://constantyn-silvian.github.io/about-me/

## Tehnologii

- React 19 + Vite
- CSS simplu, fără framework
- [react-icons](https://react-icons.github.io/react-icons/) pentru logouri
- Canvas pentru fundalul cu constelații

## Funcționalități

- Fundal animat cu constelații care reacționează la cursor
- Secțiunea „Expertiză” care se deschide la click
- Copierea emailului dintr-un click
- Responsive, merge și pe telefon

## Rulare locală

```bash
npm install
npm run dev
```

Apoi deschide http://localhost:5173/about-me/

## Build pentru GitHub Pages

```bash
npm run build
```

Build-ul se generează în folderul `docs/`, pe care GitHub Pages îl publică direct de pe branch-ul `main`.

## Personalizare

Toate datele (nume, poză, email, tehnologii, linkuri) sunt în [`src/config.js`](src/config.js).

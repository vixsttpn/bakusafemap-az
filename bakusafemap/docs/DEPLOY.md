# Deployment

## Cloudflare Workers
```bash
npm run build
npx wrangler pages deploy out --project-name bakusafemap-az
```

## Vercel
```bash
npm run build
npx vercel --prod
```

## GitHub Pages
```bash
npm run build
cp -r out docs
git push
```

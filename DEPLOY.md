# Deployment Configuration

This file contains instructions for deploying the Angular application in different environments.

## Production Build Output
The production-ready files are in the `dist/my-profile/` directory:
- `index.html` - Entry point
- `main.*.js` - Application bundle
- `polyfills.*.js` - Browser compatibility
- `runtime.*.js` - Webpack runtime
- `styles.*.css` - Compiled styles

## Deployment Options

### 1. Static Hosting (Recommended)
Deploy to static hosting services like:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

#### GitHub Pages Quick Deploy
```bash
# Install gh-pages if not already installed
npm install -g gh-pages

# Deploy dist folder
gh-pages -d dist/my-profile
```

#### Netlify Quick Deploy
1. Connect your GitHub repository to Netlify
2. Set build command: `export NODE_OPTIONS=--openssl-legacy-provider && ng build --configuration production`
3. Set publish directory: `dist/my-profile`

### 2. Server Configuration
If deploying to a web server (Apache/Nginx), ensure:

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx (nginx.conf)
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist/my-profile;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Environment Specific Setup

1. Update `src/environments/environment.prod.ts` with production API endpoints
2. Update canonical URLs and meta tags in `index.html` with production domain
3. Enable HTTPS/SSL in production

## Post-Deployment Checklist

- [ ] Verify all assets load correctly (no 404s)
- [ ] Check meta tags and SEO elements
- [ ] Validate JSON-LD structured data
- [ ] Test all routes and navigation
- [ ] Verify external links and API endpoints
- [ ] Run performance test (Lighthouse)
- [ ] Submit sitemap to search engines

## Optimization Notes

Current bundle size: 657.89 kB (exceeds recommended 500 kB)
Consider:
1. Enable gzip compression on server
2. Implement lazy loading for routes
3. Optimize images and third-party dependencies
4. Use differential loading for modern browsers
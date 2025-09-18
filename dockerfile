# ---- STAGE 1 : Build ----
FROM node:18-alpine AS builder

# Définir le dossier de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires à l'installation
COPY package*.json ./

# Installer les dépendances (inclure dev pour la compilation)
RUN npm install

# Copier le reste du code source
COPY . .

# Compiler le projet NestJS
RUN npm run build


# ---- STAGE 2 : Production ----
FROM node:18-alpine AS prod

# Définir le dossier de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires à l’exécution
COPY package*.json ./

# Installer uniquement les dépendances de production
RUN npm install --omit=dev

# Copier les fichiers compilés depuis le builder
COPY --from=builder /app/dist ./dist

# Exposer le port de l'app Nest
EXPOSE 3000

# Démarrer l'application
CMD ["node", "dist/main.js"]

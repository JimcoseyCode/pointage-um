# Utilisez une image Node.js de base (ajustez la version si nécessaire)
FROM node:18-alpine

# Créer le répertoire de travail
WORKDIR /app

# Copier le package.json et les fichiers de dépendance
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application Next.js
RUN npm run build


EXPOSE 3000

# Commande pour lancer l'application à l'exécution du conteneur
CMD ["npm", "start"]
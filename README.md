# aline-nextjs
site make with next-js.

# run the container
docker compose up -d --build

# run project
docker exec -it node-next sh
cd /app/landingpage
npx shadcn@latest init
npx shadcn@latest add button
npm install @phosphor-icons/react

$npm run dev









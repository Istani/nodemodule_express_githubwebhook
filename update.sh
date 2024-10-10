cd ..
cd ..
git pull --recurse-submodules
git submodule update --init
git submodule foreach git pull origin main
npm install
git add .
git commit -m "ci: update submodules"
git push